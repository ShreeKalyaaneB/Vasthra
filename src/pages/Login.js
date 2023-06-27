import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "../url";
import  Nav from '../components/Nav';

const Login = () => {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `/login`,
        { name, password },
        { withCredentials: true }
      );

      console.log(response.data)

      const role = response.data.role;

      // Based on the role, navigate to the respective page
      switch (role) {
        case "buyer":
          navigate("/home");
          break;
        case "seller":
          navigate("/sidebar");
          break;
        case "verifier":
          navigate("/verifier");
          break;
        default:
          console.log("Invalid role");
          break;
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 404) {
        setErrorMessage("User not found");
        alert(errorMessage);
      } else if (error.response && error.response.status === 400) {
        setErrorMessage("Incorrect password");
        alert(errorMessage);
      } else {
        setErrorMessage("Invalid name or password");
        alert(errorMessage);
      }
    }

    // Reset the form
    setName("");
    setPassword("");
  };

  return (
    <div>
      <div className="logincat">
    <Nav />
    <div className="logincenter">
    <div className="login-in-page">
      
      {/* <img className="logincat" src="loginback.png" /> */}
      {/* <img  src="https://hdwallsource.com/img/2016/7/red-silk-hd-wallpaper-53922-55653-hd-wallpapers.jpg" /> */}
      <h2 style={{color:"#001E00"}}>Log In</h2>
      <form className="loginform" onSubmit={handleSubmit}>
        {/* Form fields */}
        <div>
          <label className="loginlab">Name:</label>
          <input
            className="logininp"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="loginlab" style={{marginLeft:"20px"}}>Password:</label>
          <input
            className="logininp"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br/>

        <button className="loginbut" type="submit">
          Log In
        </button>
      </form>
      <div>
        New here? <Link to="/register">Sign In</Link>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Login;