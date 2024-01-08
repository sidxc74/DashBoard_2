import React from 'react'
import Navbar from '../Global/Navbar'
import { ResponsiveContainer } from 'recharts'
import Revenuemonthlly from '../Charts/Revenuemonthlly'
import Revenue from '../Charts/Revenue'
import Payout from '../Charts/Payout'
import Earnings from '../Charts/Earnings'
import Productivity from '../Charts/Productivity'

function Finance({setActive}) {
  return (
    <div className='w-[100%] min-h-screen'>
        <Navbar setActive={setActive}/>
        <div className='financelayer1 mt-10'>
          <Revenuemonthlly />  
          <Revenue />        
        </div>
        <div className='financelayer2'>
        <Payout />
        <Earnings />
        <Productivity />
        </div>
    </div>
  )
}

export default Finance