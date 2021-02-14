import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import './styles/Tabber.css'
import TrackRow from './TrackRow'

export default function Tabber(props) {

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
      <TrackRow artistfilter={textTitle}/>
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