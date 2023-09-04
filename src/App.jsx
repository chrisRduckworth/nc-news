import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import AllArticles from "./components/Articles/AllArticles";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/articles" element={<AllArticles />} />
      </Routes>
    </>
  );
}

export default App;
