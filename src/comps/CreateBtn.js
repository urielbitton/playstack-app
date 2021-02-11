import React from 'react'
import { useHistory } from 'react-router-dom'
import {db} from './Fire'
import firebase from 'firebase'

export function CreateSong(props) {

  const {title,alt,artist,genre,audiosrc,artwork,favorite,mylibrary,category,time} = props
  let history = useHistory()

  function create() {
    if(title.length && artist.length && audiosrc.length) {
      const tracksObj = {
        id: db.collection("music").doc().id,
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
        time 
      }
      db.collection('music').doc('tracks').update({
        alltracks: firebase.firestore.FieldValue.arrayUnion(tracksObj) 
      }).then(res => {
        history.replace('/library')
      }) 
    } 
    else {
      window.alert('Please provide the required fields')
    }
  }
  return <button onClick={() => create()}>Add Song</button>
}

export function CreateArtist(props) {

  const {name, artwork, genres, labels, descript, favorite} = props
  let history = useHistory()

  function create() {
    if(name.length) {
      const tracksObj = {
        id: db.collection("music").doc().id,
        name,
        artwork,
        genres,
        labels,  
        descript,
        favorite
      }
      db.collection('music').doc('artists').update({
        allartists: firebase.firestore.FieldValue.arrayUnion(tracksObj) 
      }).then(res => {
        history.replace('/artists')
      })  
    }
    else {
      window.alert('Please provide the required fields')
    }
  }
  return <button onClick={() => create()}>Add Artist</button>
}

export function CreateLabel(props) {

  const {name, artwork, genres, descript, owner} = props
  let history = useHistory()

  function create() {
    if(name.length) {
      const tracksObj = {
        id: db.collection("music").doc().id,
        name,
        artwork,
        genres,
        descript,
        owner
      }
      db.collection('music').doc('labels').update({
        alllabels: firebase.firestore.FieldValue.arrayUnion(tracksObj) 
      }).then(res => {
        history.replace('/labels')
      }) 
    }
    else {
      window.alert('Please provide the required fields')
    }
  }
  return <button onClick={() => create()}>Add Label</button>
}