import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Header from "./Header";

function Track() {
  const loggedData = useContext(UserContext);
  // console.log(loggedData.loggedUser.token);

  const searchFood = (event) => {
    console.log(event.target.value);
    fetch(`http://localhost:8000/foods/${event.target.value}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + loggedData.loggedUser.token,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <section className="container track-container">
        <div className="search">
          <input
            type="search"
            name=""
            placeholder="Search here"
            onChange={searchFood}
          />
        </div>
      </section>
    </div>
  );
}

export default Track;
