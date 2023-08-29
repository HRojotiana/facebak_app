import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import './login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put('http://[::1]:8080/users', {
                email,
                password,
            });

            console.log('Backend response', response.data);

            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', response.email);
            localStorage.setItem('userImage', response.data.photo); 
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('bio', response.data.bio); 

            navigate('/feed');
        } catch (error) {
            console.log('Login error:', error);
        }
    }

    return (
        <main id="bg" className='main'>
            <div className="right">
                <h1 id="title" className='h1'> Login page</h1>
                <form>
                    <p className="text">Welcome ! Please login to your account</p>

                    <ul className="border">
                        <input type="text" id="username" placeholder="@your email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </ul>

                    <ul className="border">
                        <input type="password" id="password" placeholder="Your password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </ul>

                    <ul>
                        <button type='button' className='button' onClick={handleLogin}>LOGIN</button>
                    </ul>
                </form>
                <p className='redirection'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
        </main>
    );
};

export default Login;
