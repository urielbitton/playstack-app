import React, { useContext, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import Create from './Create'
import AppPage from './AppPage'
import Home from './Home'
import MyPages from './MyPages'
import Navbar from './Navbar'
import SearchPage from './SearchPage'
import OneAppPage from './OneAppPage'
import { StoreContext } from './StoreContext'
import './styles/Homecont.css'
import MyPlaylists from './MyPlaylists'
import { AddArtist, AddLabel, AddSong } from './AddItem'

export default function Homecont() {

  const {artists, genres, labels, podcasts, showAdd} = useContext(StoreContext)

  const artistAppPage = artists && artists.map(el => {
    return <Route path={`/artists/${el.name.toLowerCase().replaceAll(' ','')}`}>
      <OneAppPage pageurl="artists" key={el.id} songinfo={el} textTitle={el.name} descript={el.descript} genres={el.genres} labels={el.labels}/>
    </Route>
  })
  const genresAppPage = genres && genres.map(el => {
    return <Route path={`/genres/${el.name.toLowerCase().replaceAll(' ','')}`}>
      <OneAppPage key={el.id} songinfo={el} textTitle={el.name} descript={el.descript} />
    </Route>
  })
  const labelsAppPage = labels && labels.map(el => {
    return <Route path={`/labels/${el.name.toLowerCase().replaceAll(' ','')}`}>
      <OneAppPage key={el.id} songinfo={el} textTitle={el.name} descript={el.descript} genres={el.genres} />
    </Route>
  })

  return (
    <div className="homecont">
      <Navbar />
      <SearchPage /> 
      <AddSong />
      <AddArtist />
      <AddLabel />
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
          <MyPages pagename="Music Library" songsfilter="mylibrary"/>
        </Route>
        <Route path="/favorites">
          <MyPages pagename="My Favorites" />
        </Route>
        <Route path="/myplaylists">
          <MyPlaylists />
        </Route>
        {artistAppPage}
        {genresAppPage}
        {labelsAppPage} 
      </Switch>
    </div>
  )
}