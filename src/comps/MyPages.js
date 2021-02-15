import React from 'react'
import { MediumRow } from './SongsCont'

export default function MyPages(props) {

  const {pagename, songsfilter} = props

  return (
    <div className="mypages">
      <div className="spacer"></div>
      <div className="appgrid homeleft">
        <MediumRow homeboxtitle={pagename} songsfilter={songsfilter} homeboxclass="trendingbox" view="listview"/> 
      </div>
    </div>
  )
}