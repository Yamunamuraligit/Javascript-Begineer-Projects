📋 To-Do List App (JavaScript)
This is a simple To-Do List web application built using vanilla JavaScript. It allows users to:

✅ Add new tasks
❌ Delete existing tasks

It's a beginner-friendly project that focuses on core JavaScript DOM manipulation and user interaction.

// Code
// App.js
import { useState } from 'react';
import './App.css';
import Header from './Components/Header.jsx';
import Tasks from './Components/Tasks.jsx';
function App() {

  const[tasklist,setTaskList] =useState([])

  console.log(tasklist)
  return (
    <div >
      <Header tasklist ={tasklist} setTaskList ={setTaskList} />
      <div>
        {tasklist.map((task,index)=>
          // <li key={index}>{task}</li>
          <Tasks
           key = {index}
           task = {task}
           index={index}
           tasklist ={tasklist}
           setTaskList={setTaskList}/>
        )}
      </div>
    </div>
  );
}

export default App;

// Component folder
// Header.jsx

import React, { useState } from 'react'
import './Header.css'
const Header = ({tasklist,setTaskList}) =>{

    const[input ,setInput] = useState("");

    const addHandler=(e)=>{
        e.preventDefault();
        setTaskList([...tasklist,input])
        setInput("")
    }
    console.log(input)
    return (
        <div>
        <div><h1>To do List</h1></div>
        <div>
            <form onSubmit={addHandler}>
                <input type='text' placeholder='Enter the task' value = {input} onChange={(e)=>setInput(e.target.value)}/>
            <button type ="submit">Add</button>
            </form>
        </div>
        </div>
    )
}

export default Header

// Task.jsx
import React from 'react';
import './Tasks.css';


const Tasks = ({ task,index,tasklist,setTaskList }) => {
    const deleteHandler =()=>{
        
  setTaskList(tasklist.filter((_,t) => t !== index));
    }
  return (
    <div className="task-container">
      <p>{task}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Tasks;

// CSS of the files
// App.css
/* App.css */

/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f3f4f6;
  color: #333;
  padding: 2rem;
  text-align: center;
}
// Component folder
// Header.css
/* Header.css */

h1 {
    font-size: 2.5rem;
    color: #4f46e5;
    margin-bottom: 1.5rem;
  }
  
  form {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 2rem;
  }
  
  input[type="text"] {
    padding: 10px;
    width: 300px;
    border: 2px solid #d1d5db;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    transition: border 0.3s;
  }
  
  input[type="text"]:focus {
    border-color: #6366f1;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4f46e5;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #4338ca;
  }
  // Tasks.css
/* Tasks.css */

.task-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 15px 20px;
    margin: 10px auto;
    width: 60%;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .task-container p {
    font-size: 1.1rem;
    margin: 0;
  }
  
  .task-container button {
    background-color: #ef4444;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px 15px;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .task-container button:hover {
    background-color: #dc2626;
  }
  
