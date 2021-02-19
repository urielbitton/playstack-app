import React, {useContext} from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import OneAppPage from './OneAppPage'
import Tabber from './Tabber'
import TrackRow from './TrackRow'
import TrackRowComp from './TrackRowComp'
import { StoreContext } from './StoreContext'

export default function ArtistPage(props) {

  const {tracks} = useContext(StoreContext)
  const {songinfo, descript, pageurl, textTitle, genres, labels} = props
  const suburl = textTitle.toLowerCase().replaceAll(' ','')
  const tabheaders = ['New Releases','Trending','Top Charts','By Label','By Genre']

  return (
      <OneAppPage genres={genres} labels={labels} songinfo={songinfo} textTitle={textTitle} descript={descript}>
        <Tabber pageurl="artists" suburl={suburl} textTitle={textTitle} tabheaders={tabheaders}
          render={({artistfilter,genresfilter,labelsfilter}) => (
            tabheaders && tabheaders.map(el => {
              return <Route 
                exact 
                path={`/${pageurl}/${suburl}/${el==='New Releases'?"":el.toLowerCase().replaceAll(' ','')}`}
                >
                <TrackRow artistfilter={textTitle} render={({artistfilter}) => (
                  tracks && tracks
                  .filter(x => x.artist.toLowerCase().includes(artistfilter.toLowerCase()))
                  .map((el,i) => {
                    return <TrackRowComp el={el} i={i}/>
                  })
                )}/>
              </Route>
            })
          )}
        />
      </OneAppPage>
  )
}