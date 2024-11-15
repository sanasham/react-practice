import React, { useContext } from "react";
import UserContext from "./NewContext.js";
import ThemeContext from "./ThemeContext.js";

const ChildC = () => {
  const { user, setUser } = useContext(UserContext);

  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      Child C
      <br />
      <hr />
      <p>{user.name}</p>
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
