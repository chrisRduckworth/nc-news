import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User";
import TitleForm from "./TitleForm";
import TopicForm from "./TopicForm";
import ContentForm from "./ContentForm";
import ImageForm from "./ImageForm";
import "./NewArticle.css";
import { postArticle } from "../../../utils/api";
import { useNavigate } from "react-router-dom";

function NewArticle() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user.username) {
    return (
      <main>
        <p>You must be logged in to post a new article</p>
      </main>
    );
  }

  const [form, setForm] = useState({
    author: user.username,
    title: "",
    body: "",
    topic: "",
    article_img_url: "",
  });
  const [formFailed, setFormFailed] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  function handleSubmit(event) {
    setFormFailed("");
    event.preventDefault();
    const urlRegex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if (!Object.values(form).every((e) => e) && form.article_img_url) {
      setFormFailed("Fields cannot be blank");
    } else if (form.title.length < 5 || form.title.length >= 100) {
      setFormFailed("Title must be between 5 and 100 characters");
    } else if (form.body.length < 10 || form.body.length >= 4000) {
      setFormFailed("Content must be between 10 and 4000 characters");
    } else if (!urlRegex.test(form.article_img_url)) {
      setFormFailed("Invalid image URL");
    } else {
      setIsPosting(true);
      postArticle(form)
        .then(({ article_id }) => {
          navigate(`/articles/${article_id}`);
          setIsPosting(false);
        })
        .catch((err) => {
          setIsPosting(false);
          setFormFailed("Something went wrong");
        });
    }
  }
  return (
    <main>
      <h1>Create new article</h1>
      <form id="new-article-form">
        <TitleForm form={form} setForm={setForm} />
        <TopicForm setForm={setForm} />
        <ContentForm form={form} setForm={setForm} />
        <ImageForm form={form} setForm={setForm} />
        <button onClick={handleSubmit} disabled={isPosting}>
          {isPosting ? "Posting..." : "Submit"}
        </button>
        <span>{formFailed}</span>
      </form>
    </main>
  );
}

export default NewArticle;
