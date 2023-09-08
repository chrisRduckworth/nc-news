import { useContext, useEffect, useState } from "react";
import { deleteArticle, getArticleById } from "../../../utils/api";
import dayjs from "dayjs";
import VoteButtons from "./VoteButtons";
import { UserContext } from "../../contexts/User";
import { useNavigate } from "react-router-dom";

function Content({ article_id, setIsError }) {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorDeleting, setErrorDeleting] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function handleDelete(event) {
    setErrorDeleting(false);
    setIsDeleting(true);
    deleteArticle(article.article_id)
      .then(() => {
        setIsDeleting(false);
        navigate("/articles");
      })
      .catch((err) => {
        setIsDeleting(false);
        setErrorDeleting(true);
      });
  }

  useEffect(() => {
    getArticleById(article_id)
      .then((articleData) => {
        setIsLoading(false);
        setArticle(articleData);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(err.response.status);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div id="article-header">
        <h1 id="article-title">{article.title}</h1>
        <div className="delete-article-container">
          {errorDeleting && <p>Something went wrong</p>}
          {user.username === article.author && (
            <button
              className="delete-button"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          )}
        </div>
      </div>
      <section id="article-subheader-container">
        <p>
          <span id="article-author">{article.author}</span> on{" "}
          {dayjs(article.created_at).format("DD/MM/YYYY")}
        </p>
        <VoteButtons votes={article.votes} id={article_id} parent="articles" />
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
