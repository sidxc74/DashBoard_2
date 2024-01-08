import React from 'react'
import { useSelector } from 'react-redux'

function Upcoming() {
    const customers = useSelector(state => state.customers.customerData);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.serviceRequests.length > 0 &&
      customer.serviceRequests[0].TechnicianAssignedDate === null
  );
  return (
    <div>
      <div className=' w-[100%] text-[#cf6679] font-bold text-center text-3xl mb-4'>Technician Not Assigned</div>
      <div className='max-h-40 overflow-y-scroll'>
      {filteredCustomers.length > 0 ? (
        filteredCustomers.map((customer) => (
          <div key={customer.customerId} className='flex items-center justify-between border border-[#cf6679] p-2 mb-4'>
            <div>{customer.customerId}</div>
            <div>{customer.name}</div>
            <div>{customer.phone}</div>
            <div>
              {customer.serviceRequests.length > 0 &&
                customer.serviceRequests[0].serviceType}
            </div>
            <div>
              {customer.serviceRequests.length > 0 &&
                customer.serviceRequests[0].requestDate}
            </div>
          </div>
        ))
      ) : (
        <p>No customers with null TechnicianAssignedDate.</p>
      )}
      </div>
    </div>
  );
      }  

export default Upcoming;