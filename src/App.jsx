
import React from "react"
import Sidebar from "./components/Global/Sidebar"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store/store"


function App() {


  

  return (
    <Provider store={store}>
       <Sidebar />
       <Outlet /> 
    </Provider>
      
  )
}

export default App
