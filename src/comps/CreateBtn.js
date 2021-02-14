import React from 'react'
import { useHistory } from 'react-router-dom'
import {db} from './Fire'
import firebase from 'firebase'

export function CreateSong(props) {

  const {id,title,alt,artist,genre,label,audiosrc,artwork,favorite,category,time,plays,btntitle} = props
  let history = useHistory()
 
  function create() {
    if(title.length && artist.length && audiosrc.length) {
      const tracksObj = {
        id: id.length?id:db.collection("music").doc().id,
        title,
        alt,
        artist, 
        genre, 
        label, 
        audiosrc, 
        artwork, 
        favorite,
        mylibrary: true,
        category,
        isPlaying: false,
        plays: plays.length?plays:0,
        time,
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
  return <button onClick={() => create()}>{btntitle} Song</button>
}

export function CreateArtist(props) {

  const {name, artwork, genres, labels, descript, favorite} = props
  let history = useHistory()

  function create() {
    if(name.length) {
      const artistObj = {
        id: db.collection("music").doc().id,
        name,
        artwork,
        genres,
        labels,  
        descript,
        favorite
      }
      db.collection('music').doc('artists').update({
        allartists: firebase.firestore.FieldValue.arrayUnion(artistObj) 
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
      const labelsObj = {
        id: db.collection("music").doc().id,
        name,
        artwork,
        genres,
        descript,
        owner
      }
      db.collection('music').doc('labels').update({
        alllabels: firebase.firestore.FieldValue.arrayUnion(labelsObj) 
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