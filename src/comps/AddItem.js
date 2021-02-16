import { useContext, useState } from 'react'
import AddItemCont from './AddItemCont'
import {AppInput, AppSelect} from './AppInputs'
import {CreateSong, CreateArtist, CreateLabel} from './CreateBtn'
import {StoreContext} from './StoreContext'
import './styles/AddItem.css'

export function AddSong(props) {
 
  const {charts, showAdd, setShowAdd} = useContext(StoreContext)
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

  const chartsoptions = charts && charts.map(el => {
    return {name:el.name} 
  })

  return (
    <AddItemCont showadd={showAdd===1} setShowAdd={setShowAdd} title="Add a Song" iconclass="far fa-music-alt">
      <div className="additemform hidescroll">
        <AppInput title="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
        <AppInput title="Mix Type (e.g. Radio Edit)" onChange={(e) => setAlt(e.target.value)} value={alt}/>
        <AppInput title="Artist Name (Seperate by commas)" onChange={(e) => setArtist(e.target.value)} value={artist}/>
        <AppInput title="Genre" onChange={(e) => setGenre(e.target.value)} value={genre}/>
        <AppInput title="Label" onChange={(e) => setLabel(e.target.value)} value={label}/>
        <AppSelect title="Categories" onChange={(e) => setCategory(Array.from(e.target.selectedOptions, option => option.value))} options={chartsoptions} multiple={true}/>
        <AppInput title="Audio Source" onChange={(e) => setAudioSrc(e.target.value)} value={audiosrc}/>
        <AppInput title="Artwork" onChange={(e) => setArtwork(e.target.value)} value={artwork}/>
        <AppInput title="Duration" onChange={(e) => setTime(e.target.value)} value={time}/>
        <div className="addformcheckboxcont">
          <AppInput type="checkbox" title="Favorite" onChange={(e) => setFavorite(e.target.value)} value={favorite}/>
        </div>
      </div>
      <CreateSong title={title} alt={alt} artist={artist} genre={genre} label={label} audiosrc={audiosrc} artwork={artwork} favorite={favorite} category={category} time={time} btntitle="Add" />
    </AddItemCont> 
  )
} 

export function AddArtist(props) {

  const {genres, labels, showAdd, setShowAdd} = useContext(StoreContext)
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [label, setLabel] = useState('')
  const [artwork, setArtwork] = useState('')
  const [favorite, setFavorite] = useState(false)
  const [descript, setDescript] = useState('')

  const genresoptions = genres && genres.map(el => {
    return {name:el.name} 
  })
  const labelsoptions = labels && labels.map(el => {
    return {name:el.name} 
  })
 
  return (
    <AddItemCont showadd={showAdd===2} setShowAdd={setShowAdd} title="Add an Artist" iconclass="far fa-microphone-stand">
      <div className="additemform hidescroll">
        <AppInput title="Name" onChange={(e) => setName(e.target.value)} value={name} />
        <AppInput title="Artwork" onChange={(e) => setArtwork(e.target.value)} value={artwork}/>
        <AppSelect title="Genres" onChange={(e) => setGenre(Array.from(e.target.selectedOptions, option => option.value))} options={genresoptions} multiple={true}/>
        <AppSelect title="Labels" onChange={(e) => setLabel(Array.from(e.target.selectedOptions, option => option.value))} options={labelsoptions} multiple={true}/>
        <AppInput title="Artist Description" onChange={(e) => setDescript(e.target.value)} value={descript}/>
        <div className="addformcheckboxcont">
          <AppInput type="checkbox" title="Favorite" onChange={(e) => setFavorite(e.target.value)} value={favorite}/>
        </div>
      </div> 
      <CreateArtist name={name} artwork={artwork} genres={genre} labels={label} descript={descript} favorite={favorite} />
    </AddItemCont>
  )
}

export function AddLabel(props) {

  const {genres, showAdd, setShowAdd} = useContext(StoreContext)
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [artwork, setArtwork] = useState('')
  const [descript, setDescript] = useState('')
  const [owner, setOwner] = useState('')

  const genresoptions = genres && genres.map(el => {
    return {name:el.name} 
  })

  return (
    <AddItemCont showadd={showAdd===3} setShowAdd={setShowAdd} title="Add a Label" iconclass="far fa-compact-disc">
      <div className="additemform hidescroll">
        <AppInput title="Name" onChange={(e) => setName(e.target.value)} value={name} />
        <AppSelect title="Genres" onChange={(e) => setGenre(Array.from(e.target.selectedOptions, option => option.value))} options={genresoptions} multiple={true}/>
        <AppInput title="Artwork" onChange={(e) => setArtwork(e.target.value)} value={artwork}/>
        <AppInput title="Label Description" onChange={(e) => setDescript(e.target.value)} value={descript}/>
        <AppInput title="Owner" onChange={(e) => setOwner(e.target.value)} value={owner}/>
      </div>
      <CreateLabel name={name} artwork={artwork} genres={genre} descript={descript} owner={owner}/>
    </AddItemCont>
  )
}