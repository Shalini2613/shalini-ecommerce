import React, { use, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
   const navigate = useNavigate();
  const handleLogin = () =>{
    let uname = "admin";
    let pwd = "admin123";
    if(username && Password){
        if(username === uname && Password === pwd){
            navigate("/productList");
        }
        else{
            alert("invalid username or password");
        }
    }
    else{
        alert("fill the required fields")
    }
  }
  const clearFields = () =>{
    setUsername("");
    setPassword("");
  }
  return (
    <div className="login-container">
      <div className="left-container">
        <h2>
          Shalini <br /> Shop
        </h2>
      </div>
      <div className="right-container col-md-6">
        <div className="login-main-container">
        <h1 className="company-name">Shalini Shop</h1>
          <h2>Login Here</h2>
          <input className="form-control mb-3" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
          <input className="form-control mb-3" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} required/>
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-success me-2" onClick={handleLogin}>Login</button>
          <button type="button" className="btn btn-sm btn-primary me-2" onClick={clearFields}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
