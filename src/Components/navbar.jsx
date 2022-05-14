import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import ButtonGroup from './ButtonGroup';

export default function Navbar(props) {

  const [textColor, setTextColor] = useState(props.mode==='dark'?'light':'dark');
  const [searchBgColor, setBgColor] = useState(props.mode);

  const searchGoogle = (e)=>{
    e.preventDefault();
    const q = document.getElementById('query');
    let sG = "https://www.google.com/search?q=";
    const url = sG  + q.value;
    const win = window.open(url, '_blank');
    q.value = '';
    win.focus();

  }
  
  const handleModeToggle = (e,cls)=>{ // The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.  
    // the main reason is to disable the default submit action of the button
    e.preventDefault();
    props.toggleMode(cls);
    setTextColor(props.mode==='dark'?'dark':'light');
    setBgColor(props.mode==='dark'?'light':'dark');
  }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
            </ul>
            <form className="d-flex">
              <div className="form-white form-outline"></div>
              <input className={`form-control me-2 bg-${searchBgColor} text-${textColor}`} type="search" placeholder="Search Google" id='query' name='q' aria-label="Search" />
              {/* <button className="btn btn btn-outline-dark btn-secondary" type="submit">Search</button> */}
              <button className="btn btn-outline-light me-2" type="submit" onClick={(e)=>{searchGoogle(e)}}>< FaSearch /></button>

              {/* <button className="btn btn-outline-light float-end" onClick={(e)=>{handleModeToggle(e)}}> < FaMoon /> </button> */}
    
              
              <ButtonGroup mode = {props.mode} handleModeToggle={handleModeToggle}/>


            </form>
          </div>
        </div>
      </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, 
    about: PropTypes.string.isRequired
  }

Navbar.defaultProps = {
  title :'Title Text here',
  about : 'About'
}