import "./Header.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/User";
import { getTopics } from "../../utils/api";

function Header() {
  const { user, setUser } = useContext(UserContext);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicData) => setTopics(topicData));
  }, []);

  return (
    <header>
      <div id="header-container">
        <Link to="/">
          <h1>Northcoders News</h1>
        </Link>
        <button>🌙</button>
      </div>
      <div className="shortcuts">
        <nav className="left-shortcuts">
          <Link to="/" className="header-link">
            Home
          </Link>
          <div className="dropdown" tabIndex="0">
            <span
              className="header-link"
              id="article-dropdown"
              aria-label="select article topic dropdown"
            >
              Articles ↓
            </span>
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
        </nav>
        <div>
          {user.username}
          <Link to="/login" id="login-link" onClick={(e) => setUser({})}>
            {user.username ? "Log out" : "Log in"}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
