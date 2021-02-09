import React, { useContext } from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import { StoreContext } from './StoreContext'
import './styles/Sidebar.css'
 
export default function Sidebar() {

  const {showsidebar, setShowSidebar} = useContext(StoreContext)

  return (
    <div className="sidebar hidescroll" style={{left: showsidebar?"0":"-300px"}}>
      <div className="logocont">
        <img src="https://i.imgur.com/Lfay36v.png" alt=""/>
        <h5>Play<span>Stack</span></h5>
        <i className="fal fa-times" onClick={() => setShowSidebar(!showsidebar)}></i>
      </div>
      <div className="menu"> 
        <h6>Browse</h6> 
        <NavLink exact to="/" activeClassName="activelink"><i className="fal fa-music"></i>Discover</NavLink>
        <NavLink to="/artists" activeClassName="activelink"><i className="fal fa-microphone-stand"></i>Artists</NavLink>
        <NavLink to="/genres" activeClassName="activelink"><i className="fal fa-gramophone"></i>Genres</NavLink>
        <NavLink to="/labels" activeClassName="activelink"><i className="fal fa-compact-disc"></i>Record Labels</NavLink>
        <NavLink exact to="/podcasts" activeClassName="activelink"><i className="fal fa-podcast"></i>Podcasts</NavLink>
        <h6>My Music</h6>
        <NavLink exact to="/library" activeClassName="activelink"><i className="fal fa-album-collection"></i>Library</NavLink>
        <NavLink exact to="/favorites" activeClassName="activelink"><i className="fal fa-heart"></i>My Favorites</NavLink>
        <NavLink exact to="/addsong" activeClassName="activelink"><i className="fal fa-plus"></i>Create</NavLink>
        <h6>Playlists</h6>
        <NavLink exact to="/myplaylists" activeClassName="activelink"><i className="fal fa-list-music"></i>My Playlists</NavLink>
        <NavLink exact to="/recentlyplayed" activeClassName="activelink"><i className="fal fa-play"></i>Recently Played</NavLink>
        <NavLink exact to="/mostplayed" activeClassName="activelink"><i className="fal fa-headphones"></i>Most Played</NavLink>
        <NavLink exact to="/newplaylist" activeClassName="activelink"><i className="fal fa-plus"></i>New Playlist</NavLink>
      </div>
    </div>
  )
}
