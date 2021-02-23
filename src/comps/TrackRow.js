import React, { useContext } from 'react'
import { StoreContext } from './StoreContext'
import TrackRowComp from './TrackRowComp'
import './styles/TrackRow.css'

export default function TrackRow(props) {

  const {tracks} = useContext(StoreContext)
  const {el, artistfilter, genresfilter, labelsfilter} = props.props 

  const grouprow = tracks && tracks
    .filter(x => (
      x.artist.includes(artistfilter) || x.label.includes(labelsfilter) || x.genre.includes(genresfilter)) 
      & (el.name.includes(x.genre) || el.name.includes(x.label) || el.name.includes(x.artist))
    )
    .map((el2,i) => {
      return <TrackRowComp el={el2} i={i} />
  })

  return (
    grouprow
  )
}