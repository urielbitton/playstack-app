import React, { useContext } from 'react'
import MyPages from './MyPages'
import { StoreContext } from './StoreContext'
import TrackRow from './TrackRow'
import TrackRowComp from './TrackRowComp'
import './styles/OnePlayList.css' 

export default function OnePlayList(props) {

  const {tracks} = useContext(StoreContext)
  const {tracksarr, playlistName} = props.el

  const listTracks = tracksarr && tracksarr.map(el => {
    return tracks.find(x => x.id===el)
  })
  const tracksimgsrow = tracksarr && tracksarr.map(el => {
    return tracks.find(x => x.id===el).artwork
  }) 
  const imgboxes = tracksarr && tracksarr.map((el,i) => {
    return <div className="imgbox" 
    style={{backgroundImage:`url(${tracksimgsrow[i]})`}}>
    </div>
  })
  const playlistartists = tracksarr && tracksarr.map(el => {
    return tracks.find(x => x.id===el).artist
  })

  return (
    <MyPages className="oneplaylistpage">
      <div className="oneplaylistheader">
        <div className="imgboxcont">
          {imgboxes}
        </div>
        <div>
          <h3>{playlistName}</h3>
          <small>{tracksarr.length} songs</small>
          <small>{playlistartists[0]} + {playlistartists.length-1} more</small>
        </div>
      </div>
      <div className="oneplaylistcontent">
        <TrackRow render={({artistfilter}) => (
          listTracks && listTracks.map((el,i) => {
            return <TrackRowComp el={el} i={i}/>
          })
        )}/>
      </div>
    </MyPages>
  )
}