import React from 'react'

export default function SongRow(props) {

  const {title, artist, artwork, time, isPlaying} = props

  return (
    <div className="songrow">
      <div>
        <img src={artwork} alt=""/>
        <h6>{title}<small>{artist}</small></h6>
      </div>
      <div>
        <small>{time}</small>
        <i className="far fa-play"></i>
        <i className="far fa-ellipsis-h"></i>
      </div>
    </div>
  )
}  