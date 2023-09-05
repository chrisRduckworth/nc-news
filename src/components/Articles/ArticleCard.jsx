import { Link } from "react-router-dom";
import dayjs from "dayjs";

function ArticleCard({ article }) {
  const {
    author,
    article_id,
    article_img_url,
    created_at,
    title,
    topic,
    votes,
  } = article;
  return (
    <Link to={`/articles/${article_id}`} className="article-card">
      <h3 className="article-card-title">{title}</h3>
      <img
        className="article-thumbnail"
        src={article_img_url}
        alt={`${title} article thumbnail`}
      />
      <p className="article-card-topic">
        <span className="article-card-subheadings">Category:</span> {topic}
      </p>
      <p className="article-card-rating">
        <span className="article-card-subheadings">Votes:</span> {votes}
      </p>
      <p className="article-card-author">
        <span className="article-card-subheadings">Author:</span> {author}
      </p>
      <p className="article-card-date">
        <span className="article-card-subheadings">Date: </span>
        {dayjs(created_at).format("DD/MM/YYYY")}
      </p>
    </Link>
  );
}

export default ArticleCard;
