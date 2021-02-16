import React, { useContext } from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import { StoreContext } from './StoreContext'
import './styles/Tabber.css'


export default function Tabber(props) {

  const {render, tabheaders, pageurl, suburl, textTitle, artistfilter, genresfilter, labelsfilter} = props

  const headersrow = tabheaders && tabheaders.map(el => {
    return <NavLink 
      exact to={`/${pageurl}/${suburl}/${el==='New Releases'?"":el.toLowerCase().replaceAll(' ','')}`}
      activeClassName="tabberactivelink">
      <h4>{el}</h4>
      <hr />
    </NavLink>
  }) 
  const tabbercontents = render({
    artistfilter,
    genresfilter,
    labelsfilter
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