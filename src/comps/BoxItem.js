import React, { useContext } from 'react'
import PlayPauseBtn from './PlayPauseBtn'
import {StoreContext} from './StoreContext'
import './styles/Songbox.css' 

export default function BoxItem(props) {
  
  const {currentSong, setCurrentSong} = useContext(StoreContext)
  const {id, artwork, alt, artist, audiosrc, isPlaying} = props.songinfo
  const {title, subtitle, noPlay} = props
  
    
  return (
    <div className="songbox">
      <div className="imgcont">  
        <img src={artwork} alt=""/>
        <div className="songboxcover"> 
          <PlayPauseBtn songinfo={props.songinfo} onlyicon={true} noPlay={noPlay}/> 
        </div>
      </div>
      <h6>{title}</h6> 
      <small>{subtitle}</small>
    </div>
  )
}
