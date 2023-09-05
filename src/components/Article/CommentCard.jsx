import dayjs from "dayjs";

function CommentCard({ comment }) {
  return (
    <li className="comment">
      <section className="comment-header">
        <h4>{comment.author}</h4>
        <p>{dayjs(comment.created_at).format("DD/MM/YYYY hh:mma")}</p>
      </section>
      <p>{comment.body}</p>
      <p>
        Votes:
        <button className="vote-button">-</button>
        {comment.votes}
        <button className="vote-button">+</button>
      </p>
    </li>
  );
}

export default CommentCard;
