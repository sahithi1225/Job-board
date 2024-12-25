import React, { useEffect, useState } from "react";
import "./ApplicantPage.css"; // Import the CSS file

function ApplicantPage() {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  useEffect(() => {
    if (selectedIndustry) {
      setFilteredApplications(applications.filter(app => app.industry === selectedIndustry));
    } else {
      setFilteredApplications(applications);
    }
  }, [selectedIndustry, applications]);

  const fetchApplications = async () => {
    try {
      const response = await fetch('http://localhost:3002/applications');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setApplications(data);
      setFilteredApplications(data);
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  const handleIndustryChange = (e) => {
    setSelectedIndustry(e.target.value);
  };

  return (
    <div className="applicant-container">
      <h2 className="applicant-title">Applicants</h2>
      <div className="filter-container">
        <label htmlFor="industry-filter">Filter by Industry:</label>
        <select id="industry-filter" value={selectedIndustry} onChange={handleIndustryChange}>
          <option value="">All</option>
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
      </div>
      {filteredApplications.length > 0 ? (
        <ul className="applicant-list">
          {filteredApplications.map(application => (
            <li key={application._id} className="applicant-item">
              <p className="applicant-detail"><strong>Name:</strong> {application.name}</p>
              <p className="applicant-detail"><strong>Email:</strong> {application.email}</p>
              <p className="applicant-detail"><strong>Phone:</strong> {application.phone}</p>
              <p className="applicant-detail"><strong>Experience:</strong> {application.experience}</p>
              <p className="applicant-detail"><strong>Age:</strong> {application.age}</p>
              <p className="applicant-detail"><strong>Degree:</strong> {application.degree}</p>
              <p className="applicant-detail"><strong>Industry:</strong> {application.industry}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-data-message">No data available for the selected industry.</p>
      )}
    </div>
  );
}

export default ApplicantPage;
