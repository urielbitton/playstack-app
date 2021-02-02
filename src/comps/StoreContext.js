import React, {createContext, useState} from 'react'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

  const [currentSong, setCurrentSong] = useState(
    {
      id: 1,
      title: 'Neon Hearts',
      alt: '(Extended Mix)',
      artist: 'Darren Styles',
      audiosrc: 'https://www.mboxdrive.com/Darren Styles feat. Pollyanna - Neon Hearts (Extended Mix) Happy Hardcore Music.mp3',
      artwork: 'https://i.imgur.com/YOdngQn.jpg',
      isPlaying: false
    }
  )
  const [discover, setDiscover] = useState([
    {
      id: 5,
      title: 'Runaway',
      alt: '(Intro Edit)',
      artist: 'Sick Individuals',
      audiosrc: 'https://www.mboxdrive.com/Sick_Individuals⁠_&_Vigel_feat_Nazzereene_Runaway_Intro_Edit.mp3',
      artwork: 'https://i.imgur.com/dichxAF.jpg',
      category: 'topcharts discover',
      time: '3:18',
      isPlaying: false,
      plays: '4.1m',
      favorite: true,
      textTitle: 'Hot new tracks this week',
      textSubtitle: 'Discover'
    }
  ])
  const [tracks, setTracks] = useState([
    {
      id: 1,
      title: 'Crocodile Tears',
      alt: '(Original Mix)',
      artist: 'Kryder',
      audiosrc: 'https://www.mboxdrive.com/Kryder - Crocodile Tears (Original Mix) www.livingelectro.com.mp3',
      artwork: 'https://i.imgur.com/Yl2OuVY.png',
      category: ['trending'], 
      time: '3:45',
      isPlaying: false,
      plays: '3.4m',
      favorite: true,
    },
    { 
      id: 2,
      title: 'Neon Hearts',
      alt: '(Extended Mix)',
      artist: 'Darren Styles',
      audiosrc: 'https://www.mboxdrive.com/Darren Styles feat. Pollyanna - Neon Hearts (Extended Mix) Happy Hardcore Music.mp3',
      artwork: 'https://i.imgur.com/YOdngQn.jpg',
      category: ['trending', 'newreleases'],
      time: '4:55',
      isPlaying: false,
      plays: '1.2m',
      favorite: true,
    },
    {
      id: 3,
      title: 'Show Me Your Love',
      alt: "",
      artist: 'Bassjackers',
      audiosrc: 'https://www.mboxdrive.com/Bassjackers - Show Me Your Love (Radio Edit).mp3',
      artwork: 'https://i.imgur.com/tDePPVX.jpg',
      category: ['newreleases'],
      time: '3:15',
      isPlaying: false,
      plays: '550k',
      favorite: false,
    },
    {
      id: 4,
      title: 'No Rest',
      alt: '(Radio Edit)',
      artist: 'Vicetone',
      audiosrc: 'https://www.mboxdrive.com/Vicetone - No Rest (Radio Edit).mp3',
      artwork: 'https://i.imgur.com/BgvkoTz.jpg',
      category: 'topcharts',
      time: '3:29',
      isPlaying: false,
      plays: '2.3m',
      favorite: false,
    },
    {
      id: 5,
      title: 'Runaway',
      alt: '(Intro Edit)',
      artist: 'Sick Individuals',
      audiosrc: 'https://www.mboxdrive.com/Sick_Individuals⁠_&_Vigel_feat_Nazzereene_Runaway_Intro_Edit.mp3',
      artwork: 'https://i.imgur.com/dichxAF.jpg',
      category: 'topcharts discover',
      time: '3:18',
      isPlaying: false,
      plays: '4.1m',
      favorite: true,
    },
    {
      id: 6,
      title: 'Devil In My Arms',
      alt: '(Extended Mix)',
      artist: 'Coone, Da Tweekaz & Hard Driver',
      audiosrc: 'https://www.mboxdrive.com/Coone,%20Da%20Tweekaz%20and%20Hard%20Driver%20%20(The%20Elite)%20%E2%80%93%20Devil%20In%20My%20Arms%20(Extended%20Mix).mp3',
      artwork: 'https://i.imgur.com/6uOcOnY.jpg',
      category: 'topcharts',
      time: '3:25',
      isPlaying: false,
      plays: '1m',
      favorite: false,
    }
  ])



  return (
    <StoreContext.Provider value={{currentSong, setCurrentSong, discover, setDiscover, tracks, setTracks}}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider