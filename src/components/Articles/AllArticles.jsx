import { useEffect, useState } from "react";
import Pages from "./Pages";
import Filters from "./Filters";
import ArticleCard from "./ArticleCard";
import ArticlesList from "./ArticlesList";
import { getArticles } from "../../../utils/api";
import "./Articles.css";
import { useSearchParams } from "react-router-dom";

function AllArticles() {
  const [articles, setArticles] = useState({ articles: [], total_count: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles({ p: searchParams.get("p"), topic: searchParams.get("topic") })
      .then((articles) => {
        const lastPage = Math.ceil(articles.total_count / 10) || 1;
        if (searchParams.get("p") > lastPage) {
          setSearchParams((currParams) => {
            currParams.set("p", lastPage);
            return currParams;
          });
        } else if (searchParams.get("p") <= 0) {
          setSearchParams((currParams) => {
            currParams.set("p", 1);
            return currParams;
          });
        } else {
          setIsLoading(false);
          setArticles(articles);
        }
      })
      .catch((err) => {
        if (err.response.data.msg === "Invalid Page") {
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
      <Filters setSearchParams={setSearchParams} />
      <ArticlesList articles={articles} isLoading={isLoading} />
      <Pages
        total_count={articles.total_count}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </main>
  );
}

export default AllArticles;
