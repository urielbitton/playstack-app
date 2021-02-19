import React, { useEffect, useState } from 'react'
import './styles/TrackHeader.css'

export default function TrackHeader(props) {

  const {headerslist, style, sortTracks, active, arrow} = props
  const [asc, setAsc] = useState(true)

  useEffect(() => {
    setAsc(!asc)
  },[sortTracks])

  const headerrow = headerslist && headerslist.map(el => {
    return <h5 
      style={{flexBasis: el.flexbasis+"%", color: active===el.title?'var(--color)':""}} 
      onClick={() => sortTracks({text:el.title,asc:!asc})}
      >{el.title}
      <i className="fas fa-caret-down" style={{color: active===el.title?'var(--color)':"",transform: !arrow?"rotate(-180deg)":""}}></i>
    </h5>
  })

  return (
    <div className="trackheadercont" style={style}>
      {headerrow}
    </div>
  )
}