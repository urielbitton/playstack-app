import React, { useContext } from 'react'
import PlayPauseBtn from './PlayPauseBtn'
import {StoreContext} from './StoreContext'
import './styles/Songbox.css'

export default function SongBox(props) {
  
  const {currentSong, setCurrentSong} = useContext(StoreContext)
  const {id, artwork, title, alt, artist, audiosrc, isPlaying, noPlay} = props.el
  
   
  return (
    <div className="songbox">
      <div className="imgcont">  
        <img src={artwork} alt=""/>
        <div className="songboxcover"> 
          <PlayPauseBtn songinfo={props.el} onlyicon={true} noPlay={true}/> 
        </div>
      </div>
      <h6>{title}</h6>
      <small>{artist}</small>
    </div>
  )
}
