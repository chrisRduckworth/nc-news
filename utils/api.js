import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://chris-d-backend-news-project.onrender.com/api",
});

export function getArticles(queries) {
  return newsApi.get("/articles", queries).then(({ data }) => {
    return data;
  });
}

export function getArticleById(id) {
  return newsApi.get(`/articles/${id}`).then(({ data: { article } }) => {
    return article;
  });
}

export function getArticleComments(id) {
  return newsApi
    .get(`/articles/${id}/comments`, { params: { limit: 1000 } })
    .then(({ data: { comments } }) => {
      return comments;
    });
}

export function patchArticleVote(id, inc_votes, parent) {
  return newsApi.patch(`/${parent}/${id}`, { inc_votes });
}

export function getUsers() {
  return newsApi.get("/users").then(({ data: { users } }) => {
    return users;
  });
}

export function postComment(id, username, body) {
  return newsApi
    .post(`/articles/${id}/comments`, { username, body })
    .then(({ data: { comment } }) => {
      return comment;
    });
}
