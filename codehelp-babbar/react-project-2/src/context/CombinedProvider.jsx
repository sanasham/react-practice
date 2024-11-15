import { createContext, useState } from "react";

export const UserContext = createContext();
export const ThemeContext = createContext();

function CombinedProvider({ children }) {
  const [user, setUser] = useState({ name: "Diya", age: 5 });
  const [theme, setTheme] = useState("light");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default CombinedProvider;
