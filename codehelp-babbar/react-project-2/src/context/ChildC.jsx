import React, { useContext } from "react";
import { ThemeContext } from "./CombinedProvider";

const ChildC = () => {
  //const { user, setUser } = useContext(UserContext);

  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      Child C
      <br />
      <hr />
      {/* <p>{user.name}</p> */}
      {/* <input
        type="text"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      /> */}
      <button
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      >
        Change Theme
      </button>
    </div>
  );
};

export default ChildC;
