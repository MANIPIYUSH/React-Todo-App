
import './App.css';
import InputBox from './components/InputBox';
import OutputBox from './components/OutputBox';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getLocalItems = () =>{
  let list=localStorage.getItem('lists');
  
  if(list){
    return JSON.parse(localStorage.getItem('lists'));
  }
}

function App() {
  let [items, setItems] = useState(getLocalItems()); 
    
  useEffect(() => {
     localStorage.setItem('lists',JSON.stringify(items))
  },[items])
  const acceptNewTask = (task) => {
    let newTaskArr = [...items, task];
    setItems(newTaskArr);
  }
  return (
    <div>
      <h1>Todo App</h1>
      <InputBox acceptNewTask={acceptNewTask} ></InputBox>
      <OutputBox
        list={items}
      ></OutputBox>
    </div>
  );

}

export default App;