import React, { useContext } from 'react'
import './styles/TrackRow.css'
import {StoreContext} from './StoreContext'
import PlayPauseBtn from './PlayPauseBtn'

export default function TrackRow(props) {

  const {tracks} = useContext(StoreContext)
  const {artistfilter} = props

  const tracksrow = tracks && tracks.map(el => {
    if(artistfilter.toLowerCase() === el.artist.toLowerCase()) {
      return <div className="trackrow">
        <div>
          <img src={el.artwork} alt="" />
          <small>01</small>
          <PlayPauseBtn songinfo={el} onlyicon={true} />
          <i className={el.favorite?"fas fa-heart":"far fa-heart"}></i>
        </div>
        <h6>{el.title}</h6>
        <h6>{el.artist}</h6>
        <h6 className="narrowflex">{el.time}</h6>
        <h6 className="narrowflex">{el.plays}</h6>
        <i className="far fa-ellipsis-h narrowflex"></i>
      </div>
    }
  })

  return (
    tracksrow
  )
}