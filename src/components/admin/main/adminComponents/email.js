import React, { useEffect, useState } from "react";
import BACKEND_URL from "../../../../config";
import { showToast } from "../../../toast";

const EmailKey = () => {
  const [formData, setFormData] = useState({
    email: "",
    key: "",
  });

  const [checkFormData, setCheckFormData] = useState({
    email: "",
    key: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/credential/getCredential`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        setFormData(data);
        setCheckFormData(data);
      })
      .catch((error) => {
        console.error("Error fetching credential data:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const updateCall = () => {
    setIsLoading(true);
    fetch(`${BACKEND_URL}/api/credential/saveCredential`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          showToast("Error Updating Record", "error");
          throw new Error("Network response was not ok");
        }
        showToast("Record Updated Successfully", "success");
        setCheckFormData(formData);
        return response.json();
      })
      .catch((error) => {
        console.error("Error updating credentials:", error);
      })
      .finally(setIsLoading(false));
  };

  const handleUpdate = () => {
    if (JSON.stringify(formData) === JSON.stringify(checkFormData)) {
      showToast("No changes detected", "warning");
    } else {
      updateCall();
    }
  };

  return (
    <div className="adminComponent container">
      <form className="adminComponentForm">
        <h2>Email Credentials</h2>

        <div className="section">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            autoComplete="off"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="section">
          <label>App Password</label>
          <input
            type="password"
            name="key"
            value={formData.key}
            autoComplete="off"
            required
            onChange={handleInputChange}
          />
        </div>

        <button type="button" onClick={handleUpdate} disabled={isLoading}>
          Update
        </button>
      </form>
    </div>
  );
};

export default EmailKey;
