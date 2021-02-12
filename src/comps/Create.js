import React from 'react'
import {AddSong, AddArtist, AddLabel} from './AddItem'
import './styles/AddItem.css'

export default function Create() {

  return (
    <div className="chooseaddcont">
      <AddSong iconclass="fal fa-music-alt"/>
      <AddArtist iconclass="fal fa-microphone-stand"/>
      <AddLabel iconclass="fal fa-compact-disc"/>
    </div>
  )
}