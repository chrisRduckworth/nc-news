import { useState, useEffect } from "react";
import { getTopics } from "../../../utils/api";

function TopicForm({ setForm }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicData) => {
      setTopics(topicData);
    });
  }, []);

  return (
    <>
      <label htmlFor="new-article-topic-form">
        <h2>Topic</h2>
      </label>
      <p>Select one</p>
      <select
        id="new-article-topic-form"
        className="new-article-form-item"
        onChange={(e) => {
          setForm((currForm) => {
            const copyForm = { ...currForm };
            copyForm.topic = e.target.value;
            return copyForm;
          });
        }}
      >
        <option value=""></option>
        {topics.map((topic) => {
          return (
            <option key={topic.slug} value={topic.slug}>
              {topic.slug}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default TopicForm;
