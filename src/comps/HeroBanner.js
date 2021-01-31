import React from 'react'

export default function HeroBanner(props) {
  return (
    <div className="herobanner">
      <div className="spacer"></div>
      <div className="herobg" style={{backgroundImage: `url(${props.src})`}}>
        <div className="bgcover"></div>
      </div>
      <h6>Discover</h6>
      <h1>Hot new tracks<br/>this week</h1>
      <h5><i class="fal fa-user-music"></i>Sick Individuals <span><i class="fal fa-music-alt"></i>Runaway (Original Mix)</span><span><i class="fal fa-play-circle"></i>4M Plays</span></h5>
      <div className="heroactions">
        <button><i className="far fa-play"></i>Play Now</button>
        <i className="far fa-heart"></i>
      </div>
    </div>
  )
}