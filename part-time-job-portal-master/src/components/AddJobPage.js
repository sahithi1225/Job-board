import React, { useState } from 'react';
import './ApplicationForm.css';

function AddJobPage() {
  const [inputValues, setInputValues] = useState({
    name: '',
    description: '',
    place: '',
    salary: '',
    endDate: '',
    vacancy: '',
    industry: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputValues)
      });
      
      if (response.ok) {
        setInputValues({
          name: '',
          description: '',
          place: '',
          salary: '',
          endDate: '',
          vacancy: '',
          industry: ''
        });
        window.location.href = "/job-detail";
      } else {
        throw new Error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Error: Failed to submit data.');
    }
  };

  const handleChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="application-form">
      <h1>Add A Job</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={inputValues.name} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={inputValues.description} onChange={handleChange} required />
        </label>
        <label>
          Place:
          <input type="text" name="place" value={inputValues.place} onChange={handleChange} required />
        </label>
        <label>
          Salary:
          <input type="number" name="salary" value={inputValues.salary} onChange={handleChange} required />
        </label>
        <label>
          End Date:
          <input type="date" name="endDate" value={inputValues.endDate} onChange={handleChange} required />
        </label>
        <label>
          Vacancy:
          <input type="number" name="vacancy" value={inputValues.vacancy} onChange={handleChange} required />
        </label>
        <label>
          Industry:
          <select name="industry" value={inputValues.industry} onChange={handleChange} required>
            <option value="" disabled>Select Industry</option>
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
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddJobPage;
