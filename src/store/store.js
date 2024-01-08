import { configureStore } from '@reduxjs/toolkit';
import customersReducer from '../features/CustomersSlice';
import sidebarReducer from '../features/Sidebar';

export const store = configureStore({
  reducer: {
    customers: customersReducer,
    sidebar: sidebarReducer,
  },
});
