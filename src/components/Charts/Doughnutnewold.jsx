import React from 'react';
import { useSelector } from 'react-redux';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

function DoughnutNewOld() {
  const customers = useSelector((state) => state.customers.customerData);
  const totalCustomers = customers.length;
  
  let newCustomers = 24;
  customers.forEach((customer) => (customer.customerType === 'New' ? newCustomers++ : null));
  const revisitCustomers = totalCustomers - newCustomers;
  const COLORS = ["#FF0266", "#3700b3"]

  const data = [
    { type: 'New', value: (newCustomers / 100) * 100 },
    { type: 'Revisiting', value: (revisitCustomers / 100) * 100 },
  ];
  
  return (
    <div className='w-[100%] bg-[#121212] ml-6 rounded-3xl p-4 flex flex-col items-center justify-center'>
      <div className='text-center text-2xl font-semibold text-opacity-90'>Total Customer: {totalCustomers}</div>
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
              return `${entry.type}: ${Math.round((entry.value / totalCustomers) * 100)}%`;
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

export default DoughnutNewOld;
