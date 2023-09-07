import { useParams } from "react-router-dom";
import "./Article.css";
import Content from "./Content";
import Comments from "./Comments";
import { useState } from "react";

function Article() {
  const { article_id } = useParams();
  const [isError, setIsError] = useState(false);

  if (isError)
    return (
      <main>
        {isError === 400 || isError === 404 ? (
          <p>Article not found</p>
        ) : (
          <p>Something went wrong</p>
        )}
      </main>
    );

  return (
    <main>
      <Content setIsError={setIsError} article_id={article_id} />
      <Comments article_id={article_id} />
    </main>
  );
}

export default Article;
