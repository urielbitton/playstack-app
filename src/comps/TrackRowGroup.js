import React from 'react'
import TrackRow from './TrackRow'
import './styles/TrackRowGroup.css'

export default function TrackRowGroup(props) {

  return (
    <div className="trackrowgroup">
      <h5>{props.el.name}</h5>
      <TrackRow props={props}/>
    </div>
  )
}