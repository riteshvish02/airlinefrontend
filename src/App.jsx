import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import Booking from './components/Booking'
import Create from './components/admin/Create'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Create/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/booking' element={<Booking/>}></Route>
        <Route path='/flightd' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App
