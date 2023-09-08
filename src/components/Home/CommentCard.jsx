import { Link } from "react-router-dom";
import dayjs from "dayjs";

function CommentCard({ comment }) {
  return (
    <section className="latest-comment-card">
      <div className="latest-comment-header-container">
        <p>
          <strong>{comment.author}</strong> on{" "}
          <strong>
            <Link to={`/articles/${comment.article_id}`}>{comment.title}:</Link>
          </strong>
        </p>
        <p>{dayjs(comment.created_at).format("DD/MM/YYYY hh:mma")}</p>
      </div>
      <p>{comment.body}</p>
    </section>
  );
}

export default CommentCard;
