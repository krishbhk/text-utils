import React from 'react'

function Alert(props) {

    function capt(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

  return (
      <div className="position-absolute top-20 start-50 translate-middle">

<div className={` justify-content-center alert alert-${props.alert.type} fade show`} role="alert" >
     <strong>{capt(props.alert.type==='dark'?'success':props.alert.type)}: </strong>
  {props.alert.msg}
</div>

      </div>
  )
}

export default Alert
