import React from 'react'

export default function TrackRow(props) {

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