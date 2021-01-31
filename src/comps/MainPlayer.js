import React, { useContext, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import {StoreContext} from './StoreContext' 

export default function MainPlayer() {

  const {currentSong} = useContext(StoreContext)

  return (
    <div className="mainplayer">
      <AudioPlayer
        src={currentSong.src}
        showJumpControls={false}
        showSkipControls={true}
      />
    </div>
  )
}
