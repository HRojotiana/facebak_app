import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signin.css';

const Signup = ({  }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsernameState] = useState('');
  const [bio, setBioState] = useState('');
  const [photo, setPhoto] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://[::1]:8080/users', {
        email: email,
        password: password,
        username: username,
        bio: bio,
        photo: photo,
        confirmPassword: confirmPassword,
      });

      console.log('Backend response:', response.data);

      alert("Your account is created. Please login now")
      navigate('/');
    } catch (error) {
      console.log('Error when requesting', error);
    }
  };

  return (
    <main id="bg">

      <div className="right">
        <h1 id="title">Sign Up Page</h1>
        <p className="text">Welcome to Facebak! Please Sign In if you don't have an account</p>

        <form onSubmit={handleSubmit}>
          <ul className="border">
            <input type="text" id="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </ul>

          <ul className="border">
            <input type="text" id="username" placeholder="Enter your username" required value={username} onChange={(e) => setUsernameState(e.target.value)} />
          </ul>

          <ul className="border">
            <input type="text" id="bio" placeholder="Enter your bio" required value={bio} onChange={(e) => setBioState(e.target.value)} />
          </ul>

          <ul className="border">
            <input type="text" id="photo" placeholder="Enter your photo url" required value={photo} onChange={(e) => setPhoto(e.target.value)} />
          </ul>

          <ul className="border">
            <input type="password" id="password" placeholder="Enter Your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </ul>

          <ul className="border">
            <input type="password" id="confirmPassword" placeholder="Confirm your password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </ul>

          <ul>
            <li><button type='submit'>SIGN UP</button></li>
          </ul>
        </form>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>

    </main>
  );
}

export default Signup;

