import React, { useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import Artists from './Artists'
import Home from './Home'
import Navbar from './Navbar'
import SearchPage from './SearchPage'
import './styles/Homecont.css'

export default function Homecont() {

  return (
    <div className="homecont">
      <Navbar />
      <SearchPage /> 
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/artists">
          <Artists />
        </Route>
      </Switch>
    </div>
  )
}