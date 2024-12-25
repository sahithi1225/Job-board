import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

function JobDetailPage() {
  const [jobs, setJobs] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("");

  useEffect(() => {
    fetchJobs();
  }, [selectedIndustry]);

  const fetchJobs = async () => {
    try {
      const response = await fetch(`http://localhost:3000/items?industry=${selectedIndustry}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleApply = (jobId) => {
    console.log("Applying for job with ID:", jobId);
    setRedirect(true);
  };

  const calculateDaysRemaining = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    const differenceInTime = end.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  if (redirect) {
    return <Redirect to="/application" />;
  }

  return (
    <div className="job-detail-page">
      <Link to="/add-job">
        <button style={buttonStyle}>Add New Job</button>
      </Link>
      <h2>Job Detail Page</h2>
      <div>
        <label htmlFor="industry">Select Industry:</label>
        <select
          id="industry"
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
        >
          <option value="">All Industries</option>
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
      <div>
        {jobs.length > 0 ? (
          jobs.map(job => (
            <div key={job._id} style={jobDetailStyle}>
              <p>Name: {job.name}</p>
              <p>Description: {job.description}</p>
              <p>Place: {job.place}</p>
              <p>Salary: {job.salary}</p>
              <p>End Date: {job.endDate}</p>
              <p>Vacancy: {job.vacancy}</p>
              <p>Days Remaining: {calculateDaysRemaining(job.endDate)}</p> {/* Display Days Remaining */}
              <button style={buttonStyle1} onClick={() => handleApply(job._id)}>Apply</button>
            </div>
          ))
        ) : (
          <p>No job postings available in this industry.</p>
        )}
      </div>
    </div>
  );
}

const jobDetailStyle = {
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  marginBottom: "20px",
  textAlign: "left", 
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "10px",
  float: "right", 
};

const buttonStyle1 = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default JobDetailPage;
