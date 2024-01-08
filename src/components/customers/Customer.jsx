import React from 'react';
import Navbar from '../Global/Navbar';
import { useSelector } from 'react-redux';
import { HiUser } from "react-icons/hi2";
import DoughnutNewOld from '../Charts/Doughnutnewold';
import RequestChart from '../Charts/RequestChart';
import CustomersType from '../Charts/CustomersType';


function Customer({ setActive }) {
  const customers = useSelector(state => state.customers.customerData);

  return (
    <div className='w-[100%] '>
      <Navbar setActive={setActive} />
      <div className='customergrid my-10'>
        <div><DoughnutNewOld /></div>
        <div><RequestChart /></div>
        <div><CustomersType /></div>
      </div>
      <div className='p-4 max-w-full rounded-3xl bg-[#121212] m-10'>
        <table className='table-auto w-full overflow-x-auto'>
          <thead className="bg-[#3700b3] h-10 rounded-lg">
            <tr>
              <th className="border border-[#03dac6]">ID</th>
              <th className="border border-[#03dac6]">Name</th>
              <th className="border border-[#03dac6]">Phone</th>
              <th className="border border-[#03dac6]">Address</th>
              <th className="border border-[#03dac6]">Customer Type</th>
              <th className="border border-[#03dac6]">Service Request</th>
              <th className="border border-[#03dac6]">Source</th>
              <th className="border border-[#03dac6]">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer.customerId} className={index % 2 === 0 ? 'bg-[#121212]' : 'bg-[#1E1E1E]'}>
                <td className="border border-[#03dac6]">{customer.customerId}</td>
                <td className="border border-[#03dac6]">
                  <div className='flex items-center'>
                    {/* You can add an image tag here using customer.img */}
                    <HiUser style={{color : "#03dac6"}} />
                    <span>{customer.name}</span>
                  </div>
                </td>
                <td className="border border-[#03dac6]">{customer.phone}</td>
                <td className="border border-[#03dac6]">{customer.address}</td>
                <td className="border border-[#03dac6]">{customer.customerType}</td>
                <td className="border border-[#03dac6]">
                  {customer.serviceRequests.length > 0 ? (
                    <div>
                      <strong>Type:</strong> {customer.serviceRequests[0].serviceType}
                      <br />
                      <strong>Technician:</strong> {customer.serviceRequests[0].technicianAssigned}
                    </div>
                  ) : (
                    'No Service Request'
                  )}
                </td>
                <td className="border border-[#03dac6]">{customer.serviceRequests.length > 0 ? customer.serviceRequests[0].source : '-'}</td>
                <td className="border border-[#03dac6]">{customer.serviceRequests.length > 0 ? customer.serviceRequests[0].status : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customer;
