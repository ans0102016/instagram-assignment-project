import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import "./Post.css";
import PostsList from './PostsList';
import { db } from "../../firebase";

function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(
    () => async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsArray = [];
      querySnapshot.forEach((doc) => {
        const post = {
          id: doc.id,
          ...doc.data()
        }
        postsArray.push(post);
      });
      setPosts(postsArray);
      console.log(postsArray);
    },
    []
  );
  return (
    <div className="post__wrapper">
      <PostsList postsList={posts} />
    </div>
  );
}

export default Post;
