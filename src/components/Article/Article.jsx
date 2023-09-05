import { useParams } from "react-router-dom";
import "./Article.css";
import Content from "./Content";
import Comments from "./Comments";

function Article() {
  const { article_id } = useParams();
  return (
    <main>
      <Content article_id={article_id} />
      <Comments article_id={article_id}/>
    </main>
  );
}

export default Article;
