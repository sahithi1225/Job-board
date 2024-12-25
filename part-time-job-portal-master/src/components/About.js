import React from 'react';
import Footer from "./Footer.js";
const About = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: "'Montserrat', sans-serif", // Apply Montserrat font
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#666',
    marginBottom: '15px',
  };

  const imageStyle = {
    width: '50%',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>About Our Part-time Job Scheduling Website</h1>
      <img
        src="https://imgs.search.brave.com/kg2iQRoOP7nrXhutG-Pzssq5aMlaBw6JZv2i5xs11NE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/dXNpbmVzcy1qb2It/aW50ZXJ2aWV3LWNv/bmNlcHRfMTQyMS03/Ny5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"
        style={imageStyle}
      />
      <p style={paragraphStyle}>
        Welcome to our Part-time Job Scheduling website! We specialize in connecting job seekers with part-time employment opportunities from various companies.
        Our platform collaborates with a wide range of companies, offering candidates access to a diverse selection of job listings.
      </p>
      <p style={paragraphStyle}>
        Through our website, candidates can explore part-time job openings across different industries and locations.
        They can easily browse through job listings, apply for positions that match their skills and preferences, and track their application status.
      </p>
      <p style={paragraphStyle}>
        Our goal is to streamline the job application process for both candidates and companies.
        Candidates benefit from a user-friendly interface that simplifies job searching and application submission.
        Employers gain access to a pool of qualified candidates, making the hiring process more efficient and effective.
      </p>
      <p style={paragraphStyle}>
        Join us in revolutionizing the part-time job market and creating opportunities for job seekers and companies alike!
      </p>
      <img
        src="https://imgs.search.brave.com/qcrSeGWGpaBIjvbz4aSu8kKTbUQX62Rt2VYZw4_wn2w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MzUzNTA3MzY0NzUt/YzhjZWY0YjIxOTA2/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRGOGZH/cHZZbnhsYm53d2ZI/d3dmSHg4TUE9PQ.jpeg"
        alt="Image 2 description"
        style={imageStyle}
      />
    </div>
    
  );
};

export default About;
