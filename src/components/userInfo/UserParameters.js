import React from "react";

import "./UserParameters.css";

const UserParameters = () => {
  return (
    <div className="userParameters__wrapper">
      <div className="userParameters__firstElement">
        <strong>1,495</strong>&nbsp;posts
      </div>
      <div className="userParameters__element">
        <strong>231M</strong>&nbsp;followers
      </div>
      <div className="userParameters__element">
        <strong>262</strong>&nbsp;following
      </div>
    </div>
  );
}

export default UserParameters;
