import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
  const loggedData = useContext(UserContext);
  // console.log("Private", loggedData);
  return loggedData.loggedInUser !== null ? (
    <props.Component />
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
