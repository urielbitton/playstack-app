import React from 'react'
import { Link } from 'react-router-dom'
import PlayPauseBtn from './PlayPauseBtn'
import './styles/HeroBanner.css'

export default function HeroBanner(props) {

  const {artwork, artist, title, alt, plays, isPlaying, favorite} = props.songinfo
  const {textSubtitle, textTitle, showsong=false} = props

  return (
    <div className="herobanner">
      <div className="spacer"></div>
      <div className="herobg" style={{backgroundImage: `url(${artwork})`}}>
        <div className="bgcover"></div> 
      </div>
      <h6>{textSubtitle}</h6>
      <h1>{textTitle}</h1> 
      {showsong?<>
      <h5>
        <i className="fal fa-user-music"></i><Link to="/artists/">{artist}</Link> 
        <span><i className="fal fa-music-alt"></i><Link to="/track/">{title}</Link> {alt}</span>
        <span><i className="fal fa-play-circle"></i>{plays} Plays</span>
      </h5>
      <div className="heroactions"> 
        <PlayPauseBtn songinfo={''}><button><i className={isPlaying?"far fa-pause":"far fa-play"}></i>Play Now</button></PlayPauseBtn>
        <i className={favorite?"fas fa-heart":"far fa-heart"}></i>
        <i className="far fa-ellipsis-h"></i>
      </div></>:"" 
      }
      <div className="heronav">
        <div></div><div className="active"></div><div></div><div></div>
        <div className="arrowcont">
          <i className="far fa-angle-up"></i>
          <i className="far fa-angle-down"></i>
        </div>
      </div>
    </div>
  )
}