// import logo from './logo.svg';
// import './App.css';

// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'


function App() {

  const [darkMode, setDarkMode] = useState('light');

  const toggleMode = ()=>{
    // setDarkMode(darkMode==='light'?'dark':'light');
    if (darkMode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor= '#16181b';
    } else {
      setDarkMode('light');
      document.body.style.backgroundColor= '#ffffff';
    }
  }

  return (
  <div>
    <Navbar title='TextUtils' mode = {darkMode} toggleMode={toggleMode}/>
    <div className="container my-4">
    <TextForm heading="Enter the Text to analyze" mode = {darkMode}/>
    {/* <About /> */}
    </div>
  </div>
  );
}

export default App;
