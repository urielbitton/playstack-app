import { useContext, useState } from 'react'
import AddItemCont from './AddItemCont'
import {AppInput, AppSelect} from './AppInputs'
import {CreateSong, CreateArtist, CreateLabel} from './CreateBtn'
import {StoreContext} from './StoreContext'

export function AddSong(props) {

  const {charts} = useContext(StoreContext)
  const {iconclass} = props
  const [title, setTitle] = useState('')
  const [alt, setAlt] = useState('')
  const [artist, setArtist] = useState('')
  const [genre, setGenre] = useState('')
  const [label, setLabel] = useState('')
  const [audiosrc, setAudioSrc] = useState('')
  const [artwork, setArtwork] = useState('')
  const [favorite, setFavorite] = useState(false)
  const [mylibrary, setMyLibrary] = useState(false)
  const [category, setCategory] = useState([])
  const [time, setTime] = useState('')
  const [showadd, setShowAdd] = useState(false)

  const chartsoptions = charts && charts.map(el => {
    return {name:el.name} 
  })

  return (
    <>
      <div onClick={() => setShowAdd(!showadd)} className="additembtn">
        <h5><i className={iconclass}></i>Add Song</h5>
      </div>
      <AddItemCont showadd={showadd} setShowAdd={setShowAdd} title="Add a Song" iconclass="far fa-music-alt">
        <div className="additemform hidescroll">
          <AppInput title="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
          <AppInput title="Mix Type (e.g. Radio Edit)" onChange={(e) => setAlt(e.target.value)} value={alt}/>
          <AppInput title="Artist Name" onChange={(e) => setArtist(e.target.value)} value={artist}/>
          <AppInput title="Genre" onChange={(e) => setGenre(e.target.value)} value={genre}/>
          <AppInput title="Label" onChange={(e) => setLabel(e.target.value)} value={label}/>
          <AppSelect title="Categories" onChange={(e) => setCategory(Array.from(e.target.selectedOptions, option => option.value))} options={chartsoptions} multiple={true}/>
          <AppInput title="Audio Source" onChange={(e) => setAudioSrc(e.target.value)} value={audiosrc}/>
          <AppInput title="Artwork" onChange={(e) => setArtwork(e.target.value)} value={artwork}/>
          <AppInput title="Duration" onChange={(e) => setTime(e.target.value)} value={time}/>
          <div className="addformcheckboxcont">
            <AppInput type="checkbox" title="Favorite" onChange={(e) => setFavorite(e.target.value)} value={favorite}/>
            <AppInput type="checkbox" title="Add To Library" onChange={(e) => setMyLibrary(e.target.value)} value={mylibrary}/>
          </div>
        </div>
        <CreateSong title={title} alt={alt} artist={artist} genre={genre} audiosrc={audiosrc} artwork={artwork} favorite={favorite} mylibrary={mylibrary} category={category} time={time} />
      </AddItemCont> 
    </> 
  )
}

export function AddArtist(props) {

  const {genres, labels} = useContext(StoreContext)
  const {iconclass} = props
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [label, setLabel] = useState('')
  const [artwork, setArtwork] = useState('')
  const [favorite, setFavorite] = useState(false)
  const [descript, setDescript] = useState('')
  const [showadd, setShowAdd] = useState(false)

  const genresoptions = genres && genres.map(el => {
    return {name:el.name} 
  })
  const labelsoptions = labels && labels.map(el => {
    return {name:el.name} 
  })
 
  return (
    <>
    <div onClick={() => setShowAdd(!showadd)} className="additembtn">
      <h5><i className={iconclass}></i>Add Artist</h5>
    </div>
    <AddItemCont showadd={showadd} setShowAdd={setShowAdd} title="Add an Artist" iconclass="far fa-microphone-stand">
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
    </>
  )
}

export function AddLabel(props) {

  const {genres} = useContext(StoreContext)
  const {iconclass} = props
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [artwork, setArtwork] = useState('')
  const [descript, setDescript] = useState('')
  const [owner, setOwner] = useState('')
  const [showadd, setShowAdd] = useState(false)

  const genresoptions = genres && genres.map(el => {
    return {name:el.name} 
  })

  return (
    <>
      <div onClick={() => setShowAdd(!showadd)} className="additembtn">
        <h5><i className={iconclass}></i>Add Label</h5>
      </div>
      <AddItemCont showadd={showadd} setShowAdd={setShowAdd} title="Add a Label" iconclass="far fa-compact-disc">
        <div className="additemform hidescroll">
          <AppInput title="Name" onChange={(e) => setName(e.target.value)} value={name} />
          <AppSelect title="Genres" onChange={(e) => setGenre(Array.from(e.target.selectedOptions, option => option.value))} options={genresoptions} multiple={true}/>
          <AppInput title="Artwork" onChange={(e) => setArtwork(e.target.value)} value={artwork}/>
          <AppInput title="Label Description" onChange={(e) => setDescript(e.target.value)} value={descript}/>
          <AppInput title="Owner" onChange={(e) => setOwner(e.target.value)} value={owner}/>
        </div>
        <CreateLabel name={name} artwork={artwork} genres={genre} descript={descript} owner={owner}/>
      </AddItemCont>
    </>
  )
}