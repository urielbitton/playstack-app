import React from 'react'
import TrackRowComp from './TrackRowComp'
import './styles/TrackRowGroup.css'

export default function TrackRowGroup(props) {

  const {el:songel, type} = props

  const grouprow = type && type
    .filter(x => songel.label===x.name | songel.genre===x.name)
    .map((el,i) => {
      return <div className="trackrowgroup">
        <h5>{el.name}</h5>
        <TrackRowComp el={songel} i={i}/>
      </div> 
  }) 

  return (
    grouprow
  )
}