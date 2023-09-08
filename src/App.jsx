import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import AllArticles from "./components/Articles/AllArticles";
import Article from "./components/Article/Article";
import Login from "./components/Login/Login";
import NewArticle from "./components/NewArticle/NewArticle";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new_article" element={<NewArticle />} />
        <Route path="/*" element={<p>Page not found</p>} />
      </Routes>
    </>
  );
}

export default App;
