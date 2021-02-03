import React, { useContext, useState, useEffect } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import {StoreContext} from './StoreContext' 
import './styles/MainPlayer.css'

export default function MainPlayer() {

  const {currentSong, setCurrentSong} = useContext(StoreContext)
  const [miniplayer, setMiniPlayer] = useState(false)
  const [mobilePlayer, setMobilePlayer] = useState(true)
  const [blurplayer, setBlurPlayer] = useState(true)

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
    <div className={mobilePlayer?"mobplayercont mainplayer":"mainplayer"} style={{backdropFilter: blurplayer?"blur(8px)":"blur(1px)"}}>
      <i className={miniplayer?"far fa-angle-up miniplayericon":"far fa-angle-down miniplayericon"} style={miniplayer?{bottom:"40px",left:"82px",fontSize:"20px"}:{bottom:"63px",left:"30px"}} onClick={() => setMiniPlayer(!miniplayer)}></i>
      <i className={mobilePlayer?"far fa-window-maximize mobileplayericon regularplayericon":"far fa-window-maximize mobileplayericon"} style={{display: miniplayer?"none":"block", transform: mobilePlayer?"rotate(180deg)":""}} onClick={() => setMobilePlayer(!mobilePlayer)}></i>
      {
        mobilePlayer?
        <>
          <i 
            className="far fa-angle-down closemobplayer" 
            onMouseEnter={() => setBlurPlayer(false)}
            onMouseLeave={() => setBlurPlayer(true)}
            onClick={() => {setMobilePlayer(!mobilePlayer);setBlurPlayer(true)}}
          ></i>
          <div className="playerhead"></div>
          <div className="playerbody">
            <div className="playerartworkcont" style={{backgroundImage: `url(${currentSong.artwork})`}}></div>
            <h3>{currentSong.title} {currentSong.alt}</h3>
            <h6>{currentSong.artist}</h6>
          </div>
        </>
        :""
      }
      <AudioPlayer
        src={currentSong.audiosrc}
        autoPlay={false}
        showJumpControls={false}
        showSkipControls={true}
        volume={0.2}
        layout={'stacked'}
        header={mobilePlayer?null:miniplayer?null:playertitles}
        style={miniplayer?{width: '250px', borderRadius: '10px', bottom:'20px',left:'30px'}:{}}
        onPlay={() => PlaySong()}
        onPause={() => PauseSong()}
        className={mobilePlayer?"mobileplayer":""}
      />
    </div>
  )
}
