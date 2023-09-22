import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([]);
  const [postIdCounter, setPostIdCounter] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postIdCounter}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }

      const postData = await response.json();
      setPosts([...posts, postData]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    setPostIdCounter(postIdCounter + 1);
    fetchData();
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" onClick={handleClick}>
          Generate Post
        </Button>
        <div>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
