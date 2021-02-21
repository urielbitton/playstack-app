import React, {useContext} from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import OneAppPage from './OneAppPage'
import Tabber from './Tabber'
import TrackRow from './TrackRow'
import TrackRowComp from './TrackRowComp'
import { StoreContext } from './StoreContext'

export default function GenrePage(props) { 

  const {tracks} = useContext(StoreContext)
  const {songinfo, textTitle, descript, pageurl, genres, labels} = props
  const suburl = textTitle.toLowerCase().replaceAll(' ','')
  const tabheaders = ['All','New Releases','Trending','Top Charts','By Label','By Artist']

  return ( 
      <OneAppPage songinfo={songinfo} genres={genres} labels={labels} textTitle={textTitle} descript={descript}>
        <Tabber pageurl="genres" suburl={suburl} textTitle={textTitle} tabheaders={tabheaders}
          render={({genresfilter}) => (
            tabheaders && tabheaders.map(el => {
              return <Route 
                exact 
                path={`/${pageurl}/${suburl}/${el==='All'?"":el.toLowerCase().replaceAll(' ','')}`}
                >
                <TrackRow genresfilter={textTitle} render={({genresfilter}) => (
                  tracks && tracks
                  .filter(x => {
                    return el==='All'?genresfilter.toLowerCase() === x.genre.toLowerCase()
                    :x.genre.toLowerCase().includes(genresfilter.toLowerCase()) && x.category.includes(el.toLowerCase().replaceAll(' ',''))
                  })
                  .map((el2,i) => {
                    return <TrackRowComp el={el2} i={i}/>
                  })
                )}/>
              </Route>
            })
          )}
        />
      </OneAppPage>
  )
}