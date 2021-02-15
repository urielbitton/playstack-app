import React from 'react'

export default function AddItemCont({children, showadd, setShowAdd, title, iconclass}) {

  return (
    <div className="additemcont" onClick={() => setShowAdd(0)} style={showadd?{visibility:'visible',opacity:'1'}:{visibility:'hidden',opacity:'0'}}>
      <div className="additemdiv" onClick={(e) => e.stopPropagation()} style={{top: showadd?"0":"20px"}}>
        <i className="fal fa-times" onClick={() => setShowAdd(0)}></i>
        <h4><i className={iconclass}></i>{title}</h4>
        <div className="spacers"></div> 
        {children}
      </div>
    </div> 
  )
}