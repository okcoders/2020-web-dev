import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'

function App() {
  const [users, updateUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      updateUsers(myJson)
    });
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and saveeeee to reload.
        </p>
        <ul>
          {users.map(u => {
           return <li>{u.name}</li>
          })}

        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
