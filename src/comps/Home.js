import React from 'react'
import HeroBanner from './HeroBanner'
import SongBox from './SongBox'

export default function Home() {
  return (
    <div className="homepage hidescroll">
      <HeroBanner src="https://i.imgur.com/akxDcN6.jpg"/>
      <div className="homegrid">
        <div className="homeleft">
          <div className="homebox trendingbox">
            <h5>Trending Tracks<small>View All</small></h5>
            
            <div className="homeboxrow">
              <SongBox />
              <SongBox />
            </div>
          </div>
          <div className="homebox">
            <h5>New Releases</h5>
          </div>
        </div>
        <div className="homeright"></div>
      </div>
    </div>
  )
}