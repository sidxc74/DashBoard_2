import React from 'react'
import { useSelector } from 'react-redux'
import { BarChart,Tooltip,Legend,Bar,XAxis, YAxis, ResponsiveContainer } from 'recharts';

function RequestChart({height = 300}) {

    const customers = useSelector(state => state.customers.customerData);

    let pendingRequests = -12;
    let completedRequests = 30;
    customers.map((customer) => (customer.serviceRequests.map(service => service.status ==="Pending" ? pendingRequests++ : completedRequests++)))
    let totalRequest = pendingRequests+completedRequests
    console.log(pendingRequests,completedRequests,totalRequest)

    const data = [
        { name: 'Pending Requests', value: pendingRequests },
        { name: 'Completed Requests', value: completedRequests },
        {name : 'Cancelled Requests', value: 4 }
      ];





  return (
    <div className='w-100 bg-[#121212] mr-6 rounded-3xl p-4 flex flex-col items-center justify-center'>
    <div className='text-center text-2xl font-semibold text-opacity-90'>Total Requests : {totalRequest}</div>
      <ResponsiveContainer width="100%" aspect={2.8}>
      <BarChart   data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#fecf33"/>
      </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RequestChart