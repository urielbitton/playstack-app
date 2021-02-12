import { useState } from 'react'
import AddItemCont from './AddItemCont'
import {AppInput, AppSelect} from './AppInputs'
import {CreateSong, CreateArtist, CreateLabel} from './CreateBtn'

export function AddSong(props) {

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

  return (
    <>
      <div onClick={() => setShowAdd(!showadd)} className="additembtn">
        <i className={iconclass}></i>
        <h5>Add Song</h5>
      </div>
      <AddItemCont showadd={showadd} setShowAdd={setShowAdd} title="Add a Song">
        <div className="additemform hidescroll">
          <AppInput title="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
          <AppInput title="Mix Type (e.g. Radio Edit)" onChange={(e) => setAlt(e.target.value)} value={alt}/>
          <AppInput title="Artist Name" onChange={(e) => setArtist(e.target.value)} value={artist}/>
          <AppInput title="Genre" onChange={(e) => setGenre(e.target.value)} value={genre}/>
          <AppInput title="Label" onChange={(e) => setLabel(e.target.value)} value={label}/>
          <AppSelect title="Categories" onChange={(e) => setCategory(Array.from(e.target.selectedOptions, option => option.value))} options={[{name:'Top Charts'},{name:'New Releases'},{name:'Trending'},{name:'Top Week'},{name:'Top Month'}]} multiple={true}/>
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

  const {iconclass} = props
  const [name, setName] = useState('')
  const [genres, setGenres] = useState('')
  const [labels, setLabels] = useState('')
  const [artwork, setArtwork] = useState('')
  const [favorite, setFavorite] = useState(false)
  const [descript, setDescript] = useState('')
  const [showadd, setShowAdd] = useState(false)
 
  return (
    <>
    <div onClick={() => setShowAdd(!showadd)} className="additembtn">
      <i className={iconclass}></i>
      <h5>Add Artist</h5>
    </div>
    <AddItemCont showadd={showadd} setShowAdd={setShowAdd} title="Add an Artist">
      <div className="additemform hidescroll">
        <AppInput title="Name" onChange={(e) => setName(e.target.value)} value={name} />
        <AppInput title="Genres" onChange={(e) => setGenres(e.target.value)} value={genres}/>
        <AppInput title="Labels" onChange={(e) => setLabels(e.target.value)} value={labels}/>
        <AppInput title="Artwork" onChange={(e) => setArtwork(e.target.value)} value={artwork}/>
        <AppInput title="Artist Description" onChange={(e) => setDescript(e.target.value)} value={descript}/>
        <div className="addformcheckboxcont">
          <AppInput type="checkbox" title="Favorite" onChange={(e) => setFavorite(e.target.value)} value={favorite}/>
        </div>
      </div> 
      <CreateArtist name={name} artwork={artwork} genres={genres} labels={labels} descript={descript} favorite={favorite} />
    </AddItemCont>
    </>
  )
}

export function AddLabel(props) {

  const {iconclass} = props
  const [name, setName] = useState('')
  const [genres, setGenres] = useState('')
  const [artwork, setArtwork] = useState('')
  const [favorite, setFavorite] = useState(false)
  const [descript, setDescript] = useState('')
  const [owner, setOwner] = useState('')
  const [showadd, setShowAdd] = useState(false)

  return (
    <>
      <div onClick={() => setShowAdd(!showadd)} className="additembtn">
        <i className={iconclass}></i>
        <h5>Add Label</h5>
      </div>
      <AddItemCont showadd={showadd} setShowAdd={setShowAdd} title="Add a Label">
        <div className="additemform hidescroll">
          <AppInput title="Name" onChange={(e) => setName(e.target.value)} value={name} />
          <AppInput title="Genres" onChange={(e) => setGenres(e.target.value)} value={genres}/>
          <AppInput title="Labels" onChange={(e) => setOwner(e.target.value)} value={owner}/>
          <AppInput title="Artwork" onChange={(e) => setArtwork(e.target.value)} value={artwork}/>
          <AppInput title="Artist Description" onChange={(e) => setDescript(e.target.value)} value={descript}/>
        </div>
        <CreateLabel name={name} artwork={artwork} genres={genres} descript={descript} owner={owner}/>
      </AddItemCont>
    </>
  )
}