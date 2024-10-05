import React, { useState } from 'react';
import '../styles/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setErrorMessage(''); // Reset error message before validation

    // Check if fields are empty
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    // Simulate login process (Need to replace with actual authentication logic)
    console.log('Logging in with:', { email, password });

    // Reset the form after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login to C.R.A.I.G.</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
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
        
        <button className="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
