import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import PlayPauseBtn from './PlayPauseBtn'
import OptionsBtn from './OptionsBtn'
import './styles/TrackRow.css'

export default function TrackRowComp(props) {

  const {i} = props
  const {artwork, favorite, title, artist, label, genre, time, plays} = props.el 
  let history = useHistory()

  return (
    <div className="trackrow">
      <div>
        <small>{i+1}</small>
        <img src={artwork} alt="" />
        <PlayPauseBtn songinfo={props.el} onlyicon={true} />
        <i className={favorite?"fas fa-heart":"far fa-heart"} style={{color: favorite?"var(--color)":""}}></i>
      </div>
      <h6>{title}</h6> 
      <h6>{artist}</h6>  
      <h6 className="linkable" onClick={() => label && history.replace(`/labels/${label.toLowerCase().replaceAll(' ','')}`)}>{label}</h6>
      <h6>{genre}</h6>  
      <h6 className="narrowflex">{time}</h6>
      <h6 className="narrowflex">{plays}</h6>
      <OptionsBtn songinfo={props.el} classname="narrowflex"/>
    </div>
  )
}