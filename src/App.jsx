import { useState } from "react"
import Sidebar from "./components/Global/Sidebar"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store/store"


function App() {


  

  return (
    <Provider store={store}>
    <div className ="flex min-h-screen min-w-screen bg-black text-white">
       <Sidebar />
       <Outlet /> 
    </div>
    </Provider>
      
  )
}

export default App
