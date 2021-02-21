import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link,useHistory } from "react-router-dom"
import {AppInput} from './AppInputs'
import MyPages from './MyPages'
import {StoreContext} from './StoreContext'
import {db} from './Fire'
import firebase from 'firebase'
import './styles/NewPlaylist.css'

export default function NewPlaylist(props) {

  const {tracks, tracksarr, setTracksArr} = useContext(StoreContext)
  const [keyword, setKeyword] = useState('') 
  const [playlistName, setPlaylistName] = useState('')
  const pattern = new RegExp('\\b' + keyword.replace(/[\W_]+/g,""), 'i')
  let history = useHistory()

  const tracksrow = tracks && tracks
  .filter(x => {return pattern.test(x.title) || pattern.test(x.artist)})
  .map(el => {
    return <div className={tracksarr.includes(el.id)?"checksongbox selectedsongbox":"checksongbox"} 
      onClick={() => tracksarr.includes(el.id)?removeTrack(el):addTrack(el)} 
      >
      <div className="imgcont" style={{backgroundImage: `url(${el.artwork})`}}></div>
      <h6>{tracksarr.includes(el.id)?<i className="fas fa-check-circle"></i>:""}{el.title}</h6>
    </div>
  })
  function addTrack(el) {
    setTracksArr(prev => [...prev,el.id])
  }
  function removeTrack(el) {
    let itemindex = tracksarr.indexOf(el.id) 
    tracksarr.splice(itemindex,1)
    setTracksArr(prev => [...prev])
  }
  function createPlaylist() {
    const playlistObj = {
      id: db.collection("music").doc().id,
      playlistName,
      tracksarr
    }
    db.collection('music').doc('playlists').update({
      allplaylists: firebase.firestore.FieldValue.arrayUnion(playlistObj) 
    }).then(res => {
      history.replace('/myplaylists')
    })
  }

  return (
    <MyPages className="newplaylistpage">
      <h4>Create a Playlist</h4>
      <AppInput title="Playlist Name" onChange={(e) => setPlaylistName(e.target.value)} value={playlistName}/>
      <div className="trackgridcont">
        <div className="trackgrid">
          <div className="trackgridhead">
            <h5>Add Songs</h5>
            <div>
              <small onClick={() => setTracksArr([])}>Clear</small>
              <AppInput placeholder="Search by title or artist..." iconclass="far fa-search" onChange={(e) => setKeyword(e.target.value)} />
            </div>
          </div>
          <div className="trackgridinner">
            {tracksrow}
          </div>
        </div>
        <button onClick={() => createPlaylist()}>Create Playlist</button>
      </div>
      <div className="spacer"></div>
    </MyPages>
  )
}