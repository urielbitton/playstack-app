import React, { useContext, useState } from 'react'
import {AppInput} from './AppInputs'
import { StoreContext } from './StoreContext'
import './styles/SearchPage.css'

export default function SearchPage(props) {

  const {showSearch, setShowSearch} = useContext(StoreContext)

  return (
    <div className="searchpage" style={{display: showSearch?"block":"none"}}>
      <i className="fal fa-times" onClick={() => setShowSearch(false)}></i>
      <div className="searchpagegrid">
        
      </div>
    </div>
  )
} 