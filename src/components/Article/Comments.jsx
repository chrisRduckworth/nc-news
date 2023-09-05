import { useEffect, useState } from "react";
import { getArticleComments } from "../../../utils/api";
import CommentCard from "./CommentCard";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleComments(article_id).then((commentData) => {
      setIsLoading(false);
      setComments(commentData);
    });
  }, []);

  if (isLoading) return <p>Loading comments...</p>;

  return (
    <section>
      <h2>Comments</h2>
      <ol id="comments-list">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ol>
    </section>
  );
}

export default Comments;
