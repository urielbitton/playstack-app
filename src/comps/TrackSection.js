import React from 'react'
import './styles/TrackRowGroup.css'

export default function TrackSection(props) {

  const {render, artistfilter, genresfilter, labelsfilter} = props

  return (
    <>
    {
      render({
        artistfilter,
        genresfilter,
        labelsfilter
      })
    } 
    </>
  )
}