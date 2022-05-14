import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";


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
  <>
    <Router>
    <Navbar title='TextUtils' mode = {darkMode} toggleMode={toggleMode}/>
    {alert===null?<></>:<Alert alert={alert}/>}
    <div className="container my-4">

    <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the Text to analyze" mode = {darkMode} showAlert={showAlert} />} />
        <Route exact path="/about" element={<About mode={darkMode} />} />
 
    </Routes>
    </div>
    </Router>
    <Footer mode={darkMode}/>
  </>
  );
}

export default App;
