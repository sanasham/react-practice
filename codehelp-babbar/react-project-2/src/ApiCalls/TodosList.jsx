import React, { useEffect, useState } from "react";

const TodosList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`error occured while making request ${err}`);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
