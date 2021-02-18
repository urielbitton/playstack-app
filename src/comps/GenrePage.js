import React, {useContext} from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import OneAppPage from './OneAppPage'
import Tabber from './Tabber'
import TrackRow from './TrackRow'
import TrackRowComp from './TrackRowComp'
import { StoreContext } from './StoreContext'

export default function GenrePage(props) { 

  const {tracks} = useContext(StoreContext)
  const {pageurl, textTitle, genres, labels} = props
  const suburl = textTitle.toLowerCase().replaceAll(' ','')
  const tabheaders = ['New Releases','Trending','Top Charts','By Label','By Artist']

  return ( 
      <OneAppPage genres={genres} labels={labels}>
        <Tabber pageurl="genres" suburl={suburl} textTitle={textTitle} tabheaders={tabheaders}
          render={({genresfilter}) => (
            tabheaders && tabheaders.map(el => {
              return <Route 
                exact 
                path={`/${pageurl}/${suburl}/${el==='New Releases'?"":el.toLowerCase().replaceAll(' ','')}`}
                >
                <TrackRow genresfilter={textTitle} render={({genresfilter}) => (
                  tracks && tracks
                  .filter(x => genresfilter.toLowerCase() === x.genre.toLowerCase())
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