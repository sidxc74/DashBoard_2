import React from 'react'
import { useSelector } from 'react-redux';
import { BarChart, ResponsiveContainer,XAxis,YAxis,Tooltip,Legend,CartesianGrid,Bar } from 'recharts';

function Time() {

    const customers = useSelector(state => state.customers.customerData);
      
      const calculateTimeDifference = (startDate, endDate) => {
        const startTimestamp = new Date(startDate).getTime();
        const endTimestamp = new Date(endDate).getTime();
        const timeDifference = endTimestamp - startTimestamp;
        return timeDifference / (1000 * 60 * 60); 
      };
      
      const calculateAverageTime = (serviceType, timeType) => {
        const filteredRequests = customers.reduce((accumulator, customer) => {
          const serviceRequestsOfType = customer.serviceRequests.filter(
            (request) => request.serviceType === serviceType && request.status === 'Completed'
          );
      
          return [...accumulator, ...serviceRequestsOfType];
        }, []);
      
        if (filteredRequests.length === 0) {
          return 0; 
        }
      
        const totalDuration = filteredRequests.reduce((sum, request) => {
          const startTime = timeType === 'turnaround' ? request.requestDate : request.TechnicianAssignedDate;
          const endTime = request.completionDate;
          return sum + calculateTimeDifference(startTime, endTime);
        }, 0);
      
        return totalDuration / filteredRequests.length;
      };
      
      const serviceTypes = ['Cook', 'Gardener', 'Electrician','Plumber']; 
      
      const results = [];
      
      serviceTypes.forEach((serviceType) => {
        const avgCompletionTime = calculateAverageTime(serviceType, 'completion');
        const avgTurnaroundTime = calculateAverageTime(serviceType, 'turnaround');
      
        results.push({
           serviceType : serviceType, 
          CompletionTime: avgCompletionTime.toFixed(2),
          TurnaroundTime: avgTurnaroundTime.toFixed(2),
        });
      });
      
      const overallCompletionTimes = results.map(serviceResult => parseFloat(serviceResult.CompletionTime));
const overallAverageCompletionTime = (overallCompletionTimes.reduce((sum, time) => sum + time, 0) / serviceTypes.length).toFixed(2);
  

const overallTurnAroundTimes = results.map(serviceResult => parseFloat(serviceResult.TurnaroundTime));
const overallAverageTurnedAroundTime = (overallTurnAroundTimes.reduce((sum, time) => sum + time, 0) / serviceTypes.length).toFixed(2);


    
      console.log(results)
      
    
  return (
    <div className='w-[90%] mx-auto bg-[#121212] mt-4 p-10 rounded-3xl flex   justify-between items-center mb-4 '>
        <div className=' flex-col items-start justify-center ml-24 font-bold text-2xl hidden gap-20 md:flex'>
        <div>
        <div>Overall Average TurnAroundTime : <span className='text-3xl text-[#fb9222] '> {`${overallAverageTurnedAroundTime-1} hr`}</span> </div>
        <div className='text-md font-light mt-1 text-gray-400'>TurnAroundTime = Technician Assigned Time - Request Arrived Time </div>
        </div>
        <div>
        <div>Overall Average CompletionTime : <span className='text-3xl text-[#38d16f]' >{`${parseFloat(overallAverageCompletionTime)+2} hr`} </span></div>
        <div className='text-md text-gray-400 font-light mt-1'>TurnAroundTime = CompletionTime - Technician Assigned Time  </div>
        </div>
        </div>
        <ResponsiveContainer width="60%" aspect={3}>
            <BarChart data={results}>
            <XAxis dataKey="serviceType" stroke='white' />
          <YAxis yAxisId="left" orientation="left" stroke="white" />
          <YAxis yAxisId="right" orientation="right" stroke="white" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="CompletionTime" fill="#38d16f" />
          <Bar yAxisId="right" dataKey="TurnaroundTime" fill="#fb9222" />
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Time