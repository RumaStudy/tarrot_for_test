import React from "react";
import "./css/login.css";

const Login = () => {
  return (
    <section id="login">
      <form>
        <legend className="emailWrap">
          <label htmlFor="email">E-mail Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail Address Here!"
          />
          <label htmlFor="epass">Password</label>
          <input
            type="password"
            name="email"
            id="epass"
            placeholder="Password Here!"
          />
          <button>Login</button>
        </legend>
      </form>
    </section>
  );
};

export default Login;
