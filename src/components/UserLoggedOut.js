import React, { useState } from "react";

import "./UserLoggedOut.css";
import UserLogIn from "./userAuthentication/UserLogin";
import UserSignup from "./userAuthentication/UserSignup";

function UserLoggedOut() {
  const [active, setActive] = useState("");
  return (
    <div className="userLoggedOut_wrapper">
      <div className="userLoggedOut_buttons">
        <button
          className="userLoggedOut__loginButton"
          onClick={() => setActive("login")}
        >
          Log In
        </button>
        <button
          className="userLoggedOut__signupButton"
          onClick={() => setActive("signup")}
        >
          Sign up
        </button>
        {active === "login" && <UserLogIn />}
        {active === "signup" && <UserSignup />}
      </div>
    </div>
  );
}

export default UserLoggedOut;
