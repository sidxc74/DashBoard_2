import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Rating() {


     const customers = useSelector(state => state.customers.customerData);

        const data = [
          { rating: '5 ⭐', count: 25 },
          { rating: '4 ⭐', count: 20 },
          { rating: '3 ⭐', count: 17 },
          { rating: '2 ⭐', count: 14 },
          { rating: '1 ⭐', count: 8 },
        ];
        


  return (
    <div className='flex w-[100%] flex-col justify-start items-center gap-6  p-10 bg-[#121212] rounded-3xl'>
     
     <div className='text-6xl font-bold mb-8'>Rating</div>   
  <ResponsiveContainer>
  <BarChart width={400} height={200} layout='vertical' data={data} >
      <XAxis dataKey="count" type="number" />
      <YAxis dataKey="rating" type="category" stroke="yellow" />
      <Tooltip />
      <Bar dataKey="count" fill="#FFF017" />
    </BarChart>
  </ResponsiveContainer>
     
    <div className='flex sm:flex-row lg:flex-col'>
    <div className=' flex flex-col justify-center items-center'>
      <div className='text-8xl font-semibold text-gray-200'>4.2</div>
     <div className='flex gap-1 text-yellow-300 text-2xl'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
     </div>
     <div className='text-4xl mt-4 font-semibold'>84 Total</div>
     <div className='my-12 flex flex-col justify-center items-center'>
      {customers
        .filter((customer) =>
          customer.serviceRequests.some((request) => request.completionDate !== null)
        )
        .slice(0, 3)
        .map((customer) => (
        <div key={customer.customerId} className='w-[90%] flex flex-col justify-center items-center gap-4 mx-auto'>
          <div  className='flex flex-col items-center justify-center p-4  border-b border-white'>
            <FaUserCircle style={{ color: "#03dac6", fontSize: "150%" }} />
            <div className='font-semibold text-lg mt-1'>{customer.name}</div>
            <div className='w-full mt-4'>
              {customer.serviceRequests.map(
                (request) =>
                  request.completionDate !== null && (
                    <div key={request.serviceId}>
                      {`"${request.review}"`}
                    </div>
                  )
              )}
            </div>
          </div>
          </div>
        ))}
     </div>
     
     </div>
    </div>

    </div>
  )
}

export default Rating