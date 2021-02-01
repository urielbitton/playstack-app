import React, { useContext } from 'react'
import {StoreContext} from './StoreContext'

export default function SongBox(props) {
  
  const {tracks, setTracks} = useContext(StoreContext)
  const {artwork, title, artist, isPlaying} = props

  function playSong() {
    
  } 

  return (
    <div className="songbox">
      <div className="imgcont">
        <img src={artwork} alt=""/>
        <div className="songboxcover" onClick={() => playSong()}>
          <i className={isPlaying?"fal fa-pause":"fal fa-play"}></i>
        </div>
      </div>
      <h6>{title}</h6>
      <small>{artist}</small>
    </div>
  )
}
