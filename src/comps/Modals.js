import React from 'react'
import { AddArtist, AddLabel, AddSong, AddToPlaylist } from './AddItem'
import SearchPage from './SearchPage'
import { EditSong } from './EditItem'


export default function Modals() {
  return (
    <> 
      <SearchPage /> 
      <AddSong />
      <AddArtist />
      <AddLabel />
      <EditSong />
      <AddToPlaylist contclass="addtoplaylistcont"/> 
    </>
  )
}