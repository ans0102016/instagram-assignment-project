import React from 'react';

import './UserParameters.css';

function UserParameters() {
  return (
    <div className="userParameters__wrapper">
      <div className="userParameters__firstElement">
        <strong>1,493</strong>&nbsp;posts
      </div>
      <div className="userParameters__element">
        <strong>230M</strong>&nbsp;followers
      </div>
      <div className="userParameters__element">
        <strong>262</strong>&nbsp;following
      </div>
    </div>
  );
}

export default UserParameters;
