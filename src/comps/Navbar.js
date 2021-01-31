import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import {Inputs} from './AppInputs'

export default function Navbar() {
  return (
    <nav>
      <div className="navlinks">
        <NavLink exact to="/" activeClassName="activenavlink">Music</NavLink>
        <NavLink exact to="/videos" activeClassName="activenavlink">Videos</NavLink>
        <NavLink exact to="/radio" activeClassName="activenavlink">Radio</NavLink>
      </div>
      <Inputs placeholder="Type to search..." iconclass="fal fa-search"/>
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