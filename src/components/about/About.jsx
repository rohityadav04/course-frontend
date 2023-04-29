import { Avatar } from '@chakra-ui/react';
import React from 'react';
import './about.css';
import image from '../../assets/images/Ro5.png';
import { Link } from 'react-router-dom';

const Founder = () => {
  return (
    <div className="stack">
      <div className="vstack">
        <div className="avatar-about">
          <Avatar src={image} />
        </div>
        <div
          className="text"
          style={{ color: '#fff', opacity: '0.7', marginTop: '8px' }}
        >
          Co-Founder
        </div>
      </div>
      <div className="vstack-about">
        <div className="global-heading">
          <h3>Rohit Yadav</h3>
        </div>
        <div className="text" style={{ color: '#fff' }}>
          Hi,I am a Mern-stack developer.My mission is to provide quality work
          to the client at resonable price.
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className="global-container">
        <div className="global-box">
          <div className="global-heading">
            <h3>About Us</h3>
            <Founder />
          </div>
          <div>
            <Link to="/subscribe" className="subscription-button">
              Subscribe Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
