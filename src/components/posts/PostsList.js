import React from "react";

import PostItem from "./PostItem";

import "./PostsList.css";

function PostsList(props) {
  return (
    <div className="postsList__wrapper">
      {props.postsList.map((post) => (
        <div className="postsList_wrapper">
          <PostItem
            key={post.id}
            id={post.id}
            image={post.imageUrl}
            likes={post.numberOfLikes}
            comments={post.numberOfComments}
          />
        </div>
      ))}
    </div>
  );
}

export default PostsList;
