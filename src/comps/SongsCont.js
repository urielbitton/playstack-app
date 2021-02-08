import React, { useContext } from 'react'
import BoxItem from './BoxItem'
import SongRow from './SongRow'
import SongLargeBox from './SongLargeBox'
import {StoreContext} from './StoreContext'
import './styles/SongsCont.css'

export function BigRow(props) {

  const {tracks} = useContext(StoreContext)
  const {homeboxclass, homeboxtitle, songsfilter} = props

  const bigrow = tracks && tracks.map(el => {
    if(el.category.includes(songsfilter))
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
  const {homeboxclass, homeboxtitle, songsfilter, customfilter, viewall} = props

  const mediumrow = tracks && tracks.map(el => {
    if(el.category.includes(songsfilter) || (customfilter==='mylibrary'?el.mylibrary:false) || (customfilter==='myfavorites'?el.favorite:false))
      return <BoxItem key={el.id} songinfo={el} title={el.title} subtitle={el.artist} />
  })

  return (
    <div className={`homebox ${homeboxclass}`}>
      <h5>{homeboxtitle}<small style={{display: viewall?"block":"none"}}>View All</small></h5>
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
    return <SongRow key={el.id} songinfo={el} />
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