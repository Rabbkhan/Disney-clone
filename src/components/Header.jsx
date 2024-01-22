import React, { useState } from 'react'
import logo from './../assets/images/logo.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
const Header = () => {

const[toggle,setToggle] =useState(false);


    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]

  return (
    <div className='flex  items-center justify-between p-5'>
<div className='flex gap-8 items-center'>
<img src={logo} alt='logo'  className='w-[80px]  md:w-[115px] object-cover'/>
<div className='hidden md:flex gap-8'>

{menu.map((item,index)=>(
    <HeaderItem key={index} name={item.name} Icon={item.icon}/>
    ))}
    </div>

    <div className='md:hidden flex gap-8'>
    {menu.map((item,index)=>index<3 &&(
    <HeaderItem key={index} name={''} Icon={item.icon}/>
    ))}
    <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
        <HeaderItem name={''} Icon={HiDotsVertical} />
      {toggle ?  <div className='absolute bg-[#121212] z-50 mt-3 p-3 border-[1px] border-gray-700 px-5 py-4' >
        {menu.map((item,index)=>index>2 &&(
    <HeaderItem key={index} name={item.name} Icon={item.icon}/>
    ))}
        </div> :null }  
    </div>
    </div>
</div>




    <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" className='w-[40px] rounded-full' alt=''/>


    </div>
  )
}

export default Header