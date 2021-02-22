import React, { useContext } from 'react'
import { StoreContext } from './StoreContext'
import TrackRowComp from './TrackRowComp'
import './styles/TrackRow.css'

export default function TrackRow(props) {

  const {tracks} = useContext(StoreContext)
  const {el, artistfilter, genresfilter, labelsfilter} = props.props

  const grouprow = tracks && tracks
    .filter(x => (
      x.artist.toLowerCase().includes(artistfilter.toLowerCase()) || x.label.includes(labelsfilter) || x.genre.includes(genresfilter)) 
      & (x.genre===el.name || x.label===el.name || x.artist.toLowerCase()===el.name.toLowerCase())
    ).map((el2,i) => {
      return <TrackRowComp el={el2} i={i} />
  })

  return (
    grouprow
  )
}