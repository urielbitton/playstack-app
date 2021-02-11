import React from 'react'

export default function AddItemCont({children, showadd, setShowAdd, title}) {

  return (
    <div className="additemcont" style={showadd?{visibility:'visible',opacity:'1'}:{visibility:'hidden',opacity:'0'}}>
      <div className="additemdiv" style={{top: showadd?"0":"20px"}}>
        <i className="fal fa-times" onClick={() => setShowAdd(!showadd)}></i>
        <h4>{title}</h4>
        <div className="spacer"></div>
        {children}
      </div>
    </div> 
  )
}