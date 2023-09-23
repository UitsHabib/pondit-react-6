import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState(""); // ["habib", function (y) {}]
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // axios.

    // api method
    // GET
    // POST
    // DELETE
    // PUT
    // Patch

    const success = (response) => {
      setUser(response.data);
      localStorage.setItem("loggedInUser", true);

      navigate("/counter");
    };

    function error(err) {
      console.log(err);
      alert(err.message);
    }

    const body = {
      username: email,
      password,
    };

    axios
      .post("https://dummyjson.com/auth/login", body)
      .then(success)
      .catch(error);
  };

  return (
    <div className="container mt-5">
      <div className="col-lg-6">
        <form>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email address or Username
            </label>

            {/* This input is for  email */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // onClick={}
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>

            {/* This input is for  password */}
            <input
              type="password"
              value={password}
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="btn" className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
