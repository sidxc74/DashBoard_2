import React from 'react'
import { BarChart, ResponsiveContainer, XAxis,YAxis, Bar, Cell, Tooltip } from 'recharts'

function Revenue() {
    const data = [
      { type: "Platform expense", value: 4000 },
      { type: "Payout", value: 11000 },
      { type: "Earnings", value: 28000 },
    ];
  
    const COLORS = ['#cf6679', '#03dac6', '#3700b3'];
  
    return (
      <div className="flex flex-col justify-center p-10 rounded-3xl w-[100%] bg-[#121212] items-center">
        <div className="text-3xl font-bold">Financial Summary</div>
        <div>This week</div>
        <ResponsiveContainer width="100%" >
          <BarChart data={data} height={300}>
            <XAxis dataKey="type" stroke="white" />
            <YAxis dataKey="value" stroke="white" domain={[0, 'dataMax + 5000']} />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" label={{ position: 'top' }}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

export default Revenue