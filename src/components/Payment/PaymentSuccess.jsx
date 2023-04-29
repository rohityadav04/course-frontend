import { borderRadius } from '@mui/system';
import React from 'react';
import { Ri24HoursFill, RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <>
      <div className="global-container">
        <div className="global-heading">
          <h3>You Have Pro Pack</h3>
        </div>
        <div className="subscribe-box">
          <div className="subscribe-_box-text">
            <div className="pack-text">
              <p>Payment Success</p>
            </div>
            <div className="pack-ds">
              <p style={{ margin: '1rem', fontSize: '0.8rem' }}>
                Congratulation you're a pro member.You have access to premium
                content{' '}
              </p>

              <div className="check">
                <h3>
                  <RiCheckboxCircleFill
                    style={{
                      color: 'black',
                      fontSize: '3rem',
                      borderRadius: '50%',
                    }}
                  />
                </h3>
              </div>
              <Link to="/profile">
                <button className="profile-button" style={{ margin: '1rem 0' }}>
                  Go To Proile
                </button>
              </Link>
              <div className="refernce" style={{ margin: '1rem 0' }}>
                <h5>Reference:sadgggg,jjjiok</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
