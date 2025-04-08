⏱️ Stopwatch App using React

This project is a simple Stopwatch built with React.js that includes the following features:

✅ Features:

Start: Begins or resumes the timer.

Pause: Temporarily stops the timer without resetting the time.
 
Stop: Ends the session and allows for reset.

Reset: Clears the time and resets the stopwatch to 00:00:00.

⚙️ Tech Stack:

React.js (with functional components and Hooks)

JavaScript (ES6)

Basic CSS for styling

🚀 Get Started 🚀

 1.App.js(filename)
 
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [time,setTime] =useState(0)
  const [running,setRunning] =useState(false)
  
  useEffect(()=>{
    let interval;
    if(running){
      interval = setInterval(()=>{setTime((prevTime)=>prevTime+10)},10)
    }else if(!running){
      clearInterval(interval);
    }
    return() =>clearInterval(interval)
  },[running])

  return (
    <div className='container'>
      <div><h1>StopWatch</h1></div>
      <div className='timer'>
        <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span>
        <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
        <span>{("0"+Math.floor((time/10)%100)).slice(-2)}</span>
      </div>
      <div className='buttons'>
        <button onClick={()=>{setRunning(false)}}>Stop</button>
        {!running?(<button onClick={()=>{setRunning(true)}}>Start</button>
        ):<button onClick={()=>{setRunning(false)}}>Pause</button>
      }
        <button onClick={()=>setTime(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;

2.App.css(filename)

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(#2e2e2e, #000);
  font-family: 'Courier New', monospace;
  margin: 0;
}

.container {
  background-color: #f1f7ff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  padding: 40px 30px;
  text-align: center;
}

h1 {
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
}

.timer {
  background-color: #111;
  color: white;
  font-size: 32px;
  padding: 15px 30px;
  border-radius: 10px;
  margin-bottom: 30px;
  letter-spacing: 2px;
  display: inline-block;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  opacity: 0.8;
}

button.start {
  background-color: #000;
  color: white;
}

button.pause,
button.reset {
  background-color: #dbeaff;
  color: #333;
}
