// src/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { useAuth } from './AuthContext';

export default function LoginPage({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const {login} = useAuth();
  const {name, setName} = useAuth();

  const handleLogin = (event) => {
    event.preventDefault();
    
    login();
    navigate('/homepage');
  };

  return (
    <div className='login-page'>
      <form onSubmit={handleLogin}>
        <label>Name</label>
        <input className='login-input'
          type='text'
          placeholder='Enter the Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Password</label>
        <input className='login-input'
          type='password'
          placeholder='Enter the Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button  id = 'login-btn' type='submit'>Login</button>
      </form>
    </div>
  );
}
