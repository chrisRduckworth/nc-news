import "./Header.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/User";
import { getTopics } from "../../utils/api";

function Header() {
  const { user } = useContext(UserContext);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicData) => setTopics(topicData));
  }, []);

  return (
    <header>
      <div id="header-container">
        <h1>Northcoders News</h1>
        <button>🌙</button>
      </div>
      <nav className="shortcuts">
        <div className="left-shortcuts">
          <div className="dropdown">
            <span className="header-link">Articles ↓</span>
            <div className="dropdown-content">
              <Link to="/articles">View all</Link>
              {topics.map((topic) => {
                return (
                  <Link key={topic.slug} to={`/articles?topic=${topic.slug}`}>
                    {topic.slug}
                  </Link>
                );
              })}
            </div>
          </div>
          <Link to="/new_article" className="header-link">
            New Article
          </Link>
          <Link to="/users" className="header-link">
            Users
          </Link>
        </div>
        <div>
          {user}
          <Link to="/login" id="login-link">
            {user ? "Change user" : "Login"}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
