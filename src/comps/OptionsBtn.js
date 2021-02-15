import React, {useContext, useState} from 'react'
import { StoreContext } from './StoreContext'
import './styles/OptionsBtn.css'

export default function OptionsBtn(props) {

  const {setShowAdd, setEditData} = useContext(StoreContext)
  const [optsedit, setOptsEdit] = useState(false) 
  const {id, title, alt, audiosrc, artist, genre, label, artwork, time, category, isPlaying, plays, favorite} = props.songinfo
  
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

  return (
    <>
      <i className="far fa-ellipsis-h" onClick={() => setOptsEdit(!optsedit)}></i>
      <div className="edittrackcont" style={{display: optsedit?"block":"none"}} onClick={() => setOptsEdit(false)}>
        <h6 onClick={() => {setShowAdd(4);sendEditData()}}><i className="far fa-edit"></i>Edit Track</h6>
        <h6><i className="far fa-list-music"></i>Add to Playlist</h6>
        <h6><i className="far fa-heart"></i>Add to Favorites</h6>
        <h6><i className="far fa-play"></i>Play Next</h6>
      </div>
    </>
  )
}