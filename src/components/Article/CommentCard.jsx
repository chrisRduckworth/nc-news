import dayjs from "dayjs";
import VoteButtons from "./VoteButtons";

function CommentCard({ comment }) {
  return (
    <li className="comment">
      <section className="comment-header">
        <h4>{comment.author}</h4>
        <p>{dayjs(comment.created_at).format("DD/MM/YYYY hh:mma")}</p>
      </section>
      <p>{comment.body}</p>
      <VoteButtons
        votes={comment.votes}
        id={comment.comment_id}
        parent="comments"
      />
    </li>
  );
}

export default CommentCard;
