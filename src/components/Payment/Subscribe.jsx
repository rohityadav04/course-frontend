import React from 'react';
import './subscribe.css';

const Subscribe = () => {
  return (
    <>
      <div className="global-container">
        <div className="global-heading">
          <h3>Welcome</h3>
        </div>
        <div className="subscribe-box">
          <div className="subscribe-_box-text">
            <div className="pack-text">
              <p>Pro Pack-$299.00</p>
            </div>
            <div className="pack-ds">
              <p style={{ margin: '1rem' }}>
                Join pro pack and get access to all content.{' '}
              </p>

              <h3>$299 only</h3>
              <button className="pay-button">Buy Now</button>
              <div className="cancel">
                <h5>100% REFUND AT CANCELLATION</h5>
                <p style={{ fontSize: '0.8rem', color: '#eee' }}>
                  Terms & Condition Apply
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
