import React, { useState } from "react";
import "./AddPhone.css";
import api from "../services/api";

function AddPhone() {
  const [formData, setFormData] = useState({
    // Phone data
    modelName: "",
    year: "",
    startingPrice: "",
    image: "",
    screenSize: "",
    batterySize: "",
    processor: "",
    ram: "",
    storage: "",
    noOfCameras: "",
    cameraSize: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const phoneData = {
        modelName: formData.modelName,
        year: parseInt(formData.year),
        startingPrice: parseFloat(formData.startingPrice),
        image: formData.image,
      };

      const phoneResponse = await api.post("/phones", phoneData);
      const modelId = phoneResponse.data.modelid;

      const specData = {
        modelId: modelId,
        screenSize: parseFloat(formData.screenSize),
        batterySize: parseInt(formData.batterySize),
        processor: formData.processor,
        ram: parseInt(formData.ram),
        storage: parseInt(formData.storage),
        noOfCameras: parseInt(formData.noOfCameras),
        cameraSize: parseFloat(formData.cameraSize),
      };

      await api.post("/specifications", specData);

      alert("Phone and specifications added successfully!");
      setFormData({
        modelName: "",
        year: "",
        startingPrice: "",
        image: "",
        screenSize: "",
        batterySize: "",
        processor: "",
        ram: "",
        storage: "",
        noOfCameras: "",
        cameraSize: "",
      });
    } catch (error) {
      console.error("Error adding phone and specifications:", error);
      alert("Failed to add phone and specifications. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1>Add a New Phone</h1>
      <form onSubmit={handleSubmit} className="phone-form">
        <h2>Phone Details</h2>
        <div className="form-group">
          <label htmlFor="modelName">Model Name</label>
          <input
            type="text"
            id="modelName"
            name="modelName"
            value={formData.modelName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="startingPrice">Starting Price</label>
          <input
            type="number"
            id="startingPrice"
            name="startingPrice"
            value={formData.startingPrice}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <h2>Specifications</h2>
        <div className="form-group">
          <label htmlFor="screenSize">Screen Size (inches)</label>
          <input
            type="number"
            id="screenSize"
            name="screenSize"
            value={formData.screenSize}
            onChange={handleChange}
            step="0.1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="batterySize">Battery Size (mAh)</label>
          <input
            type="number"
            id="batterySize"
            name="batterySize"
            value={formData.batterySize}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="processor">Processor</label>
          <input
            type="text"
            id="processor"
            name="processor"
            value={formData.processor}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ram">RAM (GB)</label>
          <input
            type="number"
            id="ram"
            name="ram"
            value={formData.ram}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="storage">Storage (GB)</label>
          <input
            type="number"
            id="storage"
            name="storage"
            value={formData.storage}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="noOfCameras">Number of Cameras</label>
          <input
            type="number"
            id="noOfCameras"
            name="noOfCameras"
            value={formData.noOfCameras}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cameraSize">Main Camera Size (MP)</label>
          <input
            type="number"
            id="cameraSize"
            name="cameraSize"
            value={formData.cameraSize}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Phone"}
        </button>
      </form>
    </div>
  );
}

export default AddPhone;
