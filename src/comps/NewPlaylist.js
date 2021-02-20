import React, { useContext } from 'react'
import {AppInput} from './AppInputs'
import MyPages from './MyPages'
import {StoreContext} from './StoreContext'
import './styles/NewPlaylist.css'

export default function NewPlaylist(props) {

  const {tracks} = useContext(StoreContext)

  const tracksrow = tracks && tracks.map(el => {
    return <div className="checksongbox" style={{backgroundImage: `url(${el.artwork})`}}>

    </div>
  })

  return (
    <MyPages className="newplaylistpage">
      <h4>Create a Playlist</h4>
      <AppInput title="Playlist Name"/>
      <AppInput title="Color" type="color"/>
      <div className="trackgridcont">
        <div className="trackgrid hidescroll">
          {tracksrow}
        </div>
      </div>
    </MyPages>
  )
}