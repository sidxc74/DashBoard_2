import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import {RouterProvider, createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import Hero from './components/Hero/Hero.jsx'
import Finance from './components/finance/Finance.jsx'
import Customer from './components/customers/Customer.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="" element={<Hero />} />
        <Route path="finance" element={<Finance />} />
        <Route path="customers" element={<Customer />} />
      </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
