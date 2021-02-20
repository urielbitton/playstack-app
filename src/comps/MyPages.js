import React from 'react'

export default function MyPages(props) {

  const {children, className} = props

  return (
    <div className={`mypages ${className}`}>
      <div className="spacer"></div>
      <div className="appgrid homeleft">
         {children}
      </div>
      <div className="spacerl"></div>
    </div>
  )
}