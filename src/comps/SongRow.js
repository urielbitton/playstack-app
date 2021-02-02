import React, { useContext } from 'react'
import {StoreContext} from './StoreContext'

export default function SongRow(props) {

  const {currentSong, setCurrentSong} = useContext(StoreContext)
  const {id, title, alt, audiosrc, artist, artwork, time, isPlaying} = props.el

  function PlaySong() {
    setCurrentSong({
      id,
      title,
      alt,
      audiosrc,
      artwork,
      artist,
      isPlaying: true,
    }) 
    document.querySelector('.rhap_container audio').play()
  } 
  function PauseSong() {
    setCurrentSong({
      id,
      title,
      alt,
      audiosrc,
      artwork,
      artist,
      isPlaying: false,
    }) 
    document.querySelector('.rhap_container audio').pause()
  } 

  return (
    <div className="songrow">
      <div>
        <img src={artwork} alt=""/>
        <h6>{title}<small>{artist}</small></h6>
      </div>
      <div> 
        <small>{time}</small>
        <i className={currentSong.id===id?currentSong.isPlaying?"far fa-pause":"far fa-play":"far fa-play"} onClick={currentSong.isPlaying?() => PauseSong():() => PlaySong()}></i>
        <i className="far fa-ellipsis-h"></i>
      </div>
    </div>
  )
}  