import React from 'react'
import HeroBanner from './HeroBanner'
import {MediumRow, SmallRow} from './SongsCont'

export default function Home() {
  return (
    <div className="homepage hidescroll">
      <HeroBanner src="https://i.imgur.com/akxDcN6.jpg"/>
      <div className="homegrid">
        <div className="homeleft">
          <MediumRow homeboxtitle="Trending Tracks" songsfilter="trending" homeboxclass="trendingbox"/>
          <SmallRow homeboxtitle="New Releases" songsfilter="newreleases" homeboxclass="homesongsrow"/>
          <SmallRow homeboxtitle="Top Charts" songsfilter="topcharts" homeboxclass="homesongsrow"/>
        </div>
        <div className="homeright"></div>
      </div>
    </div>
  )
}