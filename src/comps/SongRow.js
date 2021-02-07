import React, { useContext } from 'react'
import PlayPauseBtn from './PlayPauseBtn'
import {StoreContext} from './StoreContext'
import './styles/SongRow.css'

export default function SongRow(props) {

  const {currentSong, setCurrentSong} = useContext(StoreContext)
  const {id, title, alt, audiosrc, artist, artwork, time} = props.songinfo

  return (
    <div className="songrow"> 
      <div>
        <img src={artwork} alt=""/>
        <h6>{title}<small>{artist}</small></h6>
      </div>
      <div> 
        <small>{time}</small>
        <PlayPauseBtn songinfo={props.songinfo} onlyicon={true}/>
        <i className="far fa-ellipsis-h"></i>
      </div>
    </div>
  )
}  