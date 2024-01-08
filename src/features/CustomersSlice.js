import { createSlice } from '@reduxjs/toolkit';
import customers from '../databse2';

const initialState = {
  customerData: customers,
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
        console.log("hello")
    
    }
    }
      
});

export const {addCustomer} = customerSlice.actions

export default customerSlice.reducer