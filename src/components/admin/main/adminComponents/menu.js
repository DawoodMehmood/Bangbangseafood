import React, { useEffect, useState } from "react";
import BACKEND_URL from "../../../../config";
import { showToast } from "../../../toast";
import { useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";

const Menu = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [sequence, setSequence] = useState();
  const [image, setImage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/menu/getAllImages`);
      const data = await response.json();
      const sortedImages = data.sort((a, b) => a.sequenceNo - b.sequenceNo); // Sort based on sequenceNo
      setImages(sortedImages);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleImageChange = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    console.log("Original File Size:", file.size, "bytes");
    try {
      const options = {
        maxSizeMB: 1, // (optional) Max size of the file in megabytes
        maxWidthOrHeight: 1920, // (optional) compress the image if its width or height is larger than this value
        useWebWorker: true, // (optional) Use a web worker for better performance
      };

      const compressedFile = await imageCompression(file, options);
      console.log("Compressed File Size:", compressedFile.size, "bytes");
      var reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    } catch (error) {
      console.error("Error during image compression:", error);
      showToast("Error during image compression", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch(`${BACKEND_URL}/api/menu/newImage`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          sequenceNo: sequence,
          image: image,
        }),
      }).then((response) => {
        if (response.status === 401 || response.status === 400) {
          // Token is invalid or expired
          sessionStorage.removeItem("token");
          showToast("Session Expired. Login Again", "info");
          navigate("/bangbangseafood/controlUddaycontrol/controlpanel"); // Redirect to login
          return null;
        }
        if (!response.ok) {
          showToast("Error Updating Record", "error");
          throw new Error("Network response was not ok");
        }
        showToast("Image Uploaded Successfully", "success");
        var frm = document.getElementsByName("menuForm")[0];
        frm.reset();
        fetchImages();
        return response.json();
      });
      setSequence();
      setImage("");
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${BACKEND_URL}/api/menu/deleteImage/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }).then((response) => {
        if (response.status === 401 || response.status === 400) {
          // Token is invalid or expired
          sessionStorage.removeItem("token");
          showToast("Session Expired. Login Again", "info");
          navigate("/bangbangseafood/controlUddaycontrol/controlpanel"); // Redirect to login
          return null;
        }
        if (!response.ok) {
          showToast("Error Deleting Image", "error");
          throw new Error("Network response was not ok");
        }
        showToast("Image Deleted Successfully", "success");
        fetchImages();
        return response.json();
      });
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div className="adminComponentForm">
      <div className="adminComponent container">
        <form
          onSubmit={handleSubmit}
          className="adminComponentForm"
          name="menuForm"
        >
          <h2>New Image</h2>

          <div className="section">
            <label>Sequence Number</label>
            <input
              type="number"
              name="title"
              autoComplete="off"
              required
              min="1"
              className="seqNo"
              autoFocus
              onChange={(e) => setSequence(e.target.value)}
            />
          </div>
          <div className="section">
            <label>Upload Image</label>
            <input
              type="file"
              name="image"
              autoComplete="off"
              required
              accept="image/*"
              multiple={false}
              onChange={handleImageChange}
            />
          </div>
          {image && (
            <div>
              <img src={image} alt="Uploaded img" className="uploadedImage" />
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
          >
            Upload Image
          </button>
        </form>
      </div>
      <hr className="separator"></hr>
      <div className="adminComponent container">
        <div className="adminComponentForm">
          <h2>Uploaded Images</h2>
          <div>
            {images.map((image) => (
              <div key={image._id} className="section imageContainer">
                <div className="">Sequence No. {image.sequenceNo}</div>
                <img
                  src={image.image}
                  alt="menu images"
                  className="uploadedImage"
                />
                <button onClick={() => handleDelete(image._id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
