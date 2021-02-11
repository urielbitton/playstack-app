import React, {createContext, useEffect, useState} from 'react'
import {db} from './Fire'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

  const [currentSong, setCurrentSong] = useState(
    { 
      id: 1,
      title: 'Crocodile Tears',
      alt: '(Original Mix)',
      artist: 'Kryder', 
      genre: ['Progressive'],
      audiosrc: 'https://www.mboxdrive.com/Kryder - Crocodile Tears (Original Mix) www.livingelectro.com.mp3',
      artwork: 'https://i.imgur.com/Yl2OuVY.png',
      category: ['trending'], 
      time: '5:31',
      isPlaying: false,
      plays: '3.4m',
      favorite: true,
      mylibrary: true,
    }
  )
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
      mylibrary: true,
    }
  ])

  const [tracks, setTracks] = useState([])
  const [artists, setArtists] = useState([])
  const [genres, setGenres] = useState([
    {
      id: 1,
      name: 'Bigroom',
      artwork: 'https://i.imgur.com/PT5awKy.jpg'
    },
    {
      id: 2,
      name: 'Progressive',
      artwork: 'https://i.imgur.com/EB1zqgA.jpg'
    },
    {
      id: 3,
      name: 'Deep House',
      artwork: 'https://i.imgur.com/aVCpB5u.jpg'
    },
    {
      id: 4,
      name: 'Pop',
      artwork: 'https://i.imgur.com/YwhDmHw.jpg'
    },
    {
      id: 5,
      name: 'Happy Hardcore',
      artwork: 'https://i.imgur.com/N3LRUDB.jpg'
    },
    {
      id: 6,
      name: 'Bass House',
      artwork: 'https://i.imgur.com/F3aKPq9.jpg'
    }
  ])
  const [labels, setLabels] = useState([
    {
      id: 1,
      name: 'Axtone',
      genres: ['Bigroom','Progressive','Bass House'],
      artwork: 'https://i.imgur.com/vx6iypW.png',
      owner: 'Axwell',
      descript: `Axtone Records is the label of Swedish DJ/Producer, Axwell. Started in 2005, Axtone now signs and releases music from all across the globe.`
    },
    {
      id: 2,
      name: 'Monstercat',
      genres: ['Happy Hardcore','Progressive','Bigroom'],
      artwork: 'https://i.imgur.com/CXwgN1w.png',
      owner: 'Mike Darlington',
      descript: `Monstercat (formerly known as Monstercat Media) is a Canadian independent electronic music record label based in Vancouver, British Columbia.`
    },
    {
      id: 3,
      name: 'Revealed',
      genres: ['Bigroom','Progressive','Hardstyle'],
      artwork: 'https://i.imgur.com/StwC1pG.png',
      owner: 'Hardwell',
      descript: `Revealed Recordings is a Dutch record label established by Hardwell in 2010. The label is headquartered in Breda, Netherlands.`
    },
    {
      id: 4,
      name: 'Maxximize',
      genres: ['Bigroom','Progressive','Hardstyle'],
      artwork: 'https://i.imgur.com/CxaylJW.jpg',
      owner: 'Blasterjaxx',
      descript: `Maxximize Records is the newest power move by Dutch EDM fan favourites Blasterjaxx. Expect a range as diverse as a Blasterjaxx set.`
    }
  ])
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
  const [showSearch, setShowSearch] = useState(false)
  const [showsidebar, setShowSidebar] = useState(true)

  useEffect(() => {
    db.collection('music').doc('tracks').onSnapshot(snap => {
      const tracklist = snap.data().alltracks
      setTracks(tracklist)
    })
    db.collection('music').doc('artists').onSnapshot(snap => {
      const artistlist = snap.data().allartists
      setArtists(artistlist) 
    })
  },[])

  return (
    <StoreContext.Provider value={{currentSong, setCurrentSong, discover, setDiscover, tracks, setTracks,
     showSearch, setShowSearch, artists, setArtists, genres, setGenres, labels, setLabels, 
     podcasts, setPodcasts, showsidebar, setShowSidebar}}>
      {props.children}
    </StoreContext.Provider>
  )

} 

export default StoreContextProvider