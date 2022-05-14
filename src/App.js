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

  function capt(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  const removeBodyClass = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
  }

  const toggleMode = (cls)=>{
    removeBodyClass();
    if (cls===null && darkMode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor= '#16181b';
      showAlert('Dark Mode has been enabled', 'dark');
    } else if (cls===null && darkMode!=='light') {
      setDarkMode('light');
      document.body.style.backgroundColor= '#ffffff';
      showAlert('Light Mode has been enabled', 'dark');
    } else if(cls === 'danger') {
      setDarkMode('danger');
      document.body.style.backgroundColor= '#eda9a4';
      showAlert(`Custom theme set to ${capt(cls)}`, 'dark');
    } else if(cls === 'warning') {
      setDarkMode('warning');
      document.body.style.backgroundColor= '#ede6a4';
      showAlert(`Custom theme set to ${capt(cls)}`, 'dark');
    } else if(cls === 'primary') {
      setDarkMode('primary');
      document.body.style.backgroundColor= '#a4abed';
      showAlert(`Custom theme set to ${capt(cls)}`, 'dark');
    } else if(cls === 'success') {
      setDarkMode('success');
      document.body.style.backgroundColor= '#a4edba';
      showAlert(`Custom theme set to ${capt(cls)}`, 'dark');
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
