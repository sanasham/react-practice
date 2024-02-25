import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <section className="container">
        <form action="" className="form">
          <h1>Start Your Fitness</h1>
          <input type="email" name="email" placeholder="Enter email" />
          <input type="password" name="password" placeholder="Enter password" />
          <button>Login</button>
          <p>
            Don&apos;t have a Accout ? <Link to="/register">Register now</Link>
          </p>
        </form>
      </section>
    </div>
  );
}

export default Login;
