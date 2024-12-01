import { useState } from 'react';
import api from '../services/api';

function AddPhone() {
  const [formData, setFormData] = useState({
    modelname: '',
    year: '',
    startingprice: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/phones', formData)
      .then((response) => {
        alert('Phone added successfully!');
        setFormData({ modelname: '', year: '', startingprice: '', image: '' }); // Reset form
      })
      .catch((error) => console.error('Error adding phone:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Model Name:
        <input type="text" name="modelname" value={formData.modelname} onChange={handleChange} required />
      </label>
      <label>
        Year:
        <input type="number" name="year" value={formData.year} onChange={handleChange} required />
      </label>
      <label>
        Starting Price:
        <input type="number" name="startingprice" value={formData.startingprice} onChange={handleChange} required />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={formData.image} onChange={handleChange} required />
      </label>
      <button type="submit">Add Phone</button>
    </form>
  );
}

export default AddPhone;
