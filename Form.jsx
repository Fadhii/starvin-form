import React, { useState } from 'react';
import '../css/Form.css'; // Import the CSS file for the restaurant-themed styles

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login authentication here, e.g., sending data to a server.
    // For simplicity, we'll just display a message for successful login.
    alert('Login successful!');
  };

  return (
    <div>
      <div class="body"></div>
		<div class="grad"></div>
		<div class="header">
			<div>Site<span>Random</span></div>
		</div>
		<br></br>
		<div class="login">
				<input type="text" placeholder="username" name="user"/><br></br>
				<input type="password" placeholder="password" name="password"/><br></br>
				<input type="button" value="Login"/>
		</div></div>
    
  );
};

export default Login;
