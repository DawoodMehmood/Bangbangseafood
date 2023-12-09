import React, { useEffect, useState } from "react";
import BACKEND_URL from "../../../../config";
import { showToast } from "../../../toast";

const BannerComponent = () => {
  const [formData, setFormData] = useState({
    line1: "",
    line2: "",
    fb: "",
    insta: "",
  });

  const [checkFormData, setCheckFormData] = useState({
    line1: "",
    line2: "",
    fb: "",
    insta: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/banner/getBanner`)
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
        console.error("Error fetching banner data:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const updateCall = () => {
    setIsLoading(true);
    fetch(`${BACKEND_URL}/api/banner/saveBanner`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        showToast("Record Updated Successfully", "success");
        setCheckFormData(formData);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Optionally, perform any action upon successful update
      })
      .catch((error) => {
        console.error("Error updating banner:", error);
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
        <h2>Banner Text</h2>

        <div className="section">
          <label>First Line</label>
          <input
            type="text"
            name="line1"
            className="bannerLine"
            value={formData.line1}
            autoComplete="off"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="section">
          <label>Second Line</label>
          <input
            type="text"
            name="line2"
            className="bannerLine"
            value={formData.line2}
            autoComplete="off"
            placeholder="(optional)"
            onChange={handleInputChange}
          />
        </div>

        <h2>Social Media Links</h2>

        <div className="fbColor section">
          <label>Facebook</label>
          <input
            type="text"
            name="fb"
            className="fbColor"
            value={formData.fb}
            autoComplete="off"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className=" instaColor section">
          <label>Instagram</label>
          <input
            type="text"
            name="insta"
            className="instaColor"
            value={formData.insta}
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

export default BannerComponent;
