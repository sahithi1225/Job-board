import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function JobProviderLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data.message); // Handle success message
      // Redirect or handle successful login
    } catch (error) {
      setError('Invalid email or password');
      console.error('Login error:', error);
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '50px auto',
      padding: '30px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Job Provider Login</h2>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <label style={{ marginBottom: '8px', color: '#555' }} htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
          required
        />
        <label style={{ marginBottom: '8px', color: '#555' }} htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
          required
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#007bff',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
      {error && <p style={{ color: '#ff6347', marginTop: '10px' }}>{error}</p>}
      <p style={{ color: '#888', marginTop: '20px' }}>Don't have an account? <Link to="/signup" style={{ color: '#007bff', textDecoration: 'none' }}>Sign up</Link></p>
    </div>
  );
}

export default JobProviderLogin;
