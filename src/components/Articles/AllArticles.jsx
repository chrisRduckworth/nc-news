import { useEffect, useState } from "react";
import Pages from "./Pages";
import Filters from "./Filters";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../../../utils/api";
import "./Articles.css";

function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [queries, setQueries] = useState({params: { p: 1, } });

  useEffect(() => {
    setIsLoading(true)
    getArticles(queries).then((articles) => {
      setIsLoading(false);
      setArticles(articles);
    });
  }, [queries]);

  return (
    <main>
      <h1>Articles</h1>
      <Filters />
      <section>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          articles.articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })
        )}
      </section>
      <Pages
        total_count={articles.total_count}
        queries={queries}
        setQueries={setQueries}
      />
    </main>
  );
}

export default AllArticles;
