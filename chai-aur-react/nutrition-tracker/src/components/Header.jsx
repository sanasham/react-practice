import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const loggedData = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("nutrify");
    loggedData.setLoggedUser(null);
    navigate("/login");
  };

  return (
    <div>
      <ul>
        <li>Home</li>
        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  );
}
