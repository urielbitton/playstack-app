import React, { useContext, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import {StoreContext} from './StoreContext' 

export default function MainPlayer() {

  const {currentSong} = useContext(StoreContext)
  const [miniplayer, setMiniPlayer] = useState(false)

  return ( 
    <div className="mainplayer">
      <i style={{bottom: miniplayer?"40px":"20.5px", left: miniplayer?"62px":"45px"}} onClick={() => setMiniPlayer(!miniplayer)} className={miniplayer?"far fa-window-maximize miniplayericon":"far fa-minus-square miniplayericon"}></i>
      <AudioPlayer
        src={currentSong.src}
        showJumpControls={false}
        showSkipControls={true}
        volume={0.5}
        style={miniplayer?{width: '250px', borderRadius: '10px', bottom:'20px',left:'20px'}:{}}
      />
    </div>
  )
}
