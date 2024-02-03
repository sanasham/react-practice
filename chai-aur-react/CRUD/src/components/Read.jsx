import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);

  const getdata = () => {
    axios
      .get("https://65bc68a552189914b5bdde2a.mockapi.io/crud-youtube")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getdata();
  }, []);

  const handleDelete = (id) => {
    console.log("clicked delete button", id);
    axios
      .delete(`https://65bc68a552189914b5bdde2a.mockapi.io/crud-youtube/${id}`)
      .then(() => getdata());
  };
  localStorage.setItem("data", JSON.stringify(data));
  // const handleEdit = (itemId) => {
  //   const itemToEdit = data.find((item) => item.id === itemId);

  // };
  return (
    <div>
      <h2>Read Operation</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button
                      className="btn btn-success"
                      // onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
