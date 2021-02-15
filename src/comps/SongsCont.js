import React, { useContext } from 'react'
import BoxItem from './BoxItem'
import SongRow from './SongRow'
import SongLargeBox from './SongLargeBox'
import {StoreContext} from './StoreContext'
import './styles/SongsCont.css'

export function BigRow(props) {

  const {tracks} = useContext(StoreContext)
  const {homeboxclass, homeboxtitle, songsfilter} = props

  const bigrow = tracks && tracks
    .filter(x => x.category.includes(songsfilter))
    .map(el => {
      return <SongLargeBox key={el.id} songinfo={el} />
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
  const {homeboxclass, homeboxtitle, songsfilter, listview} = props

  const mediumrow = tracks && tracks
    .filter(x => x.category.includes(songsfilter))
    .map(el => {
      return <BoxItem key={el.id} songinfo={el} title={el.title} subtitle={el.artist} />
  })

  return (
    <div className={`homebox ${homeboxclass}`}>
      <h5>
        {homeboxtitle}
        <small>{tracks.filter(x => x.category.includes(songsfilter)).length} tracks</small>
      </h5>
      <div className="homeboxrow">
        {mediumrow}
      </div>
    </div> 
  )
}

export function SmallRow(props) {

  const {tracks} = useContext(StoreContext)
  const {homeboxclass, homeboxtitle, songsfilter} = props

  const smallrow = tracks && tracks
    .filter(x => x.category.includes(songsfilter))
    .map((el,i) => {
    return <SongRow key={el.id} songinfo={el} count={i+1} />
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