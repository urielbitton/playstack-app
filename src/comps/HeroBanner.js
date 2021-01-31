import React from 'react'

export default function HeroBanner(props) {
  return (
    <div className="herobanner">
      <div className="herobg" style={{backgroundImage: `url(${props.src})`}}></div>
    </div>
  )
}