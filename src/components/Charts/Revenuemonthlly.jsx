import React from 'react'
import {ResponsiveContainer,Area,AreaChart,Legend,Tooltip,XAxis,YAxis } from 'recharts'
import { TbArrowZigZag } from "react-icons/tb";

function Revenuemonthlly() {


    const revenueData = [
        {month: 'August 2023', value : 4000},
        {month: 'September 2023', value : 7000},
        {month: 'October 2023', value : 11000},
        {month: 'November 2023', value : 9500},
        {month: 'December 2023', value : 8800},
        {month: 'January 2023', value : 14000}
    ]

  return (
    <div className='w-[100%] flex flex-col p-10 justify-center items-center bg-[#121212]   mx-auto text-white rounded-3xl'>
        <div className="text-3xl font-bold ">Revenue <span className='text-sm  text-green-500'>+24.8% <TbArrowZigZag style={{display:"inline"}} /></span></div>
    <ResponsiveContainer width="100%" aspect={3} >
      <AreaChart  data={revenueData}>
      <defs>
            <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="green" stopOpacity={0.8} />
              <stop offset="95%" stopColor="green" stopOpacity={0} />
            </linearGradient>
          </defs>
      <XAxis dataKey="month" stroke='white' />
      <YAxis  stroke='white'/>
      <Tooltip />
      <Legend />
      <Area dataKey="value" stackId="1" stroke="green" fill="url(#colorPurple)" />
      
    </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Revenuemonthlly