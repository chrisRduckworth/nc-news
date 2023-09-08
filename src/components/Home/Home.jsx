import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles, getComments } from "../../../utils/api";
import ArticleCard from "../Articles/ArticleCard";
import CommentCard from "./CommentCard";
import "./Home.css";

function Home() {
  const [latestArticles, setLatestArticles] = useState([]);
  const [latestComments, setLatestComments] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);

  useEffect(() => {
    setArticlesLoading(true);
    setCommentsLoading(true);
    getArticles({ limit: 3 }).then(({ articles }) => {
      setArticlesLoading(false);
      setLatestArticles(articles);
    });
    getComments({ limit: 5 }).then((comments) => {
      setCommentsLoading(false);
      setLatestComments(comments);
    });
  }, []);

  return (
    <main>
      <h1>Welcome to Northcoders News</h1>
      <h2>Latest Articles</h2>
      {articlesLoading ? (
        <p>Loading...</p>
      ) : (
        <ol>
          {latestArticles.map((article) => {
            return (
              <li>
                <ArticleCard key={article.article_id} article={article} />
              </li>
            );
          })}
        </ol>
      )}
      <Link to="/articles" className="home-links">View more articles</Link>
      <h2>Latest Comments</h2>
      {commentsLoading ? (
        <p>Loading...</p>
      ) : (
        <ol>
          {latestComments.map((comment) => {
            return (
              <li>
                <CommentCard key={comment.comment_id} comment={comment} />
              </li>
            );
          })}
        </ol>
      )}
      <Link to="/new_article" className="home-links">Post new article</Link>
    </main>
  );
}

export default Home;
