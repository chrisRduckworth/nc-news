import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../utils/api";
import { UserContext } from "../../contexts/User";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [invalidUser, setInvalidUser] = useState(false);
  const [userForm, setUserForm] = useState("");

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((userData) => {
      setIsLoading(false);
      setUsers(userData);
    });
  }, []);

  const loginAsUser = (event) => {
    event.preventDefault();
    const userMatch = users.find((user) => user.username === userForm);
    if (userMatch) {
      setUser(userMatch);
      navigate("/");
    } else {
      setInvalidUser(true);
    }
  };

  if (isLoading)
    return (
      <main>
        <p>Loading...</p>
      </main>
    );

  return (
    <main id="login-page">
      <h1>Login as existing user</h1>
      <form>
        <label htmlFor="username">
          <h3>Username: </h3>
        </label>
        <p>
          <input
            id="username"
            type="text"
            value={userForm}
            onChange={(e) => setUserForm(e.target.value)}
          />
        </p>
        <p id="invalid-user">{invalidUser && "Invalid user"}</p>
        <button onClick={loginAsUser}>Login</button>
      </form>
    </main>
  );
}

export default Login;
