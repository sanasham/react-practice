import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  const [message, setMessage] = useState({
    type: "invisibility-msg",
    text: "Dummy msg",
  });

  const handleInput = (event) => {
    setUserDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    fetch("http://localhost:8000/register", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((Response) => Response.json())
      .then((data) => {
        setMessage({ type: "success", text: data.message });
        setUserDetails({
          name: "",
          email: "",
          password: "",
          age: "",
        });
        setTimeout(() => {
          setMessage({
            type: "invisibility-msg",
            text: "Dummy msg",
          });
        }, 5000);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <section className="container">
        <form onSubmit={handleSubmit} className="form">
          <h1>Start Your Fitness</h1>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleInput}
            value={userDetails.name}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleInput}
            value={userDetails.email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleInput}
            value={userDetails.password}
            required
            maxLength={8}
          />
          <input
            type="number"
            name="age"
            placeholder="Enter age"
            onChange={handleInput}
            value={userDetails.age}
            required
            max={100}
            min={12}
          />
          <button>Join</button>
          <p>
            Already Registered ? <Link to="/login">Login</Link>
          </p>
          <p className={message.type}>{message.text}</p>
        </form>
      </section>
    </div>
  );
}

export default Register;
