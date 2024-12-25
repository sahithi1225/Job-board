import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/JobProviderLogin" style={{ margin: '10px' }}>
          <button style={buttonStyle}>Job Provider Login</button>
        </Link>
        <Link to="/JobSeekerLogin" style={{ margin: '10px' }}>
          <button style={buttonStyle}>Job Seeker Login</button>
        </Link>
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

export default Login;