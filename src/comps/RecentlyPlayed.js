import React, { useContext, useState } from 'react'
import MyPages from './MyPages'
import { StoreContext } from './StoreContext'
import TrackRowComp from './TrackRowComp'
import './styles/Library.css'
import BoxItem from './BoxItem'
import './styles/PlayedPages.css'

export default function MostPlayed() {
  
  const {tracks} = useContext(StoreContext)
  const [layout, setLayout] = useState('list')

  const tracksrow = tracks && tracks
    .filter(x => x.plays>25)
    .sort((a,b) => a.plays<b.plays)
    .map((el,i) => {
      if(layout==='list')
        return <TrackRowComp key={el.id} el={el} i={i} title={el.title} subtitle={el.artist} />
      else 
        return <BoxItem key={el.id} el={el} title={el.title} subtitle={el.artist} />
  })

  return (
    <MyPages className="playedpages">
      <div className={layout==='list'?"librarycont":"librarycont librarygridcont"}>
        <h4>Recently Played 
          <div className="layoutcont">
            <i className="fas fa-th" style={{color: layout==='grid'?"var(--color)":""}} onClick={() => setLayout('grid')}></i>
            <i className="far fa-grip-lines" style={{color: layout==='list'?"var(--color)":""}} onClick={() => setLayout('list')}></i>
          </div>
        </h4> 
      </div>
      { tracksrow } 
    </MyPages>
  )
}