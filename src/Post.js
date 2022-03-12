import React from 'react';

function Post({ title, body }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <hr />
    </>
  );
}

export default Post;
