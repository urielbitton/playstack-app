import React, { useContext } from 'react'
import HeroBanner from './HeroBanner'
import {BigRow, MediumRow, SmallRow} from './SongsCont'
import { StoreContext } from './StoreContext'
import './styles/Home.css'

export default function Home() {

  const {discover} = useContext(StoreContext)

  return (
    <div className="homepage hidescroll">
      <HeroBanner songinfo={discover[0]} textSubtitle="Discover" textTitle='Hot new tracks this week' showsong={true}/>
      <div className="homegrid">
        <div className="homeleft">
          <MediumRow homeboxtitle="Trending Tracks" songsfilter="trending" homeboxclass="trendingbox" viewall={true}/>
          <SmallRow homeboxtitle="New Releases" songsfilter="newreleases" homeboxclass="homesongsrow"/>
          <SmallRow homeboxtitle="Top Charts" songsfilter="topcharts" homeboxclass="homesongsrow"/>
          <SmallRow homeboxtitle="Top Month" songsfilter="topmonth" homeboxclass="homesongsrow"/>
          <SmallRow homeboxtitle="Top Week" songsfilter="topweek" homeboxclass="homesongsrow"/>
        </div>
        <div className="homeright">
          <BigRow homeboxclass="largehomebox" songsfilter="radiomix" homeboxtitle="Radio Mixes & Sets"/>
        </div>
      </div>
    </div>
  )
}