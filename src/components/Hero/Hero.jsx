import React from 'react'
import Navbar from '../Global/Navbar'
import Upcoming from './Upcoming'
import { useSelector } from 'react-redux'
import RequestChart from '../Charts/RequestChart'
import WeeklyRequest from '../Charts/WeeklyRequest.'
import Rating from '../Charts/Rating'
import Revenue from '../Charts/Revenue'
import Time from '../Charts/Time'


function Hero({setActive}) {




  return (
    <>
        <div className='w-[100%]  min-h-screen '>
            <Navbar setActive={setActive}/>
            <div className= "layer1">
                <div className=' w-[100%] bg-[#121212] p-4 rounded-3xl  '>
                    <div><Upcoming /></div>
                </div>
                <div className=''>
                    <RequestChart height={180} />
                </div>
            </div>
            <div className='layer2'>
                <WeeklyRequest />
                <Rating />
                <Revenue />
            </div>
            <div className="layer3">
                <Time />
            </div>
        </div>
        

    </>
  )
}

export default Hero