import React, { useEffect, useState } from "react";

function App() {

  
  const [heart, setHeart] = useState("🤍");

  
  const [users, setUsers] = useState([]);

  // Heart Toggle Function
  function changeHeart() {

    if (heart === "🤍") {
      setHeart("❤️");
    } else {
      setHeart("🤍");
    }

  }

  
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });

  }, []);

  return (
    <div>

      <h1>Like Button</h1>

      <button onClick={changeHeart}>
        {heart}
      </button>

      <hr />

      <h1>Users Data</h1>

      {users.map((user) => (
        <div key={user.id}>

          <h3>{user.name}</h3>

          <p>{user.website}</p>

          <hr />

        </div>
      ))}

    </div>
  );
}

export default App;