import React, {createContext, useState} from 'react'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

  const [currentSong, setCurrentSong] = useState(
    {
      id: 1,
      title: 'Neon Hearts (Extended Mix)',
      artist: 'Darren Styles',
      src: 'https://www.mboxdrive.com/Darren Styles feat. Pollyanna - Neon Hearts (Extended Mix) Happy Hardcore Music.mp3',
    }
  )


  return (
    <StoreContext.Provider value={{currentSong, setCurrentSong}}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider