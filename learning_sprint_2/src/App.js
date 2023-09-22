import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [i, setI] = useState(1);
  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + i)
      .then((response) => response.json())
      .then((json) => setData([...data, json]));
    setI(i + 1);
  };

  return (
    <div
      className="App"
      style={{ marginTop: "100px", textAlign: "left", marginLeft: "100px" }}
    >
      <Button variant="contained" color="primary" onClick={handleClick}>
        Generate Post
      </Button>
      <br />
      <br />
      {data.map((item, index) => (
        <div key={index}>
          <p3>UserId: {item.userId}</p3>
          <br />
          <p3>Id: {item.id}</p3>
          <br />
          <p3>Title: {item.title}</p3>
          <br />
          <p3>Body: {item.body}</p3>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;
