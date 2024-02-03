import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Update() {
  const { id: pramId } = useParams();
  const [editItem, setEditItem] = useState({ name: "", email: "" }); // Initialize with default values
  const history = useNavigate();

  const localData = JSON.parse(localStorage.getItem("data"));

  const currentItem = localData?.find((item) => {
    return item.id === pramId;
  });

  useEffect(() => {
    if (currentItem) {
      setEditItem(currentItem);
    }
  }, []);

  const handleEdit = (e) => {
    if (e.target.id === "name") {
      setEditItem({ ...editItem, name: e.target.value });
    }
    if (e.target.id === "email") {
      setEditItem({ ...editItem, email: e.target.value });
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Implement your update logic here

    // const newValues = localData.map((item) => {
    //   if (item.id === editItem.id) {
    //     return { ...item, name: editItem.name, email: editItem.email };
    //   } else {
    //     return item;
    //   }
    // });

    // localStorage.setItem("data", JSON.stringify(newValues));
    axios
      .put(
        `https://65bc68a552189914b5bdde2a.mockapi.io/crud-youtube/${pramId}`,
        {
          name: editItem.name,
          email: editItem.email,
        }
      )
      .then(() => history("/read"));
  };

  const { name, email } = editItem;

  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={handleEdit}
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={handleEdit}
            className="form-control"
            id="email"
          />
        </div>
        <button
          type="button"
          onClick={handleUpdate}
          className="btn btn-primary"
        >
          Update
        </button>
      </form>
    </>
  );
}

export default Update;
