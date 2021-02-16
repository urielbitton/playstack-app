import React, {useContext, useEffect, useState} from 'react'
import Homecont from './Homecont'
import MainPlayer from './MainPlayer'
import Sidebar from './Sidebar'
import { StoreContext } from './StoreContext'
import LoadScreen from './LoadScreen'
import './styles/AppContainer.css'
import {db} from './Fire'

export default function AppContainer() {

  const {setShowSidebar, setLoaded} = useContext(StoreContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(window.innerWidth < 900) {
      setShowSidebar(false)
    }
    else if(window.innerWidth >= 900) {
      setShowSidebar(true)
    }  
    db.collection('music').doc().onSnapshot(snap => {
      if(snap.data() !== null || snap.data() !== undefined)
        setLoading(false)
        setTimeout(() => {setLoaded(true)}, 50); 
    })
  },[])  

  return (
    <div className="appcontainer">
      {
        loading?<LoadScreen />:
        <>
          <Sidebar />
          <Homecont />
          <MainPlayer />
        </>
      }
    </div>
  )
}
