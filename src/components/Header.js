import React from 'react';

import "./Header.css";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__headerWrapper">
        <img className="header__image"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Original Logo"
        />
        <div className="header__search">
            <input type="search" placeholder="Search" />
        </div>
        <div className="header__buttons">
            <button className="header__loginButton">Log In</button>
            <button className="header__signupButton">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
