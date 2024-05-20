import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import Booking from './components/Booking'
import Create from './components/admin/Create'
import Update from './components/admin/Update'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Create/>}></Route>
        <Route path='/agency/:id' element={<Update/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/booking' element={<Booking/>}></Route>
        <Route path='/flight' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App
