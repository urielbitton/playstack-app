import React, {useContext, useEffect, useState} from 'react'
import AddItemCont from './AddItemCont'
import { CreateSong } from './CreateBtn'
import {AppInput, AppSelect} from './AppInputs'
import { StoreContext } from './StoreContext'

export function EditSong(props) { 
 
  const {charts, showAdd, setShowAdd, editData} = useContext(StoreContext)
  const [id, setId] = useState()
  const [title, setTitle] = useState('')
  const [alt, setAlt] = useState('')
  const [artist, setArtist] = useState('')
  const [genre, setGenre] = useState('')
  const [label, setLabel] = useState('')
  const [audiosrc, setAudioSrc] = useState('')
  const [artwork, setArtwork] = useState('')
  const [favorite, setFavorite] = useState(false)
  const [category, setCategory] = useState([])
  const [time, setTime] = useState('') 
  const [plays, setPlays] = useState(0)

  const chartsoptions = charts && charts.map(el => {
    return {name:el.name} 
  })
  useEffect(() => {
    setId(editData.id)
    setTitle(editData.title)
    setAlt(editData.alt)
    setArtist(editData.artist)
    setGenre(editData.genre)
    setLabel(editData.label)
    setAudioSrc(editData.audiosrc)
    setArtwork(editData.artwork)
    setFavorite(editData.favorite)
    setCategory(editData.category)
    setTime(editData.time)
    setPlays(editData.plays)
  },[editData])
   
  return (
    <AddItemCont showadd={showAdd===4} setShowAdd={setShowAdd} title="Edit a Song" iconclass="far fa-music-alt">
      <div className="additemform hidescroll">
        <AppInput title="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
        <AppInput title="Mix Type (e.g. Radio Edit)" onChange={(e) => setAlt(e.target.value)} value={alt}/>
        <AppInput title="Artist Name (Seperate by commas)" onChange={(e) => setArtist(e.target.value)} value={artist}/>
        <AppInput title="Genre" onChange={(e) => setGenre(e.target.value)} value={genre}/>
        <AppInput title="Label" onChange={(e) => setLabel(e.target.value)} value={label}/>
        <AppSelect title="Categories" onChange={(e) => setCategory(Array.from(e.target.selectedOptions, option => option.value))} value={category} options={chartsoptions} multiple={true}/>
        <AppInput title="Audio Source" onChange={(e) => setAudioSrc(e.target.value)} value={audiosrc}/>
        <AppInput title="Artwork" onChange={(e) => setArtwork(e.target.value)} value={artwork}/>
        <AppInput title="Duration" onChange={(e) => setTime(e.target.value)} value={time}/>
        <div className="addformcheckboxcont">
          <AppInput type="checkbox" title="Favorite" onChange={(e) => setFavorite(e.target.checked)} checked={favorite}/>
        </div>
      </div>
      <CreateSong id={id} title={title} alt={alt} artist={artist} genre={genre} label={label} audiosrc={audiosrc} artwork={artwork} favorite={favorite} category={category} time={time} plays={plays} btntitle="Edit" mode="edit"/>
    </AddItemCont> 
  )
}

export function EditArtist() {
  return (
    <></>
  )
}

export function EditLabel() {
  return (
    <></>
  )
}

