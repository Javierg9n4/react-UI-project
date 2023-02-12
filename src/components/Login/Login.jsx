import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "../../repository/userRepository";
import "./Login.css";

const Login = ({ setToken }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginUser({
      username,
      password,
    });

    setToken(token);
    navigate("/profile");
  };

  return (
    <div className="loginContainer">
      <h1>Plese Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            onChange={(event) => setUserName(event.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <div>
          <button type="submit">Login</button>
          <button>
            <NavLink to="/signup">Signup</NavLink>
          </button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
