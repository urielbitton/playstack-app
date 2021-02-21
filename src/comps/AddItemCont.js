import React from 'react'

export default function AddItemCont({children, showadd, setShowAdd, title, iconclass, contclass}) {

  return (
    <div className="additemcont" style={showadd?{visibility:'visible',opacity:'1'}:{visibility:'hidden',opacity:'0'}}>
      <div className={`additemdiv ${contclass}`} style={{top: showadd?"0":"20px"}}>
        <i className="fal fa-times" onClick={() => setShowAdd(0)}></i>
        <h4><i className={iconclass}></i>{title}</h4>
        {children}
      </div>
    </div> 
  )
}