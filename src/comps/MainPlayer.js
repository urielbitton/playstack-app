import React, { useContext, useState, useEffect } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import {StoreContext} from './StoreContext' 

export default function MainPlayer() {

  const {currentSong, setCurrentSong} = useContext(StoreContext)
  const [miniplayer, setMiniPlayer] = useState(false)

  const playertitles = <div className="playertitles">
    <img src={currentSong.artwork} alt=""/>
    <h5>{currentSong.title} {currentSong.alt}<small>{currentSong.artist}</small></h5>
  </div>

  function PlaySong() {
    currentSong.isPlaying = true
    setCurrentSong(currentSong) 
  }  
  function PauseSong() {
    currentSong.isPlaying = false
    setCurrentSong(currentSong) 
  } 

  return ( 
    <div className="mainplayer">
      <i style={{bottom: miniplayer?"40px":"63px", left: miniplayer?"62px":"30px"}} onClick={() => setMiniPlayer(!miniplayer)} className={miniplayer?"far fa-angle-up miniplayericon":"far fa-angle-down miniplayericon"}></i>
      <AudioPlayer
        src={currentSong.audiosrc}
        autoPlay={false}
        showJumpControls={false}
        showSkipControls={true}
        volume={0.2}
        layout={'stacked'}
        header={miniplayer?null:playertitles}
        style={miniplayer?{width: '250px', borderRadius: '10px', bottom:'20px',left:'30px'}:{}}
        onPlay={() => PlaySong()}
        onPause={() => PauseSong()}
      />
    </div>
  )
}
