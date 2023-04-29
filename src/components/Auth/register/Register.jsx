import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import { Avatar } from '@chakra-ui/react';

const Register = () => {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imgPrev, setImgPrev] = useState('');
  const [image, setImage] = useState('');

  const changeFileHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setImgPrev(reader.result);
      setImage(file);
    };
  };

  return (
    <>
      <div className="global-container">
        <div className="global-box">
          <form className="form">
            <div className="form-element">
              <div className="global-heading">
                <h3>Registration</h3>
              </div>
              <div className="avatar">
                <Avatar className="dp" src={imgPrev} />
              </div>
            </div>
            <div className="form-element">
              <label
                htmlFor="name"
                style={{ margin: '5px', color: '#eee', fontWeight: 'bold' }}
              >
                Name
              </label>
              <input
                type="text"
                required
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="abcd..."
              />
            </div>
            <div className="form-element">
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
            <div className="form-element">
              <label
                htmlFor="chooseAvatar"
                style={{ margin: '5px', color: '#eee', fontWeight: 'bold' }}
              >
                Choose Avatar
              </label>
              <input
                required
                id="chooseAvatar"
                type="file"
                accept="image/*"
                className="input"
                onChange={changeFileHandler}
              />
            </div>

            <div className="login-btn">
              <button type="submit">Sign Up</button>
            </div>
            <div className="new-user">
              All Ready Signed Up?{' '}
              <Link to="/login">
                <span>Login </span>here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
