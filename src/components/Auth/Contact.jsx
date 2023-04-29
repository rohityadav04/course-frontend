import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <div className="global-container">
        <div className="global-box">
          <form className="form">
            <div className="form-element">
              <div className="global-heading">
                <h3>Contact Us</h3>
              </div>
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
                placeholder="Abc..."
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
              <formlabel
                htmlFor="message"
                style={{ margin: '5px', color: '#eee', fontWeight: 'bold' }}
              >
                Message
              </formlabel>
              <textarea
                required
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Your Message..."
              />
            </div>

            <div className="login-btn">
              <button type="submit">Send Mail</button>
            </div>
            <div className="new-user">
              Request for a course?{' '}
              <Link to="/request">
                <span>Click </span>here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
