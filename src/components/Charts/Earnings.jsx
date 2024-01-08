import React from 'react';
import { ResponsiveContainer, Pie, PieChart, Cell, Tooltip } from 'recharts';

function Earnings() {
  const EarningsData = [
    { Type: 'Electrician', value: (8000 / 28000).toFixed(1) * 100 },
    { Type: 'Plumber', value: (7700/ 11000).toFixed(1) * 100 },
    { Type: 'Gardener', value: (6300 / 11000).toFixed(1) * 100 },
    { Type: 'Cook', value: (7000 / 11000).toFixed(1) * 100 },
  ];

  const COLORS = ['#fecf33', '#3700b3', '#03dac6', '#8884d8'];

  const RADIAN = Math.PI / 180;
 
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
    <div className='w-full flex justify-center items-center bg-[#121212] rounded-3xl p-6 my-10'>
      <div className='flex gap-8'>
      <div>
      <div className='text-2xl font-bold text-center'>Total Earnings</div>
      <div className='text-3xl text-[#cf6679] font-bold text-center'>₹28000</div>
        <PieChart width={200} height={300}>
          <Pie
            data={EarningsData}
            cx='50%'
            cy='50%'
            label={renderCustomizedLabel}
            labelLine={false}
            outerRadius={80}
            fill='#8884d8'
            dataKey='value'
          >
            {EarningsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </div>
      </div>
      <div className='flex flex-col items-start justify-center'>
        <div className='flex items-center justify-between gap-2'>
            <div className='w-2 h-2 rounded-full bg-[#fecf33]'></div>
            <div>  Electrician</div>
        </div>
        <div className='flex items-center justify-between gap-2'>
            <div className='w-2 h-2 rounded-full bg-[#3700b3]'></div>
            <div>  Plumber</div>
        </div>
        <div className='flex items-center justify-between gap-2'>
            <div className='w-2 h-2 rounded-full bg-[#03dac6]'></div>
            <div>  Gardener</div>
        </div>
        <div className='flex items-center justify-between gap-2'>
            <div className='w-2 h-2 rounded-full bg-[#3700b3]'></div>
            <div>  Cook</div>
        </div>
      </div>
      </div>
  );
}

export default Earnings;