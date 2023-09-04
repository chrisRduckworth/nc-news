import { Link } from "react-router-dom";

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
  const date = created_at.slice(0, 10);
  return (
    <div className="article-card">
      <Link to={`/articles/${article_id}`}>
        <h3 className="article-card-title">{title}</h3>
      </Link>
      <img className="article-thumbnail" src={article_img_url} alt={`${title} article thumbnail`}/>
      <p className="article-card-topic">{topic}</p>
      <p className="article-card-rating">{votes} votes</p>
      <p className="article-card-author">{author}</p>
      <p className="article-card-date">{date}</p>
    </div>
  );
}

export default ArticleCard;
