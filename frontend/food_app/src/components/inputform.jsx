import React, { useState } from 'react';
import axios from 'axios';
import './inputform.css'

export default function Inputform({ setIsOpen }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const endpoint = isSignUp ? 'signup' : 'login';

    try {
      const res = await axios.post(`https://food-website-8b8r.onrender.com/${endpoint}`, {
        email,
        password
      });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setIsOpen(false); // close modal
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className='input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className='form-control'>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className='input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type='submit'>{isSignUp ? 'Sign Up' : 'Login'}</button>

      {error && <h6 className='error'>{error}</h6>}

      <p onClick={() => setIsSignUp(prev => !prev)} style={{ cursor: 'pointer', color: 'blue' }}>
        {isSignUp ? "Already have an account?" : "Create new account"}
      </p>
    </form>
  );
}
