import React, { useContext } from 'react'
import './styles/TrackRow.css'
import {StoreContext} from './StoreContext'
import PlayPauseBtn from './PlayPauseBtn'
import { Link, useHistory } from 'react-router-dom'

export default function TrackRow(props) {

  const {tracks} = useContext(StoreContext)
  const {artistfilter} = props
  let history = useHistory()

  const tracksrow = tracks && tracks
    .filter(x => artistfilter.toLowerCase() === x.artist.toLowerCase())
    .map((el,i) => {
      return <div className="trackrow">
        <div>
          <img src={el.artwork} alt="" />
          <small>{i+1}</small>
          <PlayPauseBtn songinfo={el} onlyicon={true} />
          <i className={el.favorite?"fas fa-heart":"far fa-heart"} style={{color: el.favorite?"var(--color)":""}}></i>
        </div>
        <h6>{el.title}</h6> 
        <h6>{el.artist}</h6>  
        <h6 className="linkable" onClick={() => el.label && history.replace(`/labels/${el.label.toLowerCase().replaceAll(' ','')}`)}>{el.label}</h6>
        <h6 className="narrowflex">{el.time}</h6>
        <h6 className="narrowflex">{el.plays}</h6>
        <i className="far fa-ellipsis-h narrowflex"></i>
      </div>
  })

  return (
    tracksrow
  )
}