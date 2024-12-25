import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function JobSeekerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/seekerlogin', { email, password });
      console.log(response.data.message); // Handle success message
      localStorage.setItem('token', response.data.token); // Store token in localStorage
      history.push('/'); // Redirect to home page
    } catch (error) {
      setError('Invalid email or password');
      console.error('Login error:', error);
    }
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '150px 30px 20px 530px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
    // marginTop:"0px",
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} required />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
      {error && <p>{error}</p>}
      <p>Don't have an account? <Link to="/JobSeekerSignup">Sign up</Link></p>
    </div>
  );
}

export default JobSeekerLogin;