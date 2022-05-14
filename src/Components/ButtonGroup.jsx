import React from 'react';
import {FaMoon } from "react-icons/fa";

export default function ButtonGroup(props) {

    const handleModeToggleDrop = (e,cls)=>{ // The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.  
        // the main reason is to disable the default submit action of the button
        e.preventDefault();
        props.handleModeToggle(e,cls)
        // setTextColor(props.mode==='dark'?'dark':'light');
        // setBgColor(props.mode==='dark'?'light':'dark');
      }

  return (
    <div>
      <div className="btn-group">
  <button className="btn btn-outline-light" onClick={e=>{handleModeToggleDrop(e,null)}}><FaMoon /></button>
  <button className="btn btn-outline-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu bg-dark" style={{'minWidth': '2rem', 'padding':'0.5rem'}} >
  <li><button className="btn btn-outline-light"  onClick={e=>{handleModeToggleDrop(e,'primary')}} style={{color:'blue'}} ><FaMoon /></button></li>
    <li><hr className="dropdown-divider"></hr></li>
    <li><button className="btn btn-outline-light" onClick={e=>{handleModeToggleDrop(e, 'danger')}} style={{color:'red'}} ><FaMoon /></button></li>
    <li><hr className="dropdown-divider"></hr></li>
    <li><button className="btn btn-outline-light" onClick={e=>{handleModeToggleDrop(e, 'success')}} style={{color:'green'}} ><FaMoon /></button></li>
    <li><hr className="dropdown-divider"></hr></li>
    <li><button className="btn btn-outline-light" onClick={e=>{handleModeToggleDrop(e, 'warning')}} style={{color:'yellow'}} ><FaMoon /></button></li>
  </ul>
</div>
    </div>
  )
}
