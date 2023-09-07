import dayjs from "dayjs";
import VoteButtons from "./VoteButtons";
import { deleteComment } from "../../../utils/api";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";

function CommentCard({
  comment,
  setComments,
  setDeleteErrorIndex,
  errorDeleting,
}) {
  const { user } = useContext(UserContext);
  const handleDelete = (event) => {
    setDeleteErrorIndex(-1);
    let commentIndex;
    setComments((currComments) => {
      commentIndex = currComments.indexOf(comment);
      return [
        ...currComments.slice(0, commentIndex),
        ...currComments.slice(commentIndex + 1),
      ];
    });
    deleteComment(comment.comment_id).catch((err) => {
      setDeleteErrorIndex(commentIndex);
      setComments((currComments) => {
        return [
          ...currComments.slice(0, commentIndex),
          comment,
          ...currComments.slice(commentIndex),
        ];
      });
    });
  };

  return (
    <li className="comment">
      <section className="comment-header">
        <h4>{comment.author}</h4>
        <p>{dayjs(comment.created_at).format("DD/MM/YYYY hh:mma")}</p>
      </section>
      <p>{comment.body}</p>
      <div className="button-container">
        <VoteButtons
          votes={comment.votes}
          id={comment.comment_id}
          parent="comments"
        />
        <div className="delete-container">
          {errorDeleting && <p>Error</p>}
          {user === comment.author && (
            <button onClick={handleDelete} className="delete-button">
              Delete
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default CommentCard;
