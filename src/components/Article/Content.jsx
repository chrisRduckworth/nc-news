import { useEffect, useState } from "react";
import { getArticleById } from "../../../utils/api";

function Content({ article_id }) {
  const [article, setArticle] = useState({});
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((articleData) => {
      setIsLoading(false);
      setArticle(articleData);
      setDate(articleData.created_at.slice(0, 10));
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1 id="article-title">{article.title}</h1>
      <div id="article-subheader-container">
        <p>
          <span id="article-author">{article.author}</span> on {date}
        </p>
        <p>
          Votes: {article.votes}
          <button>Vote</button>
        </p>
      </div>
      <article>{article.body}</article>
      <img
        src={article.article_img_url}
        alt={`image relating to ${article.title}`}
        id="article-image"
      />
    </>
  );
}

export default Content;
