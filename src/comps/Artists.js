import React, { useContext } from 'react'
import HeroBanner from './HeroBanner'
import SongBox from './SongBox'
import { StoreContext } from './StoreContext'

export default function Artists() {

  const {artists} = useContext(StoreContext)

  return (
    <div className="apppage">
      <HeroBanner />
      <SongBox el={artists[0]}/>
    </div>
  )
}