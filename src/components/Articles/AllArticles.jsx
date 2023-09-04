import { useEffect, useState } from "react";
import Pages from "./Pages";
import Filters from "./Filters";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../../../utils/api";
import "./Articles.css"

function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [queries, setQueries] = useState({})

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((articles) => {
      setIsLoading(false);
      setArticles(articles);
    });
  }, []);

  return (
    <main>
      <h1>Articles</h1>
      <Filters />
      <section>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })
        )}
      </section>
      <Pages setQueries={setQueries}/>
    </main>
  );
}

export default AllArticles;
