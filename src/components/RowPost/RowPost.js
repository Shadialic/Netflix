import React,{useEffect,useState} from 'react'
import {imageUrl,API_KEY } from '../../constants/constants'
import "./RowPost.css"
import axios from '../../axios'
import Youtube from 'react-youtube'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlid, setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network Error')
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      rel:0,
     
    },
  };

  const handleMovieTrailer = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        }else{
          console.log('Array empty or trailer not available')
        }
    })
  }
  return (
    <div className='row'>
       <h2>{props.title}</h2>
       <div className='posters'>
        {movies.map((obj)=>

            <img onClick={()=>handleMovieTrailer(obj.id)} className={props.isSmall ?'smallPoster': 'poster'} src={`${imageUrl +obj.backdrop_path}`} alt="poster" />
            )}
       </div>
      
        { urlid &&  <Youtube  opts={opts} videoId={urlid.key}/> }
    </div>
  )
}

export default RowPost
