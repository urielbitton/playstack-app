import React, {useContext, useEffect, useState} from 'react'
import { StoreContext } from './StoreContext'

export default function PlayPauseBtn({songinfo, children, onlyicon, noPlay}) {

  const {currentSong, setCurrentSong} = useContext(StoreContext) 
  const {id, title, alt, audiosrc, artwork, artist} = songinfo
  const [playing, setPlaying] = useState(false)
  

  function Play() {
    setPlaying(true)
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
  function Pause() {
    setPlaying(false)
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
    <ins 
      onClick={playing?() => Pause():() => Play()}
      style={{display: noPlay?"none":"block"}}
      className={/*playing?currentSong.id===songinfo.id?"far fa-pause":"far fa-play":"far fa-play"*/""}
    > 
    {onlyicon?<i className={playing?currentSong.id===songinfo.id?"fal fa-pause":"fal fa-play":"fal fa-play"}></i>:""}
    {children}
    </ins>
  )
}