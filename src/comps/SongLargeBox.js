import React from 'react'
import PlayPauseBtn from './PlayPauseBtn'
import './styles/SongLargeBox.css'

export default function SongLargeBox(props) {

  const {title, artist, artwork, time} = props.el

  return (
    <div className="songlargebox" style={{backgroundImage: `url(${artwork})`}}>
      <div className="largeboxinner">
        <div className="largeboxcover"></div>
        <PlayPauseBtn songinfo={props.el} onlyicon={true}/>
        <h4>{title}</h4>
        <small>{time}</small>
      </div>
    </div>
  )
}