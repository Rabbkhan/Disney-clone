import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

const screenWidth = window.innerWidth;
const Slider = () => {

    const[movieList, setMovieList] = useState([])
    const elementRef= useRef()
  useEffect(() => {
    getTradingMovies();
  }, []);

  const getTradingMovies = async () => {
    try {
      const res = await GlobalApi.getTrendingVideos;
    
    //   console.log(res.data.results);
      setMovieList(res.data.results)
    } catch (error) {
      console.log(error);
    }
  };

const sliderRight =(e)=>{
e.scrollLeft +=screenWidth-110;
}

const sliderLeft =(e)=>{
   e.scrollLeft-=screenWidth-110; 
}
  return (
    <div>
<HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer ' onClick={()=>sliderLeft(elementRef.current)}/>
<HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 right-0 mt-[250px] cursor-pointer ' onClick={()=>sliderRight(elementRef.current)}/>
    <div className='flex overflow-x-auto w-full px-10 py-4 scrollbar-none scroll-smooth ' ref={elementRef}>

{movieList.map((item,index)=>(
    <img key={index} src={IMAGE_BASE_URL+item.backdrop_path}
    className='min-w-full md:h-[500px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-300 ease-in shadow-3xl  bg-white '
/>
))}

</div>
    </div>
  );
};

export default Slider;
