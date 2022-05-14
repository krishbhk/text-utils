import React from 'react';

export default function About(props) {



  return (
    
    <div className={`container  bg-${props.mode}-500 `} style={{height:' 100%'}}>
      <h1 className={`my-4 ${props.mode==='dark'?'text-light' : 'text-dark'} `}>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className={` accordion-item  ${props.mode==='dark'? 'bg-dark':'bg-light' }  ${props.mode==='dark'?'text-light' : 'text-dark'}  `}>
    <h2 className={`accordion-header ${props.mode==='dark'?'text-light' : 'text-dark'} `} id="headingOne">
      <button className={` accordion-button  ${props.mode==='dark'? 'bg-dark':'bg-light'}  ${props.mode==='dark'?'text-light' : 'text-dark'} }  `} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is this?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div  className="accordion-body">
        <strong>Text Utility App.</strong> It is a React-app in which you can modify text to your liking. 
      </div>
    </div>
  </div>
  {/* <div className={` accordion-item  ${props.mode==='dark'? 'bg-dark':'bg-light' }  ${props.mode==='dark'?'text-light' : 'text-dark'}  `}>
    <h2 className="accordion-header" id="headingTwo">
      <button className={` accordion-button collapsed  ${props.mode==='dark'? 'bg-dark':'bg-light'}  ${props.mode==='dark'?'text-light' : 'text-dark'} }  `} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div  className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className={` accordion-item  ${props.mode==='dark'? 'bg-dark':'bg-light' }  ${props.mode==='dark'?'text-light' : 'text-dark'}  `}>
    <h2 className="accordion-header" id="headingThree">
      <button className={` accordion-button collapsed  ${props.mode==='dark'? 'bg-dark':'bg-light'}  ${props.mode==='dark'?'text-light' : 'text-dark'} }  `} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div  className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div> */}
</div>
    
    </div>
    
    
  )
}
