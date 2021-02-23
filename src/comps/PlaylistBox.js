import React, { useContext } from 'react'
import { BrowserRouter as Router,Switch,Route,Link,useHistory } from "react-router-dom"
import { StoreContext } from './StoreContext'
import './styles/PlaylistBox.css'

export default function PlaylistBox(props) {

  const {tracks} = useContext(StoreContext)
  const {playlistName, tracksarr} = props.el
  let history = useHistory()

  const tracksimgsrow = tracksarr && tracksarr.map(el => {
    return tracks.find(x => x.id===el).artwork
  }) 
  const imgboxes = tracksarr && tracksarr.slice(0,4).map((el,i) => {
    return <div className="imgbox" 
    style={{backgroundImage:`url(${tracksimgsrow[i]})`}}>
    </div>
  })


  return (
    <div className="playlistbox" onClick={() => history.replace(`/myplaylists/${playlistName.toLowerCase().replaceAll(' ','')}`)}>
      <div className="imgcont">
        {imgboxes}
      </div>
      <div className="infocont">
        <h5>{playlistName}</h5>
        <h6><span>Tracks: </span>{tracksarr.length} total</h6>
      </div>
    </div>
  )
}