import React from "react";

import "./Post.css";

function Post(props) {
  return (
    <div>
      <div className="post__headers">
        <div>
          <img src="https://www.flaticon.com/free-icon-font/grid-alt_3914211?related_id=3914211" alt="" />
          <span>POSTS</span>
        </div>
        <div>
          <span>REELS</span>
        </div>
        <div>
          <span>TAGGED</span>
        </div>
      </div>
      <div className="post__wrapper">
        <div class="post__column">
          <div class="post__row">
            {props.url}
          <img
          className="post__image"
          
        />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
