import React, { useContext } from 'react'
import MyPages from './MyPages'
import PlaylistBox from './PlaylistBox'
import { StoreContext } from './StoreContext'
import './styles/MyPlaylists.css'

export default function MyPlaylists() {
 
  const {playlists} = useContext(StoreContext)

  const playlistsrow = playlists && playlists.map(el => {
    return <PlaylistBox el={el}/>
  })

  return (
    <MyPages className="myplaylistspage">
      <h4>All Playlists</h4>
      <div className="playlistsgrid">
        {playlistsrow}
      </div>
    </MyPages>
  )
}