import React, { useState } from 'react';
import './AddPhone.css'; // Optional custom CSS for styling
import api from '../services/api';

function AddPhone() {
  const [formData, setFormData] = useState({
    modelname: '',
    year: '',
    startingprice: '',
    image: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    api.post('/phones', formData)
      .then(() => {
        alert('Phone added successfully!');
        setFormData({ modelname: '', year: '', startingprice: '', image: '' }); // Reset form
      })
      .catch((error) => console.error('Error adding phone:', error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="form-container">
      <h1>Add a New Phone</h1>
      <form onSubmit={handleSubmit} className="phone-form">
        <div className="form-group">
          <label htmlFor="modelname">Model Name</label>
          <input
            type="text"
            id="modelname"
            name="modelname"
            value={formData.modelname}
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
          <label htmlFor="startingprice">Starting Price</label>
          <input
            type="number"
            id="startingprice"
            name="startingprice"
            value={formData.startingprice}
            onChange={handleChange}
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

        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Phone'}
        </button>
      </form>
    </div>
  );
}

export default AddPhone;
