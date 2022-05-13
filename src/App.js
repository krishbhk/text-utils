// import logo from './logo.svg';
// import './App.css';

// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'
import Alert from "./Components/Alert";


function App() {

  const [darkMode, setDarkMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const toggleMode = ()=>{
    // setDarkMode(darkMode==='light'?'dark':'light');
    if (darkMode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor= '#16181b';
      showAlert('Dark Mode has been enabled', 'dark');
    } else {
      setDarkMode('light');
      document.body.style.backgroundColor= '#ffffff';
      showAlert('Dark Mode has been disabled', 'dark');
    }
  }

  const showAlert = ( message, type )=>{
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
  <div>
    <Navbar title='TextUtils' mode = {darkMode} toggleMode={toggleMode}/>
    {alert===null?<></>:<Alert alert={alert}/>}
    <div className="container my-4">
    <TextForm heading="Enter the Text to analyze" mode = {darkMode} showAlert={showAlert} />
    {/* <About /> */}
    </div>
  </div>
  );
}

export default App;
