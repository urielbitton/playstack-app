import React, { useContext, useState } from 'react'
import PlayPauseBtn from './PlayPauseBtn'
import { StoreContext } from './StoreContext'
import './styles/SongRow.css'

export default function SongRow(props) {

  const {setShowAdd} = useContext(StoreContext)
  const {id, title, alt, audiosrc, artist, artwork, time} = props.songinfo
  const {count} = props
  const [showedit, setShowEdit] = useState(false)


  return (
    <div className="songrow"> 
      <div>
        <small>{count}</small>
        <img src={artwork} alt=""/>
        <h6>{title}<small>{artist}</small></h6>
      </div>
      <div> 
        <small>{time}</small>
        <PlayPauseBtn songinfo={props.songinfo} onlyicon={true}/>
        <i className="far fa-ellipsis-h" onClick={() => setShowEdit(!showedit)}></i>
        <div className="edittrackcont" style={{display: showedit?"block":"none"}}>
          <h6 onClick={() => setShowAdd(1)}><i className="far fa-edit"></i>Edit Track</h6>
          <h6><i className="far fa-list-music"></i>Add to Playlist</h6>
          <h6><i className="far fa-heart"></i>Add to Favorites</h6>
          <h6><i className="far fa-play"></i>Play Next</h6>
        </div>
      </div>
    </div>
  )
}  