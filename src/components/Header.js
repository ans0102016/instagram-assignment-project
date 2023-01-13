import React, { useEffect, useState } from "react";

import "./Header.css";
import UserLoggedIn from "./UserLoggedIn";
import UserLoggedOut from "./UserLoggedOut";

import { auth } from "../firebase";


function Header() {
  const [user, setUser] = useState();
  
  useEffect(() => {
    setUser(auth.currentUser);
  }, [user]);

  return (
    <div className="header__wrapper">
      
      <div className="header__userInfoWrapper">
        <img
          className="header__image"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Original Logo"
        />
        <div className="header__search">
          <input type="search" placeholder="Search" />
        </div>
        <div className="header__buttons">
          { user !== null && <UserLoggedIn /> }
          { user === null && <UserLoggedOut /> }
        </div>
      </div>
    </div>
  );
}

export default Header;
