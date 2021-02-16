import React from 'react'
import './styles/OneAppPage.css'

export default function OneAppPage(props) {

  const {children, genres, labels, descript, textTitle, songinfo} = props
  
 
  return (
    <div className="oneapppage">
      
      <div className="appgrid">
        {children}
        <div className="spacerl"></div>
      </div>
    </div>
  )
}