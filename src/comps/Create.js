import React from 'react'
import {AddSong, AddArtist, AddLabel} from './AddItem'
import './styles/AddItem.css'

export default function Create() {

  return (
    <div className="chooseaddcont">
      <AddSong iconclass="far fa-music-alt"/>
      <AddArtist iconclass="far fa-microphone-stand"/>
      <AddLabel iconclass="far fa-compact-disc"/>
    </div>
  )
}