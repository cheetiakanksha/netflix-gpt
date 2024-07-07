import React from 'react'
import useTrailerVideo from '../hooks/useTrailerVideo'
import { useSelector } from 'react-redux';

const VideoBg = ({movieId}) => {
    useTrailerVideo(movieId);
    const trailerVideo = useSelector((store)=>store.movies?.addTrailerVideo)
  
  console.log(trailerVideo)
  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video'
       src={"https://www.youtube.com/embed/"+trailerVideo?.key +"&autoplay=1&mute=1"}
       title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBg