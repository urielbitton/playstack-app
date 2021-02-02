import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from './StoreContext'

export default function HeroBanner(props) {

  const {setCurrentSong, discover, setDiscover} = useContext(StoreContext)

  const discoverbanner = discover && discover.slice(0,1).map(el => {
    return <>
      <div className="herobg" style={{backgroundImage: `url(${el.artwork})`}}>
        <div className="bgcover"></div>
      </div>
      <h6>{el.textSubtitle}</h6>
      <h1>{el.textTitle}</h1>
      <h5><i className="fal fa-user-music"></i><Link to="/artists/">{el.artist}</Link> <span><i className="fal fa-music-alt"></i><Link to="/track/">{el.title}</Link> {el.alt}</span><span><i className="fal fa-play-circle"></i>{el.plays} Plays</span></h5>
      <div className="heroactions">
        <button onClick={() => PlaySong(el)}><i className="far fa-play"></i>Play Now</button>
        <i className={el.favorite?"fas fa-heart":"far fa-heart"}></i>
      </div> 
    </>
  })

  function PlaySong(el) {
    setCurrentSong({
      id: el.id,
      title: el.title,
      alt: el.alt,
      audiosrc: el.audiosrc,
      artwork: el.artwork,
      artist: el.artist,
      isPlaying: true,
    }) 
    document.querySelector('.rhap_container audio').play()
  } 

  return (
    <div className="herobanner">
      <div className="spacer"></div>
      {discoverbanner}
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