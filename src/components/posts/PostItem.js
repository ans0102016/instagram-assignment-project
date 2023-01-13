import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

import "./PostItem.css";

function PostItem(props) {
  return (
    <div className="postItem__wrapper">
      <img className="postItem__image" src={props.image} alt="" />
      <div className="postItem__likesComments">
        <span className="postItem__likes">
            <FavoriteIcon></FavoriteIcon>
            {props.likes}
        </span>
        <span className="postItem__comments">
            <ModeCommentIcon></ModeCommentIcon>
            {props.comments}
        </span>
      </div>
    </div>
  )
}

export default PostItem;