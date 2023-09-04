import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://chris-d-backend-news-project.onrender.com/api",
});

export function getArticles() {
  return newsApi.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
}

export function getArticleById(id) {
  return newsApi.get(`/articles/${id}`).then(({ data: { article } }) => {
    return article;
  });
}
