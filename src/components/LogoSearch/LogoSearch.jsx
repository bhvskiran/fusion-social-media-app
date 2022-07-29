import React from 'react';
import Logo from '../../assets/img/logo-fusion.png';
import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import './LogoSearch.css';

const LogoSearch = () => {
  return (
    <div className="logoSearch">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
