import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const baseurl = "api";

  const showData = () => {
    fetch(`${baseurl}/data`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(() => console.log("Error no data found"));
  };

  const handleAdd = () => {
    fetch(`${baseurl}/addData`, {
      method: "POST",
      body: { id: 2, name: "John" },
    })
      .then((response) => console.log(response))
      .catch(() => console.log("Error no data found"));
  };

  return (
    <div className="App">
      <h1> MirageJs Practise</h1>
      <br />
      <button onClick={handleAdd}>Add</button>
      <br />
      <button onClick={showData}>show</button>
      <br />
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
