import React, { useContext, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import AppPage from './AppPage'
import Home from './Home'
import Library from './Library'
import Navbar from './Navbar'
import SearchPage from './SearchPage'
import { StoreContext } from './StoreContext'
import './styles/Homecont.css'

export default function Homecont() {

  const {artists, genres, labels, podcasts} = useContext(StoreContext)

  return (
    <div className="homecont">
      <Navbar />
      <SearchPage /> 
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/artists">
          <AppPage page={artists} pagename="artists" textTitle="Trending and popular artists"/>
        </Route>
        <Route exact path="/genres">
          <AppPage page={genres} pagename="genres" textTitle="The most listened to genres"/> 
        </Route>
        <Route exact path="/labels">
          <AppPage page={labels} pagename="labels" textTitle="The hottest labels of today"/>
        </Route>
        <Route exact path="/podcasts">
          <AppPage page={podcasts} pagename="podcasts" textTitle="Hear the latest podcasts"/>
        </Route>
        <Route path="/library">
          <Library />
        </Route>
      </Switch>
    </div>
  )
}