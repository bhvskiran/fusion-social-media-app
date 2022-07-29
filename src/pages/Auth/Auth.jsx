import React, { useState } from 'react';
import './Auth.css';
import Logo from '../../assets/img/logo-fusion.png';

const Auth = () => {
  const [showSignup, setShowSignup] = useState(false);

  const LogIn = () => {
    return (
      <div className="a-right" style={{ width: '29rem' }}>
        <form className="infoForm authForm">
          <h3>Log In</h3>

          <div>
            <input type="text" placeholder="Username" className="infoInput" name="username" />
          </div>
          <div>
            <input type="text" placeholder="Password" className="infoInput" name="password" />
          </div>

          <div className="changeFormSpan">
            <span>Didn't have an account?</span>
            <span onClick={() => setShowSignup(true)}>Signup Here</span>
          </div>
          <button className="button infoButton" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  };

  const SignUp = () => {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Sign Up</h3>
          <div>
            <input type="text" placeholder="First Name" className="infoInput" name="firstname" />
            <input type="text" placeholder="Last Name" className="infoInput" name="lastname" />
          </div>
          <div>
            <input type="text" placeholder="Username" className="infoInput" name="username" />
          </div>
          <div>
            <input type="text" placeholder="Password" className="infoInput" name="password" />
            <input
              type="text"
              placeholder="Confirm Password"
              className="infoInput"
              name="confirmPassword"
            />
          </div>

          <div className="changeFormSpan">
            <span>Have an account?</span>
            <span onClick={() => setShowSignup(false)}>Login Here</span>
          </div>
          <button className="button infoButton" type="submit">
            Signup
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webName">
          <h1>FUSION</h1>
          <h6>Connecting friends with different ideas</h6>
        </div>
      </div>
      <div className="a-right">{showSignup ? <SignUp /> : <LogIn />}</div>
    </div>
  );
};

export default Auth;
