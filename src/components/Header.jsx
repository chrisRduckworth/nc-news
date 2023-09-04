import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div id="header-container">
        <h1>Northcoders News</h1>
        <div id="header-buttons">
          <button>Dark Mode</button>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <nav className="shortcuts">
        <Link to="/articles">Articles</Link>
        <Link to="/new_article">New Article</Link>
        <Link to="/users">Users</Link>
        {/* some sort of categories link as well */}
      </nav>
    </header>
  );
}

export default Header;
