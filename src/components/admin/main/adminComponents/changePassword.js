import React, { useState } from "react";
import BACKEND_URL from "../../../../config";
import { showToast } from "../../../toast";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const updateCall = () => {
    setIsLoading(true);
    fetch(`${BACKEND_URL}/auth/admin/change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({ username, oldPassword, newPassword }),
    })
      .then((response) => {
        if (response.status === 401 || response.status === 400) {
          // Token is invalid or expired
          sessionStorage.removeItem("token");
          showToast("Session Expired. Login Again", "info");
          navigate("/bangbangseafood/controlUddaycontrol/controlpanel"); // Redirect to login
          return null;
        }
        if (response.ok) {
          showToast("Password Changed Successfully", "success");
          setUsername("");
          setOldPassword("");
          setNewPassword("");
          return response.json();
        } else {
          // If the response is not OK, parse the error response
          return response.json().then((data) => {
            showToast(data.message || "Error Changing Password", "error");
            // Optionally return the error message if you need to use it later
            return data;
          });
        }
      })
      .catch((error) => {
        console.error("Error updating credentials:", error);
      })
      .finally(setIsLoading(false));
  };

  const handleUpdate = () => {
    if (username === "" || oldPassword === "" || newPassword === "") {
      showToast("Field(s) Empty!", "warning");
    } else if (oldPassword === newPassword) {
      showToast("New password cannot be same as old password.", "warning");
    } else {
      updateCall();
    }
  };

  return (
    <div className="adminComponent container">
      <form className="adminComponentForm">
        <h2>Change Password</h2>

        <div className="section">
          <label>Username</label>
          <input
            type="text"
            value={username}
            autoComplete="off"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="section">
          <label>Old Password</label>
          <input
            type="text"
            value={oldPassword}
            autoComplete="off"
            required
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="section">
          <label>New Password</label>
          <input
            type="text"
            autoComplete="off"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleUpdate} disabled={isLoading}>
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
