import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

const MainPage = () => {
  // Initialize a counter that will be incremented each time the button is clicked
  const [counter, setCounter] = useState(1);
  
  // Initialize an array to store the posts that will be fetched
  const [posts, setPosts] = useState([]);

  const generatePost = () => {
    // Add the current counter value to the posts array
    setPosts([...posts, counter]);

    // Increment the counter for the next post
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={generatePost}>Generate Post</button>
      <div>
        {posts.map((postId, index) => (
          <Post key={index} id={postId} />
        ))}
      </div>
    </div>
  );
};

const Post = ({ id }) => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.error('Failed to fetch post:', error);
      }
    };

    fetchPost();
  }, [id]);

  return postData ? (
    <div style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
      <h2>{postData.title}</h2>
      <p>{postData.body}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default App;
