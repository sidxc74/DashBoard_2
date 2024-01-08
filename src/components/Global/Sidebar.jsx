import React from 'react'
import { FaCircleNotch } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { MdOutlinePeople } from "react-icons/md";
import { CiLogout } from "react-icons/ci";


import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Sidebar() {



    const active = useSelector(state => state.sidebar.Active)

  return (
    <>
        <div className={`min-w-[15%]     bg-[#121212] ml-4 rounded-3xl mt-14 text-white text-center ${active ? "" : "hidden"}`}>
            <div className='flex  justify-center items-center gap-2 sm:flex-col   2xl:flex-row mx-auto text-center mt-10'>
            <FaCircleNotch/>
            <h2> OniT Assignment </h2>
            </div>
            <div className='flex flex-col mt-20 gap-10 justify-between items-center'>
                <NavLink to="/" className={({isActive}) => `w-[80%] min-h-12 p-2  rounded-2xl  flex justify-start gap-2 items-center flex-wrap ${isActive ? "bg-[#3700b3]" : ""}`}>
                    <IoIosHome />
                    <p>Dashboard</p>
                </NavLink>
                <NavLink to="/finance" className={({isActive}) => `w-[80%] min-h-12 p-2  rounded-2xl  flex justify-start gap-2 items-center flex-wrap ${isActive ? "bg-[#3700b3]" : ""}`}>
                    <FaRegMoneyBillAlt />
                    <p>Finance</p>
                </NavLink>
                <NavLink to="/customers" className={({isActive}) => `w-[80%] min-h-12 p-2  rounded-2xl  flex justify-start gap-2 items-center flex-wrap ${isActive ? "bg-[#3700b3]" : ""}`}>
                    <MdOutlinePeople />
                    <p>Customers</p>
                </NavLink>
                
                
            </div>
        </div>
    </>
  )
}





export default Sidebar