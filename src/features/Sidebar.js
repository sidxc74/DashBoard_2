import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Active: true,
  };

export const sidebarSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
      Toogle: (state, action) => {
          state.Active = !state.Active
      }
      }
        
  });
  
  export const {Toogle} = sidebarSlice.actions
  
  export default sidebarSlice.reducer