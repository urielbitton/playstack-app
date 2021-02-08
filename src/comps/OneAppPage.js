import React from 'react'
import HeroBanner from './HeroBanner'

export default function OneAppPage(props) {

  const {songinfo, textTitle, descript, genres, labels} = props

  return (
    <div className="oneapppage">
      <HeroBanner songinfo={songinfo} textTitle={textTitle} descript={descript} genres={genres} labels={labels}/>
    </div>
  )
}