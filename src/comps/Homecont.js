import React, { useContext } from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import AppPage from './AppPage'
import Home from './Home'
import MyPages from './MyPages'
import Navbar from './Navbar'
import OneAppPage from './OneAppPage'
import { StoreContext } from './StoreContext'
import './styles/Homecont.css'
import MyPlaylists from './MyPlaylists'
import Modals from './Modals'
import {MediumRow} from './SongsCont'
import BoxItem from './BoxItem'
import ArtistsPage from './ArtistsPage'

 
export default function Homecont() {

  const {tracks, artists, genres, labels, podcasts} = useContext(StoreContext)

  const artistAppPage = artists && artists.map(el => {
    return <Route path={`/artists/${el.name.toLowerCase().replaceAll(' ','')}`}>
      <ArtistsPage pageurl="artists" key={el.id} songinfo={el} textTitle={el.name} descript={el.descript} genres={el.genres} labels={el.labels}/>
    </Route>
  })
  const genresAppPage = genres && genres.map(el => {
    return <Route path={`/genres/${el.name.toLowerCase().replaceAll(' ','')}`}>
      <OneAppPage pageurl="genres" key={el.id} songinfo={el} textTitle={el.name} descript={el.descript} />
    </Route>
  })
  const labelsAppPage = labels && labels.map(el => {
    return <Route path={`/labels/${el.name.toLowerCase().replaceAll(' ','')}`}>
      <OneAppPage pageurl="labels" key={el.id} songinfo={el} textTitle={el.name} descript={el.descript} genres={el.genres} />
    </Route>
  })

  return (
    <div className="homecont">
      <Navbar />
      <Modals />
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
          <MyPages>
            <MediumRow homeboxtitle="Music Library" songsfilter="mylibrary" homeboxclass="trendingbox" view="listview"
              render={({songsfilter,favorites}) => (
                tracks && tracks
                  .filter(x => x.category.includes(songsfilter))
                  .map(el => {
                    return <BoxItem key={el.id} songinfo={el} title={el.title} subtitle={el.artist} />
                })
              )}
            />
          </MyPages>
        </Route>
        <Route path="/favorites">
        <MyPages>
          <MediumRow homeboxtitle="My Favorites" songsfilter="favorites" homeboxclass="trendingbox" view="listview"
            render={({songsfilter,favorites}) => (
              tracks && tracks
                .filter(x => x.favorite)
                .map(el => {
                  return <BoxItem key={el.id} songinfo={el} title={el.title} subtitle={el.artist} />
              })
            )}
          />
        </MyPages>
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