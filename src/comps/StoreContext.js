import React, {createContext, useState} from 'react'

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
  const [tracks, setTracks] = useState([
    {
      id: 1,
      title: 'Crocodile Tears',
      alt: '(Original Mix)',
      artist: 'Kryder',
      genre: ['Progressive'],
      audiosrc: 'https://www.mboxdrive.com/Kryder - Crocodile Tears (Original Mix) www.livingelectro.com.mp3',
      artwork: 'https://i.imgur.com/Yl2OuVY.png',
      category: ['trending','topweek'], 
      time: '3:45',
      isPlaying: false,
      plays: '3.4m',
      favorite: true,
      mylibrary: true,
    },
    { 
      id: 2,
      title: 'Neon Hearts',
      alt: '(Extended Mix)',
      artist: 'Darren Styles',
      genre: ['Happy Hardcore'],
      audiosrc: 'https://www.mboxdrive.com/Darren Styles feat. Pollyanna - Neon Hearts (Extended Mix) Happy Hardcore Music.mp3',
      artwork: 'https://i.imgur.com/YOdngQn.jpg',
      category: ['trending', 'newreleases'],
      time: '4:55',
      isPlaying: false,
      plays: '1.2m',
      favorite: true,
      mylibrary: true,
    }, 
    {
      id: 3,
      title: 'Show Me Your Love',
      alt: "",
      artist: 'Bassjackers',
      genre: ['Bigroom'],
      audiosrc: 'https://www.mboxdrive.com/Bassjackers - Show Me Your Love (Radio Edit).mp3',
      artwork: 'https://i.imgur.com/tDePPVX.jpg',
      category: ['newreleases'],
      time: '3:15',
      isPlaying: false,
      plays: '550k',
      favorite: false,
      mylibrary: false,
    },
    {
      id: 4,
      title: 'No Rest',
      alt: '(Radio Edit)',
      artist: 'Vicetone',
      genre: ['Pop'],
      audiosrc: 'https://www.mboxdrive.com/Vicetone - No Rest (Radio Edit).mp3',
      artwork: 'https://i.imgur.com/BgvkoTz.jpg',
      category: ['newreleases'],
      time: '3:29',
      isPlaying: false,
      plays: '2.3m',
      favorite: true,
      mylibrary: false,
    },
    {
      id: 5,
      title: 'Runaway',
      alt: '(Intro Edit)',
      artist: 'Sick Individuals',
      genre: ['Bigroom'],
      audiosrc: 'https://www.mboxdrive.com/Sick_Individuals⁠_&_Vigel_feat_Nazzereene_Runaway_Intro_Edit.mp3',
      artwork: 'https://i.imgur.com/dichxAF.jpg',
      category: ['topcharts', 'discover', 'topmonth','topweek'],
      time: '3:18',
      isPlaying: false,
      plays: '4.1m',
      favorite: true,
      mylibrary: true,
    },
    {
      id: 6,
      title: 'Devil In My Arms',
      alt: '(Extended Mix)',
      genre: ['Harstyle'],
      artist: 'Coone, Da Tweekaz & Hard Driver',
      audiosrc: 'https://www.mboxdrive.com/Coone,%20Da%20Tweekaz%20and%20Hard%20Driver%20%20(The%20Elite)%20%E2%80%93%20Devil%20In%20My%20Arms%20(Extended%20Mix).mp3',
      artwork: 'https://i.imgur.com/6uOcOnY.jpg',
      category: ['topcharts'],
      time: '3:25',
      isPlaying: false,
      plays: '1m',
      favorite: false,
      mylibrary: true,
    },
    {
      id: 7,
      title: 'The Bussiness Pt. 2',
      alt: '',
      artist: 'Tiesto',
      genre: ['Bass House'],
      audiosrc: 'https://www.mboxdrive.com/Tiësto - The Business, Pt. II.mp3',
      artwork: 'https://i.imgur.com/9blfuXH.jpg',
      category: ['newreleases', 'topmonth'],
      time: '2:44',
      isPlaying: false,
      plays: '2.3m',
      favorite: true,
      mylibrary: true,
    },
    {
      id: 8,
      title: 'This Is Sick #153',
      alt: '(DJ Set)',
      artist: 'Sick Individuals',
      genre: ['Bigroom'],
      audiosrc: 'https://www.mboxdrive.com/Sick Individuals (DJ-set) _ SLAM!.m4a',
      artwork: 'https://i.imgur.com/nb1Q5cc.jpg',
      category: ['radiomix'],
      time: '1:14:11',
      isPlaying: false,
      favorite: false,
      mylibrary: true,
    },
    {
      id: 9,
      title: 'Hardwell On Air 500',
      alt: '(DJ Set)',
      artist: 'Hardwell',
      genre: ['Bigroom'],
      audiosrc: 'https://www.mboxdrive.com/Hardwell On Air 500.m4a',
      artwork: 'https://i.imgur.com/25slv3I.jpg',
      category: ['radiomix'],
      time: '0:59:47', 
      isPlaying: false,
      favorite: false,
      mylibrary: true,
    }, 
    {
      id: 10,
      title: 'Temperature',
      alt: '(Radio Edit)',
      artist: 'Kaaze',
      genre: ['Bigroom'],
      audiosrc: 'https://www.mboxdrive.com/Kaaze, Nino Lucarelli - Temperature (Radio Edit).mp3',
      artwork: 'https://i.imgur.com/5PP3r3X.jpg',
      category: ['trending','topweek'],
      time: '3:00', 
      isPlaying: false, 
      favorite: true,
      mylibrary: true,
    },
    {
      id: 11,
      title: 'Symphony',
      alt: '(Radio Edit)',
      artist: 'Blasterjaxx',
      genre: ['Bigroom'],
      audiosrc: 'https://www.mboxdrive.com/BlasterJaxx, Jebroer - Symphony (Radio Edit).mp3',
      artwork: 'https://i.imgur.com/fiomI6i.jpg',
      category: ['trending','topweek'],
      time: '2:44', 
      isPlaying: false, 
      favorite: false,
      mylibrary: false,
    }, 
    {
      id: 12,
      title: 'Take Me Away',
      alt: '',
      artist: 'Stonebank & Emel',
      genre: ['Break House'],
      audiosrc: 'https://www.mboxdrive.com/Stonebank, Emel - Take Me Away (Radio Mix).mp3',
      artwork: 'https://i.imgur.com/tsbO844.jpg',
      category: ['trending','topcharts'],
      time: '2:44', 
      isPlaying: false,  
      favorite: false,
      mylibrary: true,
    },
    {
      id: 13,
      title: 'Lost Yourself',
      alt: '(Radio Edit)',
      artist: 'Stvns & Robbie Rosen',
      genre: ['Progressive'],
      audiosrc: 'https://www.mboxdrive.com/Stvns, Kevin Krissen, Robbie Rosen - Lost Yourself (Radio Edit).mp3',
      artwork: 'https://i.imgur.com/NPRKu0N.jpg',
      category: ['trending','topcharts'],
      time: '3:00', 
      isPlaying: false,  
      favorite: false,
      mylibrary: true, 
    },
  ])
  const [artists, setArtists] = useState([
    {
      id: 1,
      name: 'Sick Individuals',
      favorite: true,
      artwork: 'https://i.imgur.com/v9bsWkQ.jpg',
      genres: ['Pop','Bigroom'],
      labels: ['Revealed','Newmade'],
      descript: `Sick Individuals is a Dutch electronic dance music act consisting of Rinze 'Ray' Hofstee and Joep 'Jim' Smeele. `
    },
    {
      id: 2,
      name: 'KAAZE',
      favorite: true,
      artwork: 'https://i.imgur.com/GQiGH6h.jpg',
      genres: ['Pop','Bigroom'],
      labels: ['Revealed'],
      descript: `Mick Kastenholt, also known by his stage name, Kaaze is a Swedish electronic dance music producer, DJ, and songwriter.`
    },
    {
      id: 3,
      name: 'Axwell',
      favorite: true,
      artwork: 'https://i.imgur.com/mccvHVO.jpg',
      genres: ['Progressive','Pop','Bigroom','House'],
      labels: ['Axtone','Capitol'],
      descript: `Axel Christofer Hedfors (born 18 December 1977), better known by his stage name Axwell, is a Swedish DJ, record producer, remixer and owner of Axtone Records`
    },
    {
      id: 4,
      name: 'KSHMR',
      favorite: false,
      artwork: 'https://i.imgur.com/edEl4JG.jpg',
      genres: ['Dharma','Spinnin Records'],
      descript: `Niles Hollowell-Dhar (born October 6, 1988), better known by his stage name Kshmr, is an American musician,record producer and DJ of Indian heritage. `
    },
    {
      id: 5,
      name: 'DubVision',
      favorite: false,
      artwork: 'https://i.imgur.com/tMBXhsr.jpg',
      genres: ['Deep House','Progressive','Bigroom'],
      labels: ['Spinnin Records','Armada','STMD RCRDS'],
      descript: `DubVision is a Dutch DJ duo consisting of brothers Victor Leicher (born 1989) and Stephan Leicher (born 1981) signed to the labels Spinnin' Records, Armada Music and Axtone.`
    },
    {
      id: 5,
      name: 'Darren Styles',
      favorite: true, 
      artwork: 'https://i.imgur.com/ypu6eJH.jpg',
      genres: ['Happy Harcore','Hardstyle','Breaks'],
      labels: ['Monstercat','Electric Fox','Rave Culture'],
      descript: `Darren James Mew (born 23 May 1975), better known as Darren Styles, is an English record producer, DJ, singer and songwriter from Colchester, England`
    }
  ])
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


  return (
    <StoreContext.Provider value={{currentSong, setCurrentSong, discover, setDiscover, tracks, setTracks, showSearch, setShowSearch, artists, setArtists, genres, setGenres, labels, setLabels, podcasts, setPodcasts, showsidebar, setShowSidebar}}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider