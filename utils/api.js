import axios from "axios";

export function getArticles() {
  return axios
    .get("https://chris-d-backend-news-project.onrender.com/api/articles")
    .then(({ data: { articles } }) => {
      return articles;
    })
}
