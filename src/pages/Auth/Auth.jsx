import React from 'react';
import "./Auth.css";
import Logo from "../../assets/img/logo-fusion.png";

const Auth = () => {
  return (
    <div className="auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="webName">
                <h1>FUSION</h1>
                <h6>Connecting friends with different ideas</h6>
            </div>
        </div>
        <div className="a-right">Right</div>
        {/* 2 00 57 */}
    </div>
  )
}

export default Auth