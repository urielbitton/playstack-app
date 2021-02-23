import React, { useContext, useState } from 'react'
import MyPages from './MyPages'
import { StoreContext } from './StoreContext'
import TrackRow from './TrackRow'
import TrackRowComp from './TrackRowComp'
import './styles/Library.css'
import TrackHeader from './TrackHeader'
import BoxItem from './BoxItem'

export default function Library() {
  
  const {tracks} = useContext(StoreContext)
  const [layout, setLayout] = useState('list')
  const [rowsort, setRowSort] = useState({text:'Title',asc:true})

  const boxrow = tracks && tracks.map(el => {
    return <BoxItem key={el.id} songinfo={el} title={el.title} subtitle={el.artist} />
  })

  return (
    <MyPages>
      <div className={layout==='list'?"librarycont":"librarycont librarygridcont"}>
        <h4>My Library 
          <div className="layoutcont">
            <i className="fas fa-th" style={{color: layout==='grid'?"var(--color)":""}} onClick={() => setLayout('grid')}></i>
            <i className="far fa-grip-lines" style={{color: layout==='list'?"var(--color)":""}} onClick={() => setLayout('list')}></i>
          </div>
        </h4>
        <TrackHeader headerslist={[{title:'#',flexbasis:10},{title:'Title'},{title:'Artist'},{title:'Label'},{title:'Genre'},{title:'Time',flexbasis:3},{title:'Plays',flexbasis:3},{title:'Options', flexbasis:3}]} style={{display: layout==='grid'?'none':'flex'}} sortTracks={({text,asc}) => setRowSort({text,asc})} active={rowsort.text} arrow={rowsort.asc}/>
        {
          layout==='list'?
            tracks && tracks 
              .sort((a,b) => {
                if(rowsort.text==='Title') return rowsort.asc?a.title.localeCompare(b.title):b.title.localeCompare(a.title)
                if(rowsort.text==='Artist') return rowsort.asc?a.artist.localeCompare(b.artist):b.artist.localeCompare(a.artist)
                if(rowsort.text==='Label') return rowsort.asc?a.label.localeCompare(b.label):b.label.localeCompare(a.label)
                if(rowsort.text==='Genre') return rowsort.asc?a.genre.localeCompare(b.genre):b.genre.localeCompare(a.genre)
                if(rowsort.text==='Time') return rowsort.asc?parseInt(a.time.replace(':',''),10)-parseInt(b.time.replace(':',''),10):parseInt(b.time.replace(':',''),10)-parseInt(a.time.replace(':',''),10)
                if(rowsort.text==='Plays') return rowsort.asc?a.plays-b.plays:b.plays-a.plays
                if(rowsort.text==='#') return a.title.localeCompare(b.title)
              })
              .map((el,i) => {
                return <TrackRowComp el={el} i={i}/>
            })
            :boxrow
        }
      </div>
    </MyPages>
  )
}