import React from "react";

import PostItem from "./PostItem";

import "./PostsList.css";

const PostsList = (props) => {
  return (
    <div className="postsList__wrapper">
      {props.postsList.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          image={post.imageUrl}
          likes={post.numberOfLikes}
          comments={post.numberOfComments}
        />
      ))}
    </div>
  );
};

export default PostsList;
