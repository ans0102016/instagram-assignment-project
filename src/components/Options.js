import React from "react";
import grid from "../images/grid-alt.png";
import reels from "../images/reels.png";
import tagged from "../images/tag.png";

import "./Options.css";

function Options() {
  return (
    <div className="options__wrapper">
      <div className="options__items" active="true">
        <img src={grid} alt="" height="12px" width="10px" />
        <span>POSTS</span>
      </div>
      <div className="options__items">
        <img src={reels} alt="" height="12px" width="10px" />
        <span>REELS</span>
      </div>
      <div className="options__items">
        <img src={tagged} alt="" height="12px" width="10px" />
        <span>TAGGED</span>
      </div>
    </div>
  );
}

export default Options;
