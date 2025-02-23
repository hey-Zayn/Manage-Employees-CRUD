// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Dashboard from "./components/Dashboard/Dashboard"
import AllEmployees from "./components/Dashboard/AllEmployees"
import Sidebar from "./components/Sidebar/Sidebar"
import AddNew from "./components/Dashboard/AddNew"

const App = () => {
  return (
    <BrowserRouter>
     <div className="flex ">
       <Sidebar/>
      <Routes>

        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/employees" element={<AllEmployees />}></Route>
        <Route path="/add" element={<AddNew />}></Route>

      </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App