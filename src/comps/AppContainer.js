import React from 'react'
import Homecont from './Homecont'
import MainPlayer from './MainPlayer'
import Sidebar from './Sidebar'

export default function AppContainer() {
  return (
    <div className="appcontainer">
      <Sidebar />
      <Homecont />
      <MainPlayer />
    </div>
  )
}
