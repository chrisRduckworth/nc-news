import { useEffect, useState } from "react";
import { getTopics } from "../../../utils/api";

function Filters({ setSearchParams }) {
  const [topics, setTopics] = useState([]);
  const [filtersForm, setFiltersForm] = useState({});

  useEffect(() => {
    getTopics().then((topicsData) => {
      setTopics(topicsData);
    });
  }, []);

  const handleFormChange = (event, category) => {
    setFiltersForm((currForm) => {
      const copyForm = { ...currForm };
      copyForm[category] = event.target.value;
      return copyForm;
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSearchParams((currParams) => {
      for (const key in filtersForm) {
        currParams.set(key, filtersForm[key]);
      }
      if (currParams.get("topic") === "") {
        currParams.delete("topic");
      }
      return currParams;
    });
  };

  return (
    <form id="filter-form">
      <div>
        <label htmlFor="topics-form">Topics:</label>
        <select id="topics-form" onChange={(e) => handleFormChange(e, "topic")}>
          <option value="">View all</option>
          {topics.map((topic) => {
            return (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="sort-by-form">Sort by:</label>
        <select
          id="sort-by-form"
          onChange={(e) => handleFormChange(e, "sort_by")}
        >
          <option value="date">Date</option>
          <option value="comment_count">Comment count</option>
          <option value="votes">Votes</option>
        </select>
      </div>
      <div>
        <label htmlFor="order-form">Order:</label>
        <select id="order-form" onChange={(e) => handleFormChange(e, "order")}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
        <button onClick={handleFormSubmit} className="filter-button">
          Filter
        </button>
    </form>
  );
}

export default Filters;
