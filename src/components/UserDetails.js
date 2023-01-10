import React from 'react';

import './UserDetails.css';

function UserDetails() {
  return (
    <div className="userDetails__wrapper">
      <div className="userDetails__info">
        <strong>Virat Kohli</strong>
      </div>
      <div className="userDetails__info">Carpedium!</div>
      <div className="userDetails__info">
        <a className="userDetails__link" href="https://one8.com/">
          one8.com
        </a>
      </div>
    </div>
  );
}

export default UserDetails;
