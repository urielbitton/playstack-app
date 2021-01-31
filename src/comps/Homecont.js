import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import Home from './Home'
import Navbar from './Navbar'

export default function Homecont() {
  return (
    <div className="homecont">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}