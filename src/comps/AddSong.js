import React, { useContext, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link,useHistory } from "react-router-dom"
import { AppInput } from './AppInputs'
import { StoreContext } from './StoreContext'
import './styles/AddSong.css'
import {db} from './Fire'
import firebase from 'firebase'

export default function AddSong() {

  const {setTracks} = useContext(StoreContext) 

  const [title, setTitle] = useState('')
  const [alt, setAlt] = useState('')
  const [artist, setArtist] = useState('')
  const [genre, setGenre] = useState('')
  const [audiosrc, setAudioSrc] = useState('')
  const [artwork, setArtwork] = useState('')
  const [favorite, setFavorite] = useState(false)
  const [mylibrary, setMyLibrary] = useState(false)
  const [showadd, setShowAdd] = useState(false)
  const history = useHistory()

  function createSong() {
    if(title.length && artist.length && audiosrc.length) {
      const tracksObj = {
        id: db.collection("tracks").doc().id,
        title,
        alt,
        artist, 
        genre,
        audiosrc,
        artwork,
        favorite,
        mylibrary,
        category: [''],
        isPlaying: false,
        plays: 0,
        time: '3:31' 
      }
      db.collection('tracks').doc('alltracks').update({
        alltracks: firebase.firestore.FieldValue.arrayUnion(tracksObj) 
      }) 
      history.push('/library')
    }
    else {
      window.alert('Please provide the required fields')
    }
  }

  return (
    <>
    <div className="chooseaddcont">
      <div onClick={() => setShowAdd(!showadd)}>
        <i className="far fa-music-alt"></i>
        <h5>Add Song</h5>
      </div>
    </div>
    <div className="addsongcont" style={showadd?{visibility:'visible',opacity:'1'}:{visibility:'hidden',opacity:'0'}}>
      <div className="addsongdiv" style={{top: showadd?"0":"20px"}}>
        <i className="fal fa-times" onClick={() => setShowAdd(!showadd)}></i>
        <h4>Add a Song</h4>
        <div className="spacer"></div>
        <div className="addsongform hidescroll">
          <AppInput title="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
          <AppInput title="Mix Type (e.g. Radio Edit)" onChange={(e) => setAlt(e.target.value)} value={alt}/>
          <AppInput title="Artist Name" onChange={(e) => setArtist(e.target.value)} value={artist}/>
          <AppInput title="Genre" onChange={(e) => setGenre(e.target.value)} value={genre}/>
          <AppInput title="Audio Source" onChange={(e) => setAudioSrc(e.target.value)} value={audiosrc}/>
          <AppInput title="Artwork" onChange={(e) => setArtwork(e.target.value)} value={artwork}/>
          <div className="addformcheckboxcont">
            <AppInput type="checkbox" title="Favorite" onChange={(e) => setFavorite(e.target.value)} value={favorite}/>
            <AppInput type="checkbox" title="Add To Library" onChange={(e) => setMyLibrary(e.target.value)} value={mylibrary}/>
          </div>
        </div>
        <button onClick={() => createSong()}>Add Song</button>
      </div>
    </div>
    </>
  )
}