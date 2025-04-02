import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import axios from "axios";

const Login = () => {
  const [emailID, setEmailID] = useState("santhoshkumar4270@gmail.com");
  const [password, setPassword] = useState("Santhosh@4270");
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        emailID,
        password,
      },{withCredentials: true});
    } catch (error) {
      console.error(err);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center my-15">
        <div className="card bg-base-300 w-96 shadow-sm justify-center">
          <div className="card-body">
            <h2 className="card-title justify-center">Login</h2>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Mail Id</legend>
                <input
                  type="text"
                  value={emailID}
                  className="input"
                  placeholder="Type here"
                  onChange={(e) => setEmailID(e.target.value)}
                />
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Password</legend>
                  <input
                    type="text"
                    value={password}
                    className="input"
                    placeholder="Type here"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
              </fieldset>
            </div>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={handleLogin}> Login </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
