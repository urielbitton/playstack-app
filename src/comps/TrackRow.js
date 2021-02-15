import React from 'react'

export default function TrackRow(props) {

  const {artistfilter} = props


  return (
    <>
      {
      props.render({
        artistfilter
      })
      }
    </>
  )
}