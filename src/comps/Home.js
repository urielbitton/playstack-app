import React from 'react'
import HeroBanner from './HeroBanner'

export default function Home() {
  return (
    <div className="homepage hidescroll">
      <HeroBanner src="https://i.imgur.com/akxDcN6.jpg"/>
      <div style={{height: "2000px"}}></div>
    </div>
  )
}