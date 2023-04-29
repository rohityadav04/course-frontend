import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Request = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  return (
    <>
      <div className="global-container">
        <div className="global-box">
          <form className="form">
            <div className="form-element">
              <div className="global-heading">
                <h3>Request New Course</h3>
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
                htmlFor="course"
                style={{ margin: '5px', color: '#eee', fontWeight: 'bold' }}
              >
                Course
              </formlabel>
              <textarea
                required
                id="course"
                value={course}
                onChange={e => setCourse(e.target.value)}
                placeholder="Explain the course..."
              />
            </div>

            <div className="login-btn">
              <button type="submit">Send Mail</button>
            </div>
            <div className="new-user">
              See available courses?{' '}
              <Link to="/courses">
                <span>Click </span>here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Request;
