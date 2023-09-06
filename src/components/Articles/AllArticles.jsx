import { useEffect, useState } from "react";
import Pages from "./Pages";
import Filters from "./Filters";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../../../utils/api";
import "./Articles.css";
import { useSearchParams } from "react-router-dom";

// TO DO:
// figure out why it's rendering so many bloody times
// do ali's optimistic rendering
// get categories to work
// error for page = 10. or redirect?

function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  if (!searchParams.get("p")) searchParams.set("p", 1);

  useEffect(() => {
    setIsLoading(true);
    getArticles({ p: searchParams.get("p") }).then((articles) => {
      setIsLoading(false);
      setArticles(articles);
    });
  }, [searchParams]);

  console.log(searchParams.get("p"));

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
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </main>
  );
}

export default AllArticles;
