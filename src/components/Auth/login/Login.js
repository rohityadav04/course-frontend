import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className="global-container">
        <div className="global-box">
          <form className="form">
            <div className="form-element">
              <div className="global-heading">
                <h3>Welcome to Trikuta Info...</h3>
              </div>
              <label
                htmlFor="email"
                style={{ margin: '5px', color: '#eee', fontWeight: 'bold' }}
              >
                Email Address
              </label>
              <input
                type="email"
                required
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
              />
            </div>
            <div className="form-element">
              <label
                htmlFor="password"
                style={{ margin: '5px', color: '#eee', fontWeight: 'bold' }}
              >
                Password
              </label>
              <input
                type="password"
                required
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter Your Password"
              />
            </div>
            <div className="forget-btn">
              <Link to="/forgetpassword" className="forget-btn">
                Forget Password?
              </Link>
            </div>
            <div className="login-btn">
              <button type="submit">Login</button>
            </div>
            <div className="new-user">
              New User?{' '}
              <Link to="/register">
                <span>Sign Up </span>here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
