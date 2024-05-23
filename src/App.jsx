import { useState } from 'react'
import React from 'react'
import './App.css'
const App = () => {
  const[name,setName]=useState('');
  const[age,setAge]=useState(0);
  const[height,setHeight]=useState(0);
  const[power,setPower]=useState('');
  const[display,setDisplay]=useState(false)
  const changename=()=>{
  }

  return (
    <div className="App">
    <h1>Creating a Hero</h1>  
    <div>

    <label>Name:</label>
    <input type="text" style={{margin:10}} onChange={((e)=>{
      setName(e.target.value)
    })}/>
    <label>Age:</label>
    <input type="number" style={{margin:10}} onChange={((e)=>{
      setAge(e.target.value)
    })} />
    <label>Height:</label>
    <input type="number" style={{margin:10}} onChange={((e)=>{
      setHeight(e.target.value)
    })}/>
    <label>Super Power:</label>
    <input type="text" style={{margin:10}} onChange={((e)=>{
      setPower(e.target.value)
    })} />
    </div>
    <button onClick={()=>setDisplay(true)}>Submit</button>
    <div>
      <h1>evadra hero</h1>
      {display && (
        <ul>
          <li>Name={name}</li>
          <li>Age={age}</li>
          <li>Height={height}</li>
          <li>Super Power={power}</li>
        </ul>
       )} 
       
    </div>
    </div>
  )
}

export default App
