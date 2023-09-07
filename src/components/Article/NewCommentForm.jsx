import { useState, useContext } from "react";
import { UserContext } from "../../contexts/User";
import { postComment } from "../../../utils/api";

function NewCommentForm({ setComments, article_id }) {
  const { user } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [newComment, setNewComment] = useState("");

  const submitComment = (event) => {
    event.preventDefault();
    if (!user) {
      setMessage("You must be logged in to post a comment");
    } else if (newComment.length < 5 || newComment.length >= 500) {
      setMessage("Comments must be between 5 and 500 characters long");
    } else {
      setIsPosting(true);
      setMessage("");
      const newCommentObject = {
        author: user,
        body: newComment,
        comment_id: -1,
        created_at: Date.now(),
        votes: 0,
        article_id,
      };
      setComments((currComments) => {
        return [newCommentObject, ...currComments];
      });
      const tempCommentStorage = newComment;
      setNewComment("");
      postComment(article_id, user, newComment)
        .then((comment_data) => {
          setMessage("Posted!");
          setIsPosting(false);
          setComments((currComments) => {
            newCommentObject.comment_id = comment_data.comment_id;
            return [newCommentObject, ...currComments.slice(1)];
          });
        })
        .catch((err) => {
          setIsPosting(false);
          setMessage("Something went wrong");
          setNewComment(tempCommentStorage);
          setComments((currComments) => currComments.slice(1));
        });
    }
  };

  return (
    <>
      <form>
        <label htmlFor="new-comment">
          <h3>New Comment:</h3>
        </label>
        <div id="form-container">
          <textarea
            id="new-comment"
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            id="submit-button"
            onClick={submitComment}
            disabled={isPosting}
          >
            {isPosting ? "Posting..." : "Submit"}
          </button>
        </div>
      </form>
      <p id={message === "Posted!" ? "comment-posted" : "error-commenting"}>
        {message}
      </p>
    </>
  );
}

export default NewCommentForm;
