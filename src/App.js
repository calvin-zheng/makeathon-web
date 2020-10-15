import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar"
import Main from './components/main'

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Main />
    </div>
  );
}

export default App;
