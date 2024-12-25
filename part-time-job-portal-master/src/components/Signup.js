import React from 'react';
import { Link } from 'react-router-dom';

// Button component for reusability
const Button = ({ to, children }) => {
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    transition: 'background-color 0.3s ease',
    marginRight: '10px', // Add margin between buttons
  };

  const hoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <button style={{ ...buttonStyle, ...hoverStyle }}>{children}</button>
    </Link>
  );
};

function Signup() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30vh', // Center vertically in viewport
  };

  return (
    <div style={containerStyle}>
      <h2>Signup</h2>
      <div>
        <Button to="/JobProviderSignup">Job Provider Signup</Button>
        <Button to="/JobSeekerSignup">Job Seeker Signup</Button>
      </div>
    </div>
  );
}

export default Signup;
