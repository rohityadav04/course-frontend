import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import image from '../assets/images/image.png';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="content">
          <h3>LEARN FROM THE EXPERTS</h3>
          <p>Find Valuable Content at Reasonable Price</p>
          <div className="button">
            <Link to="/">
              <button>Explore Now</button>
            </Link>
          </div>
        </div>
        <div className="image">
          <img src={image} />
        </div>
      </div>
      {/* <Brand /> */}
    </section>
  );
};

export default Home;
