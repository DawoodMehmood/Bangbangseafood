import React, { useEffect, useState } from "react";
import BACKEND_URL from "../../../../config";
import { showToast } from "../../../toast";
import "./components.css";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    address: "",
    email: "",
    number: "",
    timings: [
      { days: "", time: "" },
      { days: "", time: "" },
    ],
  });

  const [checkFormData, setCheckFormData] = useState({
    address: "",
    email: "",
    number: "",
    timings: [
      { days: "", time: "" },
      { days: "", time: "" },
    ],
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/contact/getContact`)
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
        console.error("Error fetching contact data:", error);
      });
  }, []);

  const handleInputChange = (e, name) => {
    const { value } = e.target;
    if (name === "address" || name === "email" || name === "number") {
      setFormData({ ...formData, [name]: value });
    } else {
      const index = parseInt(name.slice(4)); // Extract index from the name string
      const updatedTimings = formData.timings.map((timing, i) => {
        if (i === index) {
          return name.startsWith("days")
            ? { ...timing, days: value }
            : { ...timing, time: value };
        }
        return timing;
      });
      setFormData({ ...formData, timings: updatedTimings });
    }
  };

  const updateCall = () => {
    setIsLoading(true);
    fetch(`${BACKEND_URL}/api/contact/saveContact`, {
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
        console.error("Error updating contact:", error);
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
        <h2>Contact Information</h2>

        <div className="section">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            autoComplete="off"
            required
            onChange={(e) => handleInputChange(e, `address`)}
          />
        </div>

        <div className="section">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            autoComplete="off"
            required
            onChange={(e) => handleInputChange(e, `email`)}
          />
        </div>

        <div className="section">
          <label>Number</label>
          <input
            type="tel"
            name="number"
            value={formData.number}
            autoComplete="off"
            required
            onChange={(e) => handleInputChange(e, `number`)}
          />
        </div>

        {formData.timings.map((timing, index) => (
          <div key={index} className="section timingInputs">
            <label>{`Timing ${index + 1}`}</label>
            <input
              type="text"
              name={`days${index}`}
              value={timing.days}
              autoComplete="off"
              placeholder="(optional)"
              onChange={(e) => handleInputChange(e, `days${index}`)}
            />
            <>-</>
            <input
              type="text"
              name={`time${index}`}
              value={timing.time}
              autoComplete="off"
              placeholder="(optional)"
              onChange={(e) => handleInputChange(e, `time${index}`)}
            />
          </div>
        ))}

        <button type="button" onClick={handleUpdate} disabled={isLoading}>
          Update
        </button>
      </form>
    </div>
  );
};

export default ContactInfo;
