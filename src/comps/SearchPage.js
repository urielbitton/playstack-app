import React, { useContext, useEffect, useState, useRef } from 'react'
import {AppInput} from './AppInputs' 
import { StoreContext } from './StoreContext'
import BoxItem from './BoxItem'
import './styles/SearchPage.css'

export default function SearchPage(props) {

  const {showSearch, setShowSearch, tracks} = useContext(StoreContext)
  const [keyword, setKeyword] = useState('zzz') 
  const pattern = new RegExp('\\b' + keyword.replace(/[\W_]+/g,""), 'i')
  const inpRef = useRef()

  const searchresults = tracks && tracks.sort((a, b) => String(a.title).localeCompare(b.title)).map(el => {
    if((pattern && pattern.test(el.title.toLowerCase())) || pattern.test(el.artist.toLowerCase()) || pattern === '')
    return <BoxItem songinfo={el} key={el.id} title={el.title} subtitle={el.artist}/>
  })

  useEffect(() => { 
    inpRef.current.focus()
  },[showSearch])

  return (
    <div className="searchpage" style={{display: showSearch?"block":"none"}}>
      <i className="fal fa-times" onClick={() => setShowSearch(false)}></i>
      <div className="searchpageflex">
        <AppInput 
          inpRef={inpRef} 
          placeholder="Search a song, artist or genre..." 
          onChange={(e) => setKeyword(e.target.value)}
          
        />
        <div className="searchpagegrid">
          {searchresults}
        </div>
      </div>
    </div>
  )
} 