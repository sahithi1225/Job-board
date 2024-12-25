import React, { useState } from "react";
import './ApplicationForm.css';

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    age: '',
    degree: '',
    industry: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3002/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        window.location.href = "/job-detail";
        setFormData({
          name: '',
          email: '',
          phone: '',
          experience: '',
          age: '',
          degree: '',
          industry: ''
        });
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error: Failed to submit application.');
    }
  };

  return (
    <div className="application-form">
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

        <label htmlFor="experience">Experience:</label>
        <input type="text" id="experience" name="experience" value={formData.experience} onChange={handleChange} required />

        <label htmlFor="age">Age:</label>
        <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} required />

        <label htmlFor="degree">Education:</label>
        <select name="degree" id="degree" value={formData.degree} onChange={handleChange} required>
          <option value="10th">10th</option>
          <option value="inter">Intermediate</option>
          <option value="degree">Degree</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="no education">No Education</option>
        </select>

        <label htmlFor="industry">Industry:</label>
        <select name="industry" id="industry" value={formData.industry} onChange={handleChange} required>
          <option value="coffee shop">Coffee Shop</option>
          <option value="restaurant">Restaurant</option>
          <option value="mobile stores">Mobile Stores</option>
          <option value="dmart">Dmart</option>
          <option value="malls">Malls</option>
          <option value="medical stores">Medical Stores</option>
          <option value="electronics">Electronics</option>
          <option value="library">Library</option>
          <option value="universities">Universities</option>
          <option value="zomato">Zomato</option>
        </select>

        <button type="submit">Apply</button>
      </form>
    </div>
  );
}

export default ApplicationForm;
