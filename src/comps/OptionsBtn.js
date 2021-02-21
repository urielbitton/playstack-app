import React, {useContext, useState} from 'react'
import { StoreContext } from './StoreContext'
import {db} from './Fire'
import './styles/OptionsBtn.css'

export default function OptionsBtn(props) {

  const {setShowAdd, setEditData, tracks} = useContext(StoreContext)
  const [optsedit, setOptsEdit] = useState(false) 
  const {id, title, alt, audiosrc, artist, genre, label, artwork, time, category, isPlaying, plays, favorite} = props.songinfo
  const {classname} = props

  
  function sendEditData() {
    setEditData({
      id, 
      title,  
      alt, 
      artist, 
      genre,
      label,
      audiosrc, 
      artwork, 
      category,
      time,
      isPlaying,
      plays,
      favorite,
    })
  } 
  function toggleFavorite() {
    tracks && tracks.map(el => {
      if(el.id === id) {
        el.favorite = !el.favorite
      }
    })
    db.collection('music').doc('tracks').update({
      alltracks: tracks
    })  
  }

  return (
    <i className={`far fa-ellipsis-h ${classname}`}>
      <input className="optseditinp" onFocus={() => setOptsEdit(true)} onBlur={() => setTimeout(() => {setOptsEdit(false)},150)}/>
      <div className="edittrackcont" style={{display: optsedit?"block":"none"}} onClick={() => setOptsEdit(false)}>
        <h6 onClick={() => {setShowAdd(4);sendEditData()}}><i className="far fa-edit"></i>Edit Track</h6>
        <h6 onClick={() => {setShowAdd(5);sendEditData()}}><i className="far fa-list-music"></i>Add to Playlist</h6>
        <h6 onClick={() => toggleFavorite()}><i className="far fa-heart"></i>{favorite?"Remove Favorite":"Add to Favorites"}</h6>
        <h6><i className="far fa-play"></i>Play Next</h6>
      </div>
    </i>
  )
}