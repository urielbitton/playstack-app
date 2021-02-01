import React, { useContext, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import {StoreContext} from './StoreContext' 

export default function MainPlayer() {

  const {currentSong} = useContext(StoreContext)
  const [miniplayer, setMiniPlayer] = useState(false)

  const playertitles = <div className="playertitles">
    <img src="https://i.imgur.com/YOdngQn.jpg" alt=""/>
    <h5>Neon Heart (Extended Mix)<small>Darren Styles</small></h5>
  </div>

  return ( 
    <div className="mainplayer">
      <i style={{bottom: miniplayer?"40px":"63px", left: miniplayer?"62px":"30px"}} onClick={() => setMiniPlayer(!miniplayer)} className={miniplayer?"far fa-angle-up miniplayericon":"far fa-angle-down miniplayericon"}></i>
      <AudioPlayer
        src={currentSong.audiosrc}
        autoPlay={false}
        showJumpControls={false}
        showSkipControls={true}
        volume={0.5}
        layout={'stacked'}
        header={miniplayer?null:playertitles}
        style={miniplayer?{width: '250px', borderRadius: '10px', bottom:'20px',left:'30px'}:{}}
      />
    </div>
  )
}
