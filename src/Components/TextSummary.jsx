import React from 'react'

export default function TextSummary(props) {
  return (
    <div className={`  ${props.mode==='dark'?'text-light' : 'text-dark'}  mb-3 my-5`}>
            <h3><label htmlFor="myBox"> Text Summary </label></h3>
            <div className={`card ${props.mode==='dark'? 'bg-dark':'bg-light'} `}>
                <div className="card-body">
                    <p className="card-title">Word count: </p>
                    <div className="card-text">{props.wordCount}</div>
                    <hr />
                    <p className="card-title">Characters count: </p>
                    <div className="card-text">{props.characterCount}</div>
                    <hr/>
                    <p className="card-title">Time taken to read: </p>
                    <div className="card-text">{props.time} Minutes</div>
                </div>
            </div>
        </div>
  )
}
