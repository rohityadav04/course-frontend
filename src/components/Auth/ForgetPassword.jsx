import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <>
      <div className="global-container">
        <div className="global-box" style={{ marginTop: '5rem' }}>
          <form className="form">
            <div className="form-element">
              <h3 className="global-heading" style={{ marginBottom: '1.4rem' }}>
                Forget Password
              </h3>

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
              <button className="reset" type="submit">
                Send Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
