import React from 'react'
import { PieChart, ResponsiveContainer,Pie,Cell } from 'recharts'

function CustomersType() {
    
    const data=[
        {type:"Walk in", value: 24},
        {type:"Web Link", value: 13},
        {type:"Platform", value: 38}
    ]

    const COLORS = ['#fecf33', '#3700b3', '#03dac6', '#8884d8'];

      
      return (
        <div className='w-[100%] bg-[#121212] ml-6 rounded-3xl p-4 flex flex-col items-center justify-center'>
          <div className='text-center text-2xl font-semibold text-opacity-90'>Total Customer: {75}</div>
            <PieChart width={400} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={(entry) => {
                  return `${entry.type}: ${Math.round((entry.value / 75) * 100)}%`;
                }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
        </div>
      );
    }

export default CustomersType