import React, {useContext} from 'react'
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import OneAppPage from './OneAppPage'
import Tabber from './Tabber'
import TrackRow from './TrackRow'
import TrackRowComp from './TrackRowComp'
import { StoreContext } from './StoreContext'

export default function LabelPage(props) {

  const {tracks} = useContext(StoreContext)
  const {songinfo, pageurl, textTitle, descript, genres, labels} = props
  const suburl = textTitle.toLowerCase().replaceAll(' ','')
  const tabheaders = ['All','New Releases','Trending','Top Charts','By Artist','By Genre']

  return (
      <OneAppPage songinfo={songinfo} genres={genres} labels={labels} textTitle={textTitle} descript={descript}>
        <Tabber pageurl="labels" suburl={suburl} textTitle={textTitle} tabheaders={tabheaders}
          render={({labelsfilter}) => (
            tabheaders && tabheaders.map(el => {
              return <Route 
                exact 
                path={`/${pageurl}/${suburl}/${el==='All'?"":el.toLowerCase().replaceAll(' ','')}`}
                >
                <TrackRow labelsfilter={textTitle} render={({labelsfilter}) => (
                  tracks && tracks
                  .filter(x => {
                    return el==='All'?labelsfilter.toLowerCase() === x.label.toLowerCase()
                    :x.label.toLowerCase().includes(labelsfilter.toLowerCase()) && x.category.includes(el.toLowerCase().replaceAll(' ',''))
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