import React from 'react'
import HeroBanner from './HeroBanner'
import Tabber from './Tabber'
import './styles/OneAppPage.css'

export default function OneAppPage(props) {

  const {songinfo, textTitle, descript, genres, labels, pageurl} = props
 
  return (
    <div className="oneapppage">
      <HeroBanner songinfo={songinfo} textTitle={textTitle} descript={descript} genres={genres} labels={labels}/>
      <div className="appgrid">
        <Tabber pageurl={pageurl} suburl={textTitle.toLowerCase().replaceAll(' ','')} tabheaders={['New Releases','Trending','Top Charts','By Label','By Genre']} textTitle={textTitle}/>
      </div>
    </div>
  )
}