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
    // <div className="article-card">
      <Link to={`/articles/${article_id}`} className="article-card">
        <h3 className="article-card-title">{title}</h3>
      
      <img
        className="article-thumbnail"
        src={article_img_url}
        alt={`${title} article thumbnail`}
      />
      <p className="article-card-topic">{topic}</p>
      <p className="article-card-rating">{votes} vote{votes !== 1 && "s"}</p>
      <p className="article-card-author">{author}</p>
      <p className="article-card-date">
        {dayjs(created_at).format("DD/MM/YYYY")}
      </p>
      </Link>
    // </div>
  );
}

export default ArticleCard;
