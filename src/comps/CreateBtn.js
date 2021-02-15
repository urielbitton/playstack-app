import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {db} from './Fire'
import firebase from 'firebase'
import { StoreContext } from './StoreContext'

export function CreateSong(props) {
 
  const {setShowAdd} = useContext(StoreContext)
  const {id,title,alt,artist,genre,label,audiosrc,artwork,favorite,category,time,plays,btntitle,mode} = props
  let history = useHistory()
  const [alltracks, setAllTracks] = useState([])
 
  function create() {
    if(title.length && artist.length && audiosrc.length) {
      const tracksObj = {
        id: mode==='edit'?id:db.collection("music").doc().id,
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
        plays: mode==='edit'?plays:0,
        time,
      } 
      if(mode==='edit') {
        alltracks && alltracks.map(el => {
          if(el.id === id) {
            let itemindex = alltracks.indexOf(el)
            alltracks[itemindex] = tracksObj
            console.log(itemindex)
          }
        })
        db.collection('music').doc('tracks').update({
          alltracks: alltracks
        })
        setShowAdd(0)
      }
      else {
        db.collection('music').doc('tracks').update({
          alltracks: firebase.firestore.FieldValue.arrayUnion(tracksObj)
        }).then(res => {
            history.replace('/library')
        })
      }
    } 
    else {
      window.alert('Please provide the required fields')
    }
  }

  useEffect(() => {
    db.collection('music').doc('tracks').onSnapshot(snap => {
      let tracks = snap.data().alltracks
      setAllTracks(tracks)
    })
  },[])

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