import React from 'react'
import './styles/AppInputs.css'

export function AppInput(props) {
  return ( 
    <label className="labelinput">
      <h6>{props.title}</h6>
      <i className={props.iconclass}></i> 
      <input style={{paddingRight: props.iconclass?"40px":"10px"}} ref={props.inpRef} onFocus={() => props.onFocus&&props.onFocus()} placeholder={props.placeholder} type={props.type} value={props.value} onChange={(e) => props.onChange&&props.onChange(e)} name={props.name} checked={props.checked} disabled={props.disabled} onKeyUp={(e) => props.onKeyUp&&props.onKeyUp(e)}/>
    </label>
  )   
}  
 
export function AppSwitch(props) { 
  return (   
    <div className="switchdiv"> 
    <h6>{props.title}</h6>    
    <label className="form-switch">
        <input type="checkbox" onChange={(e) => props.onChange(e)} checked={props.checked}/>
        <i></i> 
    </label>  
    </div>
  )  
} 

