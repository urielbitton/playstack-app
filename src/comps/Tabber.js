import React, { useContext } from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import { StoreContext } from './StoreContext'
import './styles/Tabber.css'
import TrackRow from './TrackRow'
import TrackRowComp from './TrackRowComp'

export default function Tabber(props) {

  const {tracks} =  useContext(StoreContext)
  const {tabheaders, pageurl, suburl, textTitle} = props
  const headersrow = tabheaders && tabheaders.map(el => {
    return <NavLink 
      exact to={`/${pageurl}/${suburl}/${el==='New Releases'?"":el.toLowerCase().replaceAll(' ','')}`}
      activeClassName="tabberactivelink">
      <h4>{el}</h4>
      <hr />
    </NavLink>
  }) 
  const tabbercontents = tabheaders && tabheaders.map(el => {
    return <Route 
      exact 
      path={`/${pageurl}/${suburl}/${el==='New Releases'?"":el.toLowerCase().replaceAll(' ','')}`}
      >
      <TrackRow artistfilter={textTitle} render={({artistfilter}) => (
        tracks && tracks
        .filter(x => artistfilter.toLowerCase() === x.artist.toLowerCase())
        .map((el,i) => {
          return <TrackRowComp el={el} i={i}/>
        })
      )}/>
    </Route>
  })

  return (
    <div className="tabbercont">
      <div className="tabberheader">
        {headersrow}
      </div>
      <hr />
      <div className="tabbercontent">
        <Switch>
          {tabbercontents}
        </Switch>
      </div>
    </div>
  )
}