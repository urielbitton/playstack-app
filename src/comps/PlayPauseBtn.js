import React, {useState, useContext} from 'react'
import {db} from './Fire'
import { StoreContext } from './StoreContext'

export default function PlayPauseBtn({songinfo, children, onlyicon, noPlay}) {

  const {currentSong} = useContext(StoreContext)
  const {id, title, alt, audiosrc, artwork, artist, favorite} = songinfo

  function Play() {
    db.collection('music').doc('currentsong').update({
      id,
      title,
      alt,
      audiosrc,
      artwork,
      artist,
      isPlaying: true,
      favorite,
    })
    document.querySelector('.rhap_container audio').play() 
  }
  function Pause() {
    db.collection('music').doc('currentsong').update({
      id,
      title,
      alt,
      audiosrc,
      artwork,
      artist,
      isPlaying: false
    })
    document.querySelector('.rhap_container audio').pause()
  } 
     
  return (  
    <ins 
      onClick={currentSong.isPlaying?() => Pause():() => Play()}
      style={{display: noPlay?"none":"block"}}
    > 
    {onlyicon?<i className={currentSong.isPlaying?currentSong.id===id?"fal fa-pause":"fal fa-play":"fal fa-play"}></i>:""}
    {children}
    </ins>
  )
}