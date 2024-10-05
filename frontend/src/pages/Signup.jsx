import React, { useState } from 'react';
import '../styles/signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setErrorMessage(''); // Reset error message before validation

    // Check if fields are empty
    if (!username || !email || !password) {
      setErrorMessage('Please enter all fields.');
      return;
    }

    // Simulate signup process (Need to update with actual signup logic)
    console.log('Signing up with:', { username, email, password });

    // Reset the form after submission
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up for C.R.A.I.G.</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter your username" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password" 
            required 
          />
        </div>
        
        <button className="signup-submit" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
