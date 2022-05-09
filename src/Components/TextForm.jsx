import React, { useState } from "react";
import PropTypes from 'prop-types'

import TextSummary from "./TextSummary";

export default function TextForm(props) {

    let [text, setText] = useState('');
    let [newText, setNewText] = useState('');

    let handleUCClick = ()=>{
        // console.log('HandleUCClick was clicked');
        setNewText(text.toUpperCase());
    }

    let handleLCClick = ()=>{
        setNewText(text.toLowerCase());
    }

    let handleClearClick = ()=>{
        setText('');
        setNewText('');
    }

    let handleOnChange = (event)=>{
        // console.log('Onchanged');
        setText(event.target.value);
    }

    let handleCopy = ()=>{
        navigator.clipboard.writeText(newText);
    }

  return (
    <div>
        <div className="mb-3">
            <h3><label htmlFor="myBox" className="form-label"> {props.heading} </label></h3>
            <textarea value={text} onChange={handleOnChange} placeholder="Enter your text here" className="form-control" id="myBox" rows="8" />
        </div>

        <button className="btn btn-outline-dark me-2" onClick={handleUCClick}>Convert to Upper Case</button>
        <button className="btn btn-outline-dark me-2" onClick={handleLCClick}>Convert to Lower Case</button>
        <button className="btn btn-outline-danger float-end" onClick={handleClearClick}> Clear Text </button>

        <TextSummary wordCount={text ? text.split(" ").length : 0} characterCount = {text ? text.length : 0} time={text ? 0.004 * text.split(" ").length : 0} />

        <div className="mb-3 my-5">
            <h3><label htmlFor="myBox"> Convereted Text </label></h3>
            <div className="card">
                <div className="card-body">
                    <button className="btn btn-outline-secondary btn-sm float-end" onClick={handleCopy}>Copy</button>
                    <div className="card-text">{newText}</div>
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