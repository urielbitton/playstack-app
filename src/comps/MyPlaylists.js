import React, { useEffect, useState } from 'react'
import BoxItem from './BoxItem'
import {db} from './Fire'

export default function MyPlaylists() {
 
  const [tracklist, setTracklist] = useState([])

  const tracksrow = tracklist && tracklist.map(el => {
    return <BoxItem songinfo={el} title={el.title} subtitle={el.artist}/>
  })

  useEffect(() => {
    db.collection('music').doc('tracks').onSnapshot(snap => {
      const tracklist = snap.data().alltracks
      setTracklist(tracklist)      
    }) 
  },[])

  return (
    <div className="myplaylistspage">
     <div className="spacerl"></div>
      {tracksrow}
    </div>
  )
}