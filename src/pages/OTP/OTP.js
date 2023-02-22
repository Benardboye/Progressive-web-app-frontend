import React, { useState } from 'react';

import OTPInputField from 'react-otp-input';
import './OTP.scss';
import { useAuth } from '../../components/context/authcontext';

const OTP = () => {
  const { OTPConfig, ResendOTPConfig } = useAuth();
  const [otp, setOtp] = useState(' ');

  const handlechange = (otp) => {
    setOtp(otp);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const getSignature = localStorage.getItem('signature');
    OTPConfig(otp, getSignature);
  };

  const handleResendOTP = () => {
    const getSignature = localStorage.getItem('signature');
    ResendOTPConfig(getSignature);
  };

  return (
    <div className="otp-container">
      <div className="otp-style">
        <h2>OTP Verification</h2>
        <p>Fill in your OTP Verification code</p>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="otp">OTP</label> */}
          <div className="OTP-field">
            <OTPInputField
              value={otp}
              onChange={handlechange}
              numInputs={6}
              inputStyle={{
                boxSizing: 'border-box',
                width: '4rem',
                padding: '7px',
                marging: '2px 0',
                border: '1px solid #d9d9d9d',
                outline: 'none',
              }}
            />
          </div>
          <button type="submit" className='otp-btn'>Verify OTP</button>
        </form>
        </div>
        
        <p className='resend-otp'>
          Didn't get OTP?{' '}
          <span className="new-btn-style" onClick={handleResendOTP}>
            Resend OTP
          </span>
        </p>
      
    </div>
  );
};

export default OTP;
