import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Sorting.css";

function Sorting() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
          setFilteredData(response.data);
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
    setFilteredData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    console.log(searchValue);

    // setData(data.filter(item => item.title.toLowerCase().includes(searchValue)));

    console.log("handle search");
    setSearchTerm(searchValue);

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );
    console.log("filtered", filtered);
    setFilteredData(filtered);
  };

  return (
    <>
      <h1>Sorting Component</h1>
      <input type="text" onChange={handleSearch} value={searchTerm} />
      <table>
        <thead>
          <tr>
            <th>
              Id
              <button onClick={() => sortData("id")}>
                Sort {sortOrder === "asc" ? "↑" : "↓"}
              </button>
            </th>
            <th>
              title
              <button onClick={() => sortData("title")}>
                Sort {sortOrder === "asc" ? "↑" : "↓"}
              </button>
            </th>
            <th>userId</th>
            <th>completed</th>
          </tr>
        </thead>

        <tbody>
          {filteredData &&
            filteredData.map((item, index) => {
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
