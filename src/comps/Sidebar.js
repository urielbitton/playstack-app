import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
 
export default function Sidebar() {
  return (
    <div className="sidebar hidescroll">
      <div className="logocont">
        <img src="https://i.imgur.com/Lfay36v.png" alt=""/>
        <h5>Play<span>Stack</span></h5>
      </div>
      <div className="menu">
        <h6>Browse</h6> 
        <NavLink to="/discover" className="activelink"><i className="fal fa-music"></i>Discover</NavLink>
        <NavLink to="/artists"><i className="fal fa-microphone-stand"></i>Artists</NavLink>
        <NavLink to="/genres"><i className="fal fa-gramophone"></i>Genres</NavLink>
        <NavLink to="/labels"><i className="fal fa-compact-disc"></i>Record Labels</NavLink>
        <NavLink to="/podcasts"><i className="fal fa-podcast"></i>Podcasts</NavLink>
        <h6>My Music</h6>
        <NavLink to="/library"><i className="fal fa-album-collection"></i>Library</NavLink>
        <NavLink to="/favorites"><i className="fal fa-heart"></i>My Favorites</NavLink>
        <NavLink to="/addsong"><i className="fal fa-plus"></i>Add Song</NavLink>
        <h6>Playlists</h6>
        <NavLink to="/myplaylists"><i className="fal fa-list-music"></i>My Playlists</NavLink>
        <NavLink to="/recentlyplayed"><i className="fal fa-play"></i>Recently Played</NavLink>
        <NavLink to="/mostplayed"><i className="fal fa-headphones"></i>Most Played</NavLink>
        <NavLink to="/newplaylist"><i className="fal fa-plus"></i>New Playlist</NavLink>
      </div>
    </div>
  )
}
