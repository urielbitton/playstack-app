import React, { useContext } from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import {AppInput} from './AppInputs'
import SearchPage from './SearchPage'
import { StoreContext } from './StoreContext'
import './styles/Navbar.css'

export default function Navbar(props) {

  const {setShowSearch} = useContext(StoreContext)

  return (
    <nav>
      <div className="navlinks">
        <NavLink exact to="/" activeClassName="activenavlink">Music</NavLink>
        <NavLink exact to="/videos" activeClassName="activenavlink">Videos</NavLink>
        <NavLink exact to="/radio" activeClassName="activenavlink">Radio</NavLink>
      </div>
      <AppInput placeholder="Type to search..." iconclass="fal fa-search" onFocus={() => setShowSearch(true)}/>
      <div className="navtools">
        <i className="fal fa-sliders-v"></i>
        <i className="fal fa-sign-out-alt"></i>
        <div className="profcont">
          <img src="https://i.imgur.com/jEyqmVM.jpg" alt=""/>
          <h6>Bjorn Torsten</h6>
          <i className="far fa-angle-down"></i>
        </div>
      </div>
    </nav>
  )
}