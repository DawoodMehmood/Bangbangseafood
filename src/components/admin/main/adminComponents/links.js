import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BACKEND_URL from "../../../../config";
import { showToast } from "../../../toast";

const LinksComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clover: "",
    doordash: "",
    ubereats: "",
    grubhub: "",
    postmate: "",
  });

  const [checkFormData, setCheckFormData] = useState({
    clover: "",
    doordash: "",
    ubereats: "",
    grubhub: "",
    postmate: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/links/getLinks`)
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
        console.error("Error fetching links:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const updateCall = () => {
    setIsLoading(true);
    fetch(`${BACKEND_URL}/api/links/saveLinks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 401 || response.status === 400) {
          // Token is invalid or expired
          sessionStorage.removeItem("token");
          showToast("Session Expired. Login Again", "info");
          navigate("/bangbangseafood/controlUddaycontrol/controlpanel"); // Redirect to login
          return null;
        }
        if (!response.ok) {
          showToast("Error Updating Links", "error");
          throw new Error("Network response was not ok");
        }
        showToast("Links Updated Successfully", "success");
        setCheckFormData(formData);
        return response.json();
      })
      .catch((error) => {
        console.error("Error updating links:", error);
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
        <h2>Integration Links</h2>

        <div className="section">
          <label className="cloverColor textBold textLarge">Clover</label>
          <input
            type="text"
            name="clover"
            className="cloverColor"
            value={formData.clover}
            autoComplete="off"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="section">
          <label className="doordashColor textBold textLarge">DoorDash</label>
          <input
            type="text"
            name="doordash"
            className="doordashColor"
            value={formData.doordash}
            autoComplete="off"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="section">
          <label className="ubereatsColor textBold textLarge">UberEats</label>
          <input
            type="text"
            name="ubereats"
            className="ubereatsColor"
            value={formData.ubereats}
            autoComplete="off"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="section">
          <label className="grubhubColor textBold textLarge">GrubHub</label>
          <input
            type="text"
            name="grubhub"
            className="grubhubColor"
            value={formData.grubhub}
            autoComplete="off"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="section">
          <label className="postmateColor textBold textLarge">PostMates</label>
          <input
            type="text"
            name="postmate"
            className="postmateColor"
            value={formData.postmate}
            autoComplete="off"
            required
            onChange={handleInputChange}
          />
        </div>

        <button
          type="button"
          onClick={handleUpdate}
          disabled={isLoading}
          style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default LinksComponent;
