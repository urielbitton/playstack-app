import React from 'react'
import { MediumRow } from './SongsCont'

export default function MyPages(props) {

  const {pagename, customfilter} = props

  return (
    <div className="mypages">
      <div className="spacer"></div>
      <div className="appgrid homeleft">
        <MediumRow homeboxtitle={pagename} customfilter={customfilter} homeboxclass="trendingbox"/> 
      </div>
    </div>
  )
}