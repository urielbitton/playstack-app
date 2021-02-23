import React, {useContext} from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import OneAppPage from './OneAppPage'
import Tabber from './Tabber'
import TrackRowComp from './TrackRowComp'
import { StoreContext } from './StoreContext'
import TrackSection from './TrackSection'
import TrackRowGroup from './TrackRowGroup'

export default function GenrePage(props) { 

  const {tracks, artists, labels} = useContext(StoreContext)
  const {songinfo, textTitle, descript, pageurl, genres:propgenres, labels:proplabels, artists:propartists} = props
  const suburl = textTitle.toLowerCase().replaceAll(' ','')
  const tabheaders = ['All','New Releases','Trending','Top Charts','By Label','By Artist']

  return ( 
      <OneAppPage songinfo={songinfo} genres={propgenres} labels={proplabels} textTitle={textTitle} descript={descript}>
        <Tabber pageurl="genres" suburl={suburl} textTitle={textTitle} tabheaders={tabheaders}
          render={({genresfilter}) => (
            tabheaders && tabheaders.map(head => {
              return <Route 
                exact  
                path={`/${pageurl}/${suburl}/${head==='All'?"":head.toLowerCase().replaceAll(' ','')}`}
                >
                <TrackSection genresfilter={textTitle} render={({genresfilter}) => (
                    head==='By Label'?labels && labels.map((el) => <TrackRowGroup el={el} genresfilter={genresfilter} />):
                    head==='By Artist'?artists && artists.map((el) => <TrackRowGroup el={el} genresfilter={genresfilter} />):
                    tracks && tracks
                    .filter(x => (head==='All')?
                      x.genre.includes(genresfilter):
                      x.genre.toLowerCase().includes(genresfilter.toLowerCase()) && x.category.includes(head.toLowerCase().replaceAll(' ','')))
                    .map((el,i) => { 
                      return <TrackRowComp el={el} i={i} genresfilter={genresfilter} />
                    })
                )}/>
              </Route>
            })
          )}
        />
      </OneAppPage>
  )
}