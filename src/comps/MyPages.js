import React from 'react'

export default function MyPages(props) {

  const {children} = props

  return (
    <div className="mypages">
      <div className="spacer"></div>
      <div className="appgrid homeleft">
         {children}
      </div>
      <div className="spacerl"></div>
    </div>
  )
}