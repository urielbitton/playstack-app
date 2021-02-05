import React, {createContext, useState} from 'react'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

  const [currentSong, setCurrentSong] = useState(
    { 
      id: 1,
      title: 'Crocodile Tears',
      alt: '(Original Mix)',
      artist: 'Kryder',
      audiosrc: 'https://www.mboxdrive.com/Kryder - Crocodile Tears (Original Mix) www.livingelectro.com.mp3',
      artwork: 'https://i.imgur.com/Yl2OuVY.png',
      category: ['trending'], 
      time: '5:31',
      isPlaying: false,
      plays: '3.4m',
      favorite: true,
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
      category: ['topcharts', 'discover'],
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
      category: ['trending','topweek'], 
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
      category: ['newreleases'],
      time: '3:29',
      isPlaying: false,
      plays: '2.3m',
      favorite: true,
    },
    {
      id: 5,
      title: 'Runaway',
      alt: '(Intro Edit)',
      artist: 'Sick Individuals',
      audiosrc: 'https://www.mboxdrive.com/Sick_Individuals⁠_&_Vigel_feat_Nazzereene_Runaway_Intro_Edit.mp3',
      artwork: 'https://i.imgur.com/dichxAF.jpg',
      category: ['topcharts', 'discover', 'topmonth','topweek'],
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
      category: ['topcharts'],
      time: '3:25',
      isPlaying: false,
      plays: '1m',
      favorite: false,
    },
    {
      id: 7,
      title: 'The Bussiness Pt. 2',
      alt: '',
      artist: 'Tiesto',
      audiosrc: 'https://www.mboxdrive.com/Tiësto - The Business, Pt. II.mp3',
      artwork: 'https://i.imgur.com/9blfuXH.jpg',
      category: ['newreleases', 'topmonth'],
      time: '2:44',
      isPlaying: false,
      plays: '2.3m',
      favorite: true
    },
    {
      id: 8,
      title: 'This Is Sick #153',
      alt: '(DJ Set)',
      artist: 'Sick Individuals',
      audiosrc: 'https://www.mboxdrive.com/Sick Individuals (DJ-set) _ SLAM!.m4a',
      artwork: 'https://i.imgur.com/nb1Q5cc.jpg',
      category: ['radiomix'],
      time: '1:14:11',
      isPlaying: false,
      favorite: true
    },
    {
      id: 9,
      title: 'Hardwell On Air 500',
      alt: '(DJ Set)',
      artist: 'Hardwell',
      audiosrc: 'https://www.mboxdrive.com/Hardwell On Air 500.m4a',
      artwork: 'https://i.imgur.com/25slv3I.jpg',
      category: ['radiomix'],
      time: '0:59:47', 
      isPlaying: false,
      favorite: false
    }, 
    {
      id: 10,
      title: 'Temperature',
      alt: '(Radio Edit)',
      artist: 'Kaaze',
      audiosrc: 'https://www.mboxdrive.com/Kaaze, Nino Lucarelli - Temperature (Radio Edit).mp3',
      artwork: 'https://i.imgur.com/5PP3r3X.jpg',
      category: ['trending','topweek'],
      time: '3:00', 
      isPlaying: false, 
      favorite: true
    },
    {
      id: 11,
      title: 'Symphony',
      alt: '(Radio Edit)',
      artist: 'Blasterjaxx',
      audiosrc: 'https://www.mboxdrive.com/BlasterJaxx, Jebroer - Symphony (Radio Edit).mp3',
      artwork: 'https://i.imgur.com/fiomI6i.jpg',
      category: ['trending','topweek'],
      time: '2:44', 
      isPlaying: false, 
      favorite: false
    },
    {
      id: 12,
      title: 'Take Me Away',
      alt: '',
      artist: 'Stonebank & Emel',
      audiosrc: 'https://www.mboxdrive.com/Stonebank, Emel - Take Me Away (Radio Mix).mp3',
      artwork: 'https://i.imgur.com/tsbO844.jpg',
      category: ['trending','topcharts'],
      time: '2:44', 
      isPlaying: false,  
      favorite: false
    },
    
  ])
  const [artists, setArtists] = useState([
    {
      name: 'Sick Individuals',
      favorite: true,
      artwork: 'https://i.imgur.com/Ri4bgex.jpg',
      genres: ['Pop','Bigroom']
    },
    {
      name: 'KAAZE',
      favorite: true,
      artwork: 'https://i.imgur.com/LFsoQBu.jpg',
      genres: ['Pop','Bigroom']
    },
    {
      name: 'Axwell',
      favorite: true,
      artwork: 'https://i.imgur.com/40XK545.jpg',
      genres: ['Progressive','Pop','Bigroom','House']
    }
  ])
  const [showSearch, setShowSearch] = useState(false)


  return (
    <StoreContext.Provider value={{currentSong, setCurrentSong, discover, setDiscover, tracks, setTracks, showSearch, setShowSearch, artists, setArtists}}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider