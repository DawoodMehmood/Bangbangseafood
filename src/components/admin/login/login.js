import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import BACKEND_URL from "../../../config";
import { showToast } from "../../toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Update the meta tags
    const meta_titleTag = document.querySelector('meta[name="robots"]');
    if (meta_titleTag) {
      meta_titleTag.setAttribute("content", "");
    }

    const metaDescriptionTag = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute("content", "noindex, nofollow");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BACKEND_URL}/auth/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        sessionStorage.setItem("token", token);
        showToast("Logged In Successfully", "success");
        navigate("/bangbangseafood/controlUddaycontrol/controlpanel/adminhome"); // Redirect on successful login
      } else {
        // Handle login failure
        showToast("Incorrect Username or Password!", "error");
        console.error("Incorrect Username or Password");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
