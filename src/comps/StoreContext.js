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
      isPlaying: false
    }
  )
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
      isPlaying: false
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
      isPlaying: false
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
      isPlaying: false
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
      isPlaying: false
    }
  ])


  return (
    <StoreContext.Provider value={{currentSong, setCurrentSong, tracks, setTracks}}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider