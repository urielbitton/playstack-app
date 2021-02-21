import React from 'react'
import TrackRowComp from './TrackRowComp'
import './styles/TrackRowGroup.css'

export default function TrackRowGroup(props) {

  const {title, el, i} = props

  return (
    <div className="trackrowgroup">
      <h5>{title}</h5>
      <TrackRowComp el={el} i={i}/>
    </div>
  )
}