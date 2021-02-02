import React, { useContext } from 'react'
import {StoreContext} from './StoreContext'

export default function SongBox(props) {
  
  const {currentSong, setCurrentSong} = useContext(StoreContext)
  const {id, artwork, title, alt, artist, audiosrc, isPlaying} = props.el

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
    <div className="songbox">
      <div className="imgcont">  
        <img src={artwork} alt=""/>
        <div className="songboxcover" onClick={currentSong.isPlaying?() => PauseSong():() => PlaySong()}>
          <i className={currentSong.id===id?currentSong.isPlaying?"fal fa-pause":"fal fa-play":"fal fa-play"}></i>
        </div>
      </div>
      <h6>{title}</h6>
      <small>{artist}</small>
    </div>
  )
}
