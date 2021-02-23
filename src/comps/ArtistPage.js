import React, {useContext, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import OneAppPage from './OneAppPage'
import Tabber from './Tabber'
import TrackSection from './TrackSection'
import { StoreContext } from './StoreContext'
import TrackRowComp from './TrackRowComp'
import TrackRowGroup from './TrackRowGroup'

export default function ArtistPage(props) {

  const {tracks, labels, genres} = useContext(StoreContext)
  const {songinfo, descript, pageurl, textTitle, genres:propgenres, labels:proplabels} = props
  const suburl = textTitle.toLowerCase().replaceAll(' ','')
  const tabheaders = ['All','New Releases','Trending','Top Charts','By Label','By Genre']

  return (
      <OneAppPage genres={propgenres} labels={proplabels} songinfo={songinfo} textTitle={textTitle} descript={descript}>
        <Tabber pageurl="artists" suburl={suburl} textTitle={textTitle} tabheaders={tabheaders}
          render={({artistfilter}) => (
            tabheaders && tabheaders.map(head => {
              return <Route 
                exact 
                path={`/${pageurl}/${suburl}/${head==='All'?"":head.toLowerCase().replaceAll(' ','')}`}
                >
                <TrackSection artistfilter={textTitle} render={({artistfilter}) => (
                    head==='By Genre'?genres && genres.map((el) => <TrackRowGroup el={el} artistfilter={artistfilter} />):
                    head==='By Label'?labels && labels.map((el) => <TrackRowGroup el={el} artistfilter={artistfilter} />):
                    tracks && tracks
                    .filter(x => (head==='All')?
                      x.artist.toLowerCase().includes(artistfilter.toLowerCase()):
                      x.artist.toLowerCase().includes(artistfilter.toLowerCase()) && x.category.includes(head.toLowerCase().replaceAll(' ','')))
                    .map((el,i) => { 
                      return <TrackRowComp el={el} i={i} artistfilter={artistfilter} />
                    })
                )}/>
              </Route>
            })
          )}
        />
      </OneAppPage>
  )
}