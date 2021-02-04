import React, { useContext } from 'react'
import SongBox from './SongBox'
import SongRow from './SongRow'
import SongLargeBox from './SongLargeBox'
import {StoreContext} from './StoreContext'
import './styles/SongsCont.css'

export function BigRow(props) {

  const {tracks} = useContext(StoreContext)
  const {homeboxclass, homeboxtitle, songsfilter} = props

  const bigrow = tracks && tracks.map(el => {
    if(el.category.includes(songsfilter))
    return <SongLargeBox key={el.id} el={el} />
  })
 
  return (
    <div className={`homebox ${homeboxclass}`}>
      <h5>{homeboxtitle}</h5>
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

  const smallrow = tracks && tracks.map(el => {
    if(el.category.includes(songsfilter))
    return <SongRow key={el.id} el={el} />
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