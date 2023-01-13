import React from "react";
import { signOut } from "firebase/auth";

import { auth } from "../firebase";

function UserLoggedIn(props) {

  function handleSignout(event) {
    event.preventDefault();
    signOut(auth)
    .then(() => {
      alert("You have been logged out!");
    });
  }

  return (
    <div>
      <form>
      <button type="submit" onClick={() => handleSignout()}>Log out</button>
      </form>
    </div>
  );
}

export default UserLoggedIn;
