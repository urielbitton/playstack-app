import React, {createContext, useEffect, useState} from 'react'
import {db} from './Fire'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

  const [currentSong, setCurrentSong] = useState({})
  const [discover, setDiscover] = useState([
    {
      id: 5,
      title: 'Runaway',
      alt: '(Intro Edit)',
      artist: 'Sick Individuals',
      genre: ['Bigroom'],
      audiosrc: 'https://www.mboxdrive.com/Sick_Individuals⁠_&_Vigel_feat_Nazzereene_Runaway_Intro_Edit.mp3',
      artwork: 'https://i.imgur.com/dichxAF.jpg',
      category: ['topcharts', 'discover'],
      time: '3:18',
      isPlaying: false,
      plays: '4.1m',
      favorite: true,
      textTitle: 'Hot new tracks this week',
      textSubtitle: 'Discover',
    }
  ])

  const [tracks, setTracks] = useState([])
  const [artists, setArtists] = useState([])
  const [genres, setGenres] = useState([])
  const [labels, setLabels] = useState([])
  const [podcasts, setPodcasts] = useState([
    {
      id: 8,
      name: 'This Is Sick #153',
      alt: '(DJ Set)',
      artist: 'Sick Individuals',
      genre: ['Bigroom'],
      audiosrc: 'https://www.mboxdrive.com/Sick Individuals (DJ-set) _ SLAM!.m4a',
      artwork: 'https://i.imgur.com/nb1Q5cc.jpg',
      category: ['radiomix'],
      time: '1:14:11',
      isPlaying: false,
      favorite: true
    },
    {
      id: 9,
      name: 'Hardwell On Air 500',
      alt: '(DJ Set)',
      artist: 'Hardwell',
      genre: ['Bigroom'],
      audiosrc: 'https://www.mboxdrive.com/Hardwell On Air 500.m4a',
      artwork: 'https://i.imgur.com/25slv3I.jpg',
      category: ['radiomix'],
      time: '0:59:47', 
      isPlaying: false,
      favorite: false
    },
  ])
  const [playlists, setPlaylists] = useState([])

  const [showSearch, setShowSearch] = useState(false)
  const [showsidebar, setShowSidebar] = useState(true)
  const [showAdd, setShowAdd] = useState(0)
  const [charts, setCharts] = useState([
    {name:'Top Charts'}, 
    {name:'New Releases'},
    {name:'Trending'},
    {name:'Top Week'},
    {name:'Top Month'} 
  ])
  const [editData, setEditData] = useState({}) 
  const [loaded, setLoaded] = useState(false)
  const [tracksarr, setTracksArr] = useState([])

  useEffect(() => { 
    let flag = true
    db.collection('music').doc('tracks').onSnapshot(snap => {
      setTracks(snap.data().alltracks)
    })
    db.collection('music').doc('artists').onSnapshot(snap => {
      setArtists(snap.data().allartists) 
    })
    db.collection('music').doc('labels').onSnapshot(snap => {
      setLabels(snap.data().alllabels) 
    })
    db.collection('music').doc('genres').onSnapshot(snap => {
      setGenres(snap.data().allgenres) 
    })
    db.collection('music').doc('currentsong').onSnapshot(snap => {
      setCurrentSong(snap.data())
      if(flag) {
        document.querySelector('.rhap_container audio').pause() 
        flag = false    
      } 
    }) 
    db.collection('music').doc('playlists').onSnapshot(snap => {
      setPlaylists(snap.data().allplaylists)
    })
  },[])  

  return (
    <StoreContext.Provider value={{currentSong, setCurrentSong, discover, setDiscover, tracks, setTracks,
     showSearch, setShowSearch, artists, setArtists, genres, setGenres, labels, setLabels, 
     podcasts, setPodcasts, showsidebar, setShowSidebar, charts, setCharts, showAdd, setShowAdd,
     editData, setEditData, loaded, setLoaded, tracksarr, setTracksArr, playlists, setPlaylists}}>
      {props.children}
    </StoreContext.Provider>
  )

} 

export default StoreContextProvider