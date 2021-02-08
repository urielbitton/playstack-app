import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import HeroBanner from './HeroBanner'
import BoxItem from './BoxItem'
import './styles/AppPage.css'

export default function AppPage(props) {

  const {page, pagename, textTitle} = props
  let randnum = Math.floor(Math.random()* page.length) 
  
  const pagerow =  page && page.map(el => {
    return <Link to={`/${pagename}/${el.name.toLowerCase().replaceAll(' ','')}`}>
      <BoxItem songinfo={el} key={el.id} noPlay={true} title={el.name} /> 
    </Link>
  })
 
  return (
    <div className="apppage">
      <HeroBanner songinfo={page[randnum]} textTitle={textTitle} textSubtitle={pagename} showsong={false} viewall={false}/>
      <div className="appgrid"> 
        {pagerow}
      </div>
    </div>
  )
}