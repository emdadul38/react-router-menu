import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Blog = () => {
  const [button, setButton] = useState("");

  const [blogPosts, setBlogPosts] = useState([
    { title: `Firs blog`, id: 1 },
    { title: `Second Blog post`, id: 2 }
  ]);

  useEffect(() => {
    console.log("useEffect has been called!", button);
  });

  const onYesPress = () => {
    setButton("Yes");
  };

  const onNoPress = () => {
    setButton("NO");
  };

  const addPost = () => {
    setBlogPosts([...blogPosts, { title: `My new blog`, id: uuidv4 }]);
  };

  return (
    <div>
      <button onClick={onYesPress}> Yes </button>
      <button onClick={onNoPress}> No </button>
      <ul>
        {blogPosts.map((blogPost) => {
          return <li key={blogPost.id}>{blogPost.title}</li>;
        })}
      </ul>

      <button onClick={addPost}>Add Post</button>
    </div>
  );
};

export default Blog;
