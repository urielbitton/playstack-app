import React from 'react'
import { AddArtist, AddLabel, AddSong } from './AddItem'
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
    </>
  )
}