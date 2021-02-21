import React, {useContext} from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import OneAppPage from './OneAppPage'
import Tabber from './Tabber'
import TrackRow from './TrackRow'
import TrackRowComp from './TrackRowComp'
import TrackRowGroup from './TrackRowGroup'
import { StoreContext } from './StoreContext'

export default function ArtistPage(props) {

  const {tracks} = useContext(StoreContext)
  const {songinfo, descript, pageurl, textTitle, genres, labels} = props
  const suburl = textTitle.toLowerCase().replaceAll(' ','')
  const tabheaders = ['All','New Releases','Trending','Top Charts','By Label','By Genre']

  return (
      <OneAppPage genres={genres} labels={labels} songinfo={songinfo} textTitle={textTitle} descript={descript}>
        <Tabber pageurl="artists" suburl={suburl} textTitle={textTitle} tabheaders={tabheaders}
          render={({artistfilter}) => (
            tabheaders && tabheaders.map(el => {
              return <Route 
                exact 
                path={`/${pageurl}/${suburl}/${el==='All'?"":el.toLowerCase().replaceAll(' ','')}`}
                >
                <TrackRow artistfilter={textTitle} render={({artistfilter, labelsfilter}) => (
                  tracks && tracks
                  .filter(x => {
                    return el==='All'?x.artist.toLowerCase().includes(artistfilter.toLowerCase())
                    :el==='By Label'?x.artist.toLowerCase().includes(artistfilter.toLowerCase())
                    :x.artist.toLowerCase().includes(artistfilter.toLowerCase()) && x.category.includes(el.toLowerCase().replaceAll(' ',''))
                  })
                  .map((el2,i) => { 
                    if(el==='By Label') {
                      return <TrackRowGroup el={el2} i={i} title="test" labelsfilter={labelsfilter}/>
                    }
                    else {
                      return <TrackRowComp el={el2} i={i}/>
                    }
                  })
                )}/>
              </Route>
            })
          )}
        />
      </OneAppPage>
  )
}