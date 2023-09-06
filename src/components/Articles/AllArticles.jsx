import { useEffect, useState } from "react";
import Pages from "./Pages";
import Filters from "./Filters";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../../../utils/api";
import "./Articles.css";
import { useSearchParams } from "react-router-dom";

// TO DO:
// figure out why it's rendering so many bloody times DONE but i don't know how to fix it
// it's because every time state changes it rerenders, including when isLoading etc
// do ali's optimistic rendering DONE
// get categories to work
// error for page = 10. or redirect? DONE

function AllArticles() {
  const [articles, setArticles] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("rendering")

  useEffect(() => {
    setIsLoading(true);
    getArticles({ p: searchParams.get("p")})
      .then((articles) => {
        const lastPage = Math.ceil(articles.total_count / 10) || 1
        if (searchParams.get("p") > lastPage) {
          console.log("in if")
          setSearchParams((currParams) => {
            currParams.set("p", lastPage);
            return currParams;
          });
        } else if (searchParams.get("p") <= 0) {
          console.log("in else if")
          setSearchParams((currParams) => {
            currParams.set("p", 1);
            return currParams;
          });
        } else {
          console.log("articles rendering")
          setIsLoading(false);
          setArticles(articles);
        }
      })
      .catch((err) => {
        if (err.response.data.msg === "Invalid Page") {
          console.log("in error")
          setSearchParams((currParams) => {
            currParams.set("p", 1);
            return currParams;
          });
        }
      });
  }, [searchParams]);

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
