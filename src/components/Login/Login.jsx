import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../utils/api";
import { UserContext } from "../../contexts/User";
import { useNavigate } from "react-router-dom";

function Login() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [chosenUser, setChosenUser] = useState("");

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
    if (chosenUser !== "") {
      setUser(chosenUser);
      navigate("/");
    }
  };

  if (isLoading)
    return (
      <main>
        <p>Loading...</p>
      </main>
    );

  return (
    <main>
      <h1>Login as existing user</h1>
      <form>
        <label htmlFor="username">Username: </label>
        <select id="username" onChange={(e) => setChosenUser(e.target.value)}>
          <option></option>
          {users.map((user) => {
            return (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            );
          })}
        </select>
        <button onClick={loginAsUser}>Login</button>
      </form>
    </main>
  );
}

export default Login;
