import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TextForm from './Textform';
import About from './About';
import React, { useState } from 'react';
import Alert from './Alert';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    console.log('hello');
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      document.body.style.color = 'white';
      showAlert('Dark mode has been enabled', 'success')
      document.title='Textutils - Dark mode';
      setInterval(() => {
        document.title='Textutils - Amazing';
      }, 1000);
      setInterval(() => {
        document.title='Textutils - dashing';
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success')
      document.title='Textutils - Light mode';
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <BrowserRouter>
      
      <Navbar mode={mode} toggleMode={toggleMode} aboutText="about"/>
      <Alert alert={alert}/>
      <div className="container my-3" >
        <h1>Hello</h1>
      <Routes>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}></Route>
      </Routes>
      <h2>Hi</h2>
      </div>
      </BrowserRouter>
       
    </>
  );
}


export default App;