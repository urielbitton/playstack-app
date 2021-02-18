import React from 'react'
import OptionsBtn from './OptionsBtn'
import PlayPauseBtn from './PlayPauseBtn'
import './styles/SongRow.css'

export default function SongRow(props) {
  const {songinfo} = props
  const {id, title, alt, audiosrc, artist, artwork, time} = songinfo
  const {count} = props
  
 
  return (
    <div className="songrow"> 
      <div>
        <small>{count}</small>
        <img src={artwork} alt=""/>
        <h6>{title}<small>{artist}</small></h6>
      </div>
      <div> 
        <small>{time}</small>
        <PlayPauseBtn songinfo={songinfo} onlyicon={true}/>
        <OptionsBtn songinfo={songinfo}/>
      </div>
    </div>
  )
}  