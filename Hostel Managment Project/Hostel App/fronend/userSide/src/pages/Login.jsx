import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css"; // import your CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "hostelapp@gmail.com" && password === "hostelapp") {
      window.location.href = "http://localhost:5174";
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className={style.loginContainer}>
      <form className={style.loginForm} onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className={style.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={style.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        {error && <div className={style.error}>{error}</div>}
        <button type="submit" className={style.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
