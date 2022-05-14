import React, { useState } from "react";
import PropTypes from 'prop-types'

import TextSummary from "./TextSummary";

export default function TextForm(props) {

    let [text, setText] = useState('');
    let [newText, setNewText] = useState('');

    let handleUCClick = ()=>{
        // console.log('HandleUCClick was clicked');
        setNewText(text.toUpperCase());
        props.showAlert('Converted to Upper Case', 'success');
    }

    let handleLCClick = ()=>{
        setNewText(text.toLowerCase());
        props.showAlert('Converted to Lower Case', 'success');
    }

    let handleClearClick = ()=>{
        setText('');
        setNewText('');
        props.showAlert('Text Cleared', 'warning');
    }

    let handleOnChange = (event)=>{
        // console.log('Onchanged');
        setText(event.target.value);
    }

    let handleExtraSpace = ()=>{
        let s = text.split(/[ ]+/);
        setText(s.join(" "));
        setNewText(s.join(" "));
        props.showAlert('Extra Space removed', 'success');
    }

    let handleCopy = ()=>{
        navigator.clipboard.writeText(newText);
        props.showAlert('Text Copied', 'success');
    }

  return (
    <div>
        <div className="mb-3">
            <h3><label htmlFor="myBox" className={`form-label ${props.mode==='dark'?'text-light' : 'text-dark'} `}> {props.heading} </label></h3>
            <textarea value={text} onChange={handleOnChange} placeholder="Enter your text here" className={`form-control ${props.mode==='dark'? 'bg-dark':'bg-light'}  ${props.mode==='dark'?'text-light' : 'text-dark'}`} id="myBox" rows="8" />
        </div>

        <button disabled={text.length===0} className={`btn ${props.mode==='dark'? ' btn-secondary' : ' btn-outline-dark' } me-2 my-1`} onClick={handleUCClick}>Convert to Upper Case</button>
        <button disabled={text.length===0} className={`btn ${props.mode==='dark'? ' btn-secondary' : ' btn-outline-dark' } me-2 my-1`} onClick={handleLCClick}>Convert to Lower Case</button>
        <button disabled={text.length===0} className={`btn ${props.mode==='dark'? ' btn-secondary' : ' btn-outline-dark' } me-2 my-1`} onClick={handleExtraSpace}>Remove extra space</button>
        <button disabled={text.length===0} className={`btn ${props.mode==='dark'? ' btn-warning' : ' btn-outline-danger' } float-end my-1`} onClick={handleClearClick}> Clear Text </button>

        <TextSummary wordCount={text ? text.split(" ").filter(element=>{return element.length!==0}).length : 0} mode={props.mode} characterCount = {text ? text.length : 0} time={text ? 0.004 * text.split(" ").filter(element=>{return element.length!==0}).length : 0} />

        <div className="mb-3 my-5">
            <h3><label htmlFor="myBox" className={`form-label ${props.mode==='dark'?'text-light' : 'text-dark'} `} > Convereted Text </label></h3>
            <div className="card">
                <div className={`card-body ${props.mode==='dark'? 'bg-dark':'bg-light'} `}>
                    <button disabled={newText.length===0} className={`btn ${props.mode==='dark'? ' btn-secondary' : ' btn-outline-secondary' } btn-sm float-end`} onClick={handleCopy}>Copy</button>
                    <div className={`card-text   ${props.mode==='dark'?'text-light' : 'text-dark'}`}  data-placeholder="(untitled)"  >{newText}</div>
                </div>
            </div>
        </div>
    </div>
  );
}

TextForm.propTypes = {
    heading : PropTypes.string 
}

TextForm.defaultProps = {
    heading : 'Enter your Text'
}