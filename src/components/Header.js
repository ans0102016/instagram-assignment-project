import React, { useEffect, useState } from "react";

import "./Header.css";
import UserLoggedIn from "./userStatus/UserLoggedIn";
import UserLoggedOut from "./userStatus/UserLoggedOut";

import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";


const Header = () => {
  const [currentUser, setCurrentUser] = useState();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
    })
  }, [currentUser]);

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
          { currentUser !== null && <UserLoggedIn /> }
          { currentUser === null && <UserLoggedOut /> }
        </div>
      </div>
    </div>
  );
}

export default Header;
