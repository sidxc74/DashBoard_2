import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip, Legend, XAxis, YAxis } from 'recharts';

function Productivity() {
  const payoutData = [
    { Type: 'Electrician', value: 80 },
    { Type: 'Plumber', value: 90 },
    { Type: 'Gardener', value: 75 },
    { Type: 'Cook', value: 85 },
  ];

  const COLORS = ['#fecf33', '#3700b3', '#03dac6', '#8884d8'];

  return (
    <div className='w-full flex flex-col justify-center items-center bg-[#121212] rounded-3xl p-6 my-10'>
      <div className='text-2xl font-bold text-center'>Productivity</div>
       
        <BarChart width={300} height={300} data={payoutData}>
          <XAxis dataKey='Type' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='value' fill='#8884d8'>
            {payoutData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
        
    </div>
  );
}

export default Productivity;
