import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Sorting.css";

function Sorting() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
          console.log(data);
        }
      })

      .catch((err) => console.log(`unexpected error occuered ${err}`));
  }, []);

  const sortData = (field) => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  return (
    <>
      <h1>Sorting Component</h1>
      <table>
        <thead>
          <tr>
            <th>
              Id
              <button onClick={() => sortData("id")}>
                Sort {sortOrder === "asc" ? "↑" : "↓"}
              </button>
            </th>
            <th>title</th>
            <th>userId</th>
            <th>completed</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id + Math.random(0)}>
                <td key={item.id + item.userId + index + Math.random(10)}>
                  {item.id}
                </td>
                <td key={item.id + item.userId + index + Math.random(10)}>
                  {item.title}
                </td>
                <td key={item.id + item.userId + index + Math.random(10)}>
                  {item.userId}
                </td>
                <td key={item.id + item.userId + index + Math.random(10)}>
                  {item.completed.toString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Sorting;
