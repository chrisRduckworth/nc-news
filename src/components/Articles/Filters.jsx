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

  const handleFormChange = (event) => {
    setFiltersForm((currForm) => {
      const copyForm = { ...currForm };
      copyForm.topic = event.target.value;
      return copyForm;
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSearchParams((currParams) => {
      for (const key in filtersForm) {
        currParams.set(key, filtersForm[key]);
      }
      return currParams;
    });
  };

  return (
    <form id="filter-form">
      <label htmlFor="topics-form">Topics: </label>
      <select id="topics-form" onChange={handleFormChange}>
        <option value=""></option>
        {topics.map((topic) => {
          return (
            <option key={topic.slug} value={topic.slug}>
              {topic.slug}
            </option>
          );
        })}
      </select>
      <button onClick={handleFormSubmit} className="filter-button">Filter</button>
    </form>
  );
}

export default Filters;
