import { useEffect, useState } from "react";
import { getArticleById } from "../../../utils/api";
import dayjs from "dayjs";

function Content({ article_id, setIsError }) {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      setIsLoading(false);
      setArticle(articleData);
    }).catch((err) => {
      setIsLoading(false)
      setIsError(true)
    })
  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <h1 id="article-title">{article.title}</h1>
      <section id="article-subheader-container">
        <p>
          <span id="article-author">{article.author}</span> on{" "}
          {dayjs(article.created_at).format("DD/MM/YYYY")}
        </p>
        <p>
          Votes:
          <button className="vote-button">-</button>
          {article.votes}
          <button className="vote-button">+</button>
        </p>
      </section>
      <article id="article-body">
        <p>{article.body}</p>
        <img
          src={article.article_img_url}
          alt={`image relating to ${article.title}`}
          id="article-image"
        />
      </article>
    </>
  );
}

export default Content;
