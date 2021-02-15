import React from 'react'
import PlayPauseBtn from './PlayPauseBtn'
import { Link, useHistory } from 'react-router-dom'
import './styles/TrackRow.css'

export default function TrackRowComp(props) {

  const {i} = props
  const {artwork, favorite, title, artist, label, time, plays} = props.el 
  let history = useHistory()

  return (
    <div className="trackrow">
      <div>
        <img src={artwork} alt="" />
        <small>{i+1}</small>
        <PlayPauseBtn songinfo={props.el} onlyicon={true} />
        <i className={favorite?"fas fa-heart":"far fa-heart"} style={{color: favorite?"var(--color)":""}}></i>
      </div>
      <h6>{title}</h6> 
      <h6>{artist}</h6>  
      <h6 className="linkable" onClick={() => label && history.replace(`/labels/${label.toLowerCase().replaceAll(' ','')}`)}>{label}</h6>
      <h6 className="narrowflex">{time}</h6>
      <h6 className="narrowflex">{plays}</h6>
      <i className="far fa-ellipsis-h narrowflex"></i>
    </div>
  )
}