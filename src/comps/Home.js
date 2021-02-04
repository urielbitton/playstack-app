import React from 'react'
import HeroBanner from './HeroBanner'
import {BigRow, MediumRow, SmallRow} from './SongsCont'
import './styles/Home.css'

export default function Home() {
  return (
    <div className="homepage hidescroll">
      <HeroBanner src="https://i.imgur.com/akxDcN6.jpg"/>
      <div className="homegrid">
        <div className="homeleft">
          <MediumRow homeboxtitle="Trending Tracks" songsfilter="trending" homeboxclass="trendingbox"/>
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