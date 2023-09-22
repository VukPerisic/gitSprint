import React from 'react';

function Post({ post }) {
  return (
    <div className="post">
      <h2>Post {post.id}</h2>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;