import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const params = useParams();

  console.log(params.token);

  return (
    <div>
      <div className="global-container">
        <div className="global-box" style={{ marginTop: '5rem' }}>
          <form className="form">
            <div className="form-element">
              <h3 className="global-heading" style={{ marginBottom: '1.4rem' }}>
                Reset Password
              </h3>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter Your New Password"
              />
            </div>
            <div className="form-element">
              <button className="reset" type="submit">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
