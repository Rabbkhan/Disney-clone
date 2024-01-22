import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import HrMovieCard from './HrMovieCard';
const MovieList = ({genreId, index_}) => {
const [movieList, SetmovieList] = useState([])
const elementRef= useRef()
const screenWidth = window.innerWidth;
useEffect(()=>{
getMovieByGenreId();
},[])

    const getMovieByGenreId = async()=>{
        const res = await GlobalApi.getMovieByGenreId(genreId);

        SetmovieList(res.data.results)
    }
    const sliderRight =(e)=>{
      e.scrollLeft +=500;
      }
      
      const sliderLeft =(e)=>{
         e.scrollLeft-=500; 
      }

  return (
    <>
    <div className='relative'>
    <HiChevronLeft className={`hidden md:block text-white text-[30px] absolute mx-8  cursor-pointer z-50  ${index_%3 ==0 ? 'mt-[80px]' : 'mt-[150px]'} ] `}onClick={()=>sliderLeft(elementRef.current)}/>

    <HiChevronRight className={`hidden md:block text-white text-[30px] absolute mx-8 right-0  cursor-pointer z-50 scroll-smooth ${index_%3 ==0 ? 'mt-[80px]' : 'mt-[150px]'} ]`}  onClick={()=>sliderRight(elementRef.current)}/>

    <div className='flex overflow-x-auto gap-8 scrollbar-none pt-4 px-3 pb-4 scroll-smooth' ref={elementRef}>

        {movieList.map((item,index)=>(

<>
{index_%3 ==0? <HrMovieCard movie={item}/> :  <MovieCard movie={item}/>   
          }

</>


          ))}
    </div>
    </div>
          </>
  )
}

export default MovieList