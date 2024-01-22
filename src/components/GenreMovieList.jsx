import React from 'react'
import GenrestList from '../Constant/GenrestList'
import MovieList from './MovieList'

const GenreMovieList = () => {
  return (
    <div>

{GenrestList.genere.map((item,index)=> index<=8&&(
<div className='p-8 px-8 md:px-16'>

    <h2 className='text-[20px] text-white'>{item.name}</h2>
    <MovieList genreId={item.id} index_={index}/>
    </div>

))}

    </div>
  )
}

export default GenreMovieList