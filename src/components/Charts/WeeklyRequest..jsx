import React, { useState } from 'react'
import { AreaChart,CartesianGrid,XAxis,YAxis,Area,Tooltip,Legend, ResponsiveContainer } from 'recharts'

function WeeklyRequest() {

    const data1 = [
        { day : 'mon', pendingRequests : '18', completedRequests : '25'},
        { day : 'tue', pendingRequests : '11', completedRequests : '33'},
        { day : 'wed', pendingRequests : '19', completedRequests : '28'},
        { day : 'thu', pendingRequests : '26', completedRequests : '32'},
        { day : 'fri', pendingRequests : '31', completedRequests : '59'},
        { day : 'sat', pendingRequests : '18', completedRequests : '78'},
        { day : 'sat', pendingRequests : '9', completedRequests : '92'},
    ]

    const data2 = [
        { day : 'mon', pendingRequests : '21', completedRequests : '32'},
        { day : 'tue', pendingRequests : '16', completedRequests : '43'},
        { day : 'wed', pendingRequests : '12', completedRequests : '56'},
        { day : 'thu', pendingRequests : '28', completedRequests : '32'},
        { day : 'fri', pendingRequests : '36', completedRequests : '25'},
        { day : 'sat', pendingRequests : '18', completedRequests : '68'},
        { day : 'sat', pendingRequests : '9', completedRequests : '92'},
    ]
    const [data,setdata] = useState(data1)

   const handeChange = (e) => {
        if(e.target.value === "Last Week")
        {
            setdata(data2)
        }
        else
        {
            setdata(data1)
        }
   }



  return (
    <div className=' flex flex-col  items-center bg-[#121212] w-[100%] rounded-3xl mx-auto  '>
        <div className='flex w-full px-20 justify-between items-center my-6'>
        <div className='font-bold text-2xl'> Daily Request Count</div>
        <select className="bg-[#3700b3] h-10 rounded-xl" onChange={handeChange}>
         <option>This Week</option>
         <option>Last Week</option>   
        </select>    
        </div>
      <ResponsiveContainer width="100%" aspect={2}>
      <AreaChart  data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <defs>
            <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#BB86FC" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#BB86FC" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colororange" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fb9222" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#fb9222" stopOpacity={0} />
            </linearGradient>
          </defs>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="pendingRequests" stackId="1" stroke="#fb9222" fill="url(#colororange)" />
      <Area type="monotone" dataKey="completedRequests" stackId="1" stroke="#BB86FC" fill="url(#colorPurple)" />
    </AreaChart>
      </ResponsiveContainer>

    </div>
  )
}

export default WeeklyRequest