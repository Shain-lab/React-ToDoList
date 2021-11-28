import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItem] = useState([]);
  const handle = (event)=>{
    setInput(event.target.value);
  }
  const addItem = ()=>{
    setItem((prevItem)=>{
      return [...prevItem, input];
    })
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handle} type="text" value={input}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item)=>{
            return <li>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
