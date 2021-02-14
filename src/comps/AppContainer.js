import React, {useContext, useEffect, useWindowSize} from 'react'
import Homecont from './Homecont'
import MainPlayer from './MainPlayer'
import Sidebar from './Sidebar'
import { StoreContext } from './StoreContext'
import './styles/AppContainer.css'

export default function AppContainer() {

  const {setShowSidebar} = useContext(StoreContext)

  useEffect(() => {
    if(window.innerWidth < 900) {
      setShowSidebar(false)
    }
    else if(window.innerWidth >= 900) {
      setShowSidebar(true)
    }  
  },[]) 

  return (
    <div className="appcontainer">
      <Sidebar />
      <Homecont />
      <MainPlayer />
    </div>
  )
}
