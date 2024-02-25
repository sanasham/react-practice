import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [userCreds, setUserCreds] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({
    type: "invisibility-msg",
    text: "Dummy msg",
  });
  const navigate = useNavigate();
  const handleInputs = (event) => {
    setUserCreds((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify(userCreds),
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 404) {
          setMessage({
            type: "error",
            text: "Username or Email does not exist",
          });
        } else if (response.status === 403) {
          setMessage({ type: "error", text: "Incorrect password" });
        }
        setTimeout(() => {
          setMessage({
            type: "invisibility-msg",
            text: "Dummy msg",
          });
        }, 5000);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.token !== undefined) {
          localStorage.setItem("nutrify", JSON.stringify(data));
          navigate("/track");
        }
      })

      .catch((err) => console.log(err));
  };
  return (
    <div>
      <section className="container">
        <form onSubmit={handleSubmit} className="form">
          <h1>Start Your Fitness</h1>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            value={userCreds.email}
            onChange={handleInputs}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            maxLength={8}
            value={userCreds.password}
            onChange={handleInputs}
          />
          <button>Login</button>
          <p>
            Don&apos;t have a Accout ? <Link to="/register">Register now</Link>
          </p>
          <p className={message.type}>{message.text}</p>
        </form>
      </section>
    </div>
  );
}

export default Login;
