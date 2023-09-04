import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import AllArticles from "./components/Articles/AllArticles";
import Article from "./components/Article/Article";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
