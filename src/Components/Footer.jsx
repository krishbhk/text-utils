import React from 'react'

export default function Footer(props) {
  return (
    <div className={`footer ${props.mode==='dark'? 'bg-dark':'bg-light'}`} >
        <div className="container">
        <p className={`${props.mode==='dark'?'text-light' : 'text-dark'} `}>Made with ❤️ Rish</p>
        </div>
    </div>
  )
}
