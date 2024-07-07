import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { bgImg } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-20'>
            <img alt='logo' src={bgImg}></img>
       
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch