import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { Toogle } from '../../features/Sidebar';


function Navbar({}) {

    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(Toogle())
    }

  return (
    <>
     <div className='w-[90%] mx-auto'>
      <div className='flex min-h-20 justify-between items-center   p-6  text-[150%] '>
      <button onClick={handleClick}><GiHamburgerMenu  style={{fontSize:"120%"}} /></button>
     <div className='flex items-center justify-between gap-4'>
        <input placeholder='Search' className='w-52 text-black h-8 bg-gray-200 px-2'/>
        <button><FaBell style={{color : 'yellow'}} /></button>
        <button><FaCircleUser style={{color : "ff69b4"}} /></button>
     </div>
      </div>
     </div>
    </>
  )
}

export default Navbar