import React from 'react';
import './footer.css';
import { SiFacebook } from 'react-icons/si';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <div className="logo-list">
            <div className="fb">
              <SiFacebook />
            </div>
            <div className="twit">
              <AiOutlineTwitter />
            </div>
            <div className="google">
              <AiOutlineGoogle />
            </div>
            <div className="insta">
              <AiOutlineInstagram />
            </div>
            <div className="link">
              <AiFillLinkedin />
            </div>
            <div className="git">
              <AiFillGithub />
            </div>
          </div>
        </div>
        <div className="footer-text">
          <div className="text-list">
            <p>© 2023 Copyright:Rohit Yadav</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
