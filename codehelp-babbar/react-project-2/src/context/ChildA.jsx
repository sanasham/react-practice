import React, { useContext } from "react";

import ChildB from "./ChildB";
import { ThemeContext } from "./CombinedProvider";

const ChildA = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ff5733" : "#6dff33",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Child A
      <br />
      <hr />
      <ChildB />
    </div>
  );
};

export default ChildA;
