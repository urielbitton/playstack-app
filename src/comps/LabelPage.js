import React, {useContext} from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import OneAppPage from './OneAppPage'
import Tabber from './Tabber'
import TrackRow from './TrackRow'
import TrackRowComp from './TrackRowComp'
import { StoreContext } from './StoreContext'
import TrackSection from './TrackSection'
import TrackRowGroup from './TrackRowGroup'

export default function LabelPage(props) {

  const {tracks, artists, genres} = useContext(StoreContext)
  const {songinfo, pageurl, textTitle, descript, genres:propgenres, labels:proplabels} = props
  const suburl = textTitle.toLowerCase().replaceAll(' ','')
  const tabheaders = ['All','New Releases','Trending','Top Charts','By Artist','By Genre']

  return (
      <OneAppPage songinfo={songinfo} genres={propgenres} labels={proplabels} textTitle={textTitle} descript={descript}>
        <Tabber pageurl="labels" suburl={suburl} textTitle={textTitle} tabheaders={tabheaders}
          render={({labelsfilter}) => (
            tabheaders && tabheaders.map(head => {
              return <Route 
                exact 
                path={`/${pageurl}/${suburl}/${head==='All'?"":head.toLowerCase().replaceAll(' ','')}`}
                >
                <TrackSection labelsfilter={textTitle} render={({labelsfilter}) => (
                    head==='By Genre'?genres && genres.map((el) => <TrackRowGroup el={el} labelsfilter={labelsfilter} />):
                    head==='By Artist'?artists && artists.map((el) => <TrackRowGroup el={el} labelsfilter={labelsfilter} />):
                    tracks && tracks
                    .filter(x => (head==='All')? 
                      x.label.includes(labelsfilter):
                      x.label.toLowerCase().includes(labelsfilter.toLowerCase()) && x.category.includes(head.toLowerCase().replaceAll(' ','')))
                    .map((el,i) => {  
                      return <TrackRowComp el={el} i={i} labelsfilter={labelsfilter} />
                    })
                )}/> 
              </Route>
            })
          )}
        />
      </OneAppPage>
  )
}