import React from 'react'
import HeroBanner from './HeroBanner'
import './styles/OneAppPage.css'

export default function OneAppPage(props) {

  const {children, genres, labels, descript, textTitle, songinfo} = props
 
  return (
    <div className="oneapppage">
      <HeroBanner songinfo={songinfo} textTitle={textTitle} descript={descript} genres={genres} labels={labels}/>
      <div className="appgrid">
        {children}
        <div className="spacerl"></div>
      </div>
      
    </div>
  )
}