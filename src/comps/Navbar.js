import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import {AppInput} from './AppInputs'
import SearchPage from './SearchPage'
import { StoreContext } from './StoreContext'
import './styles/Navbar.css'

export default function Navbar(props) {

  const {setShowSearch, setShowSidebar} = useContext(StoreContext)
  const [showfloat, setShowFloat] = useState(false)

  function hideFloater() {
    setShowFloat(false)
  }

  useEffect(() => {
    if(showfloat) {
      window.onclick = hideFloater
    }
  },[showfloat])

  return ( 
    <nav>
      <div className="navlinks">
        <i className="fal fa-stream" onClick={() => setShowSidebar(true)}></i>
        <NavLink exact to="/" activeClassName="activenavlink">Music</NavLink>
        <NavLink exact to="/videos" activeClassName="activenavlink">Videos</NavLink>
        <NavLink exact to="/radio" activeClassName="activenavlink">Radio</NavLink>
      </div>
      <AppInput placeholder="Type to search..." iconclass="fal fa-search" onFocus={() => setShowSearch(true)}/>
      <div className="navtools">
        <i className="fal fa-sliders-v" onClick={(e) => {e.stopPropagation();setShowFloat(!showfloat)}}></i>
        <i className="fal fa-sign-out-alt"></i>
        <div className="profcont">
          <img src="https://i.imgur.com/jEyqmVM.jpg" alt=""/>
          <h6>Bjorn Torsten</h6>
          <i className="far fa-angle-down"></i>
        </div>
      </div>

      <div className="floatsettingscont" onClick={(e) => e.stopPropagation()} style={showfloat?{visibility:'visible',opacity:'1',top:'90px'}:{visibility:'hidden',opacity:'0',top:'70px'}}>
        <div className="floattitles">
          <i className="fal fa-cog"></i>
          <h5>Quick Settings</h5>
          <i className="fal fa-times" onClick={() => setShowFloat(!showfloat)}></i>
        </div>
      </div>

    </nav>
  )
}