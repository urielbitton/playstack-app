import React from 'react'
import { MediumRow } from './SongsCont'

export default function Library() {
  return (
    <div className="librarypage">
      <div className="spacer"></div>
      <div className="appgrid homeleft">
        <MediumRow homeboxtitle="My Library" customfilter="mylibrary" homeboxclass="trendingbox"/> 
      </div>
    </div>
  )
}