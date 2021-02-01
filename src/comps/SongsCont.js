import React, { useContext } from 'react'
import SongBox from './SongBox'
import SongRow from './SongRow'
import SongLargeBox from './SongLargeBox'
import {StoreContext} from './StoreContext'

export function BigRow(props) {

  const {tracks} = useContext(StoreContext)
  const {homeboxclass, homeboxtitle, songsfilter} = props

  const bigrow = tracks && tracks.map(el => {
    if(true)
    return <SongLargeBox key={el.id} />
  })

  return (
    <div className="homebox">
      <h5>New Releases</h5>
        {bigrow}
    </div>
  )
}

export function MediumRow(props) {

  const {tracks} = useContext(StoreContext)
  const {homeboxclass, homeboxtitle, songsfilter} = props

  const mediumrow = tracks && tracks.map(el => {
    if(el.category.includes(songsfilter))
      return <SongBox key={el.id} el={el} />
  })

  return (
    <div className={`homebox ${homeboxclass}`}>
      <h5>{homeboxtitle}<small>View All</small></h5>
      <div className="homeboxrow">
        {mediumrow}
      </div>
    </div> 
  )
}

export function SmallRow(props) {

  const {tracks} = useContext(StoreContext)
  const {homeboxclass, homeboxtitle, songsfilter} = props

  const smallrow = tracks && tracks.slice(0,7).map(el => {
    if(el.category.includes(songsfilter))
    return <SongRow key={el.id} title={el.title} artwork={el.artwork} artist={el.artist} time={el.time} isPlaying={el.isPlaying}/>
  }) 

  return (
    <div className={`homebox ${homeboxclass}`}>
      <h5>{homeboxtitle}</h5>
      <div className="homeboxrow">
        {smallrow}
      </div>
    </div>
  )
}