import React from 'react'
import {Routes,Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import Booking from './components/Booking'
import Create from './components/admin/Create'
import Update from './components/admin/Update'
import Passenger from './components/admin/Passenger'
import Updatepass from './components/admin/Updatepass'
import Flights from './components/admin/Flights'
const App = () => {
  return (
    <div>
      <nav className='w-full h-[8vh] items-center justify-between flex px-[15vh] bg-blue-500'>
          <h2 className='text-white text-[3vh] font-medium'>Flight And Bookings</h2>
          <div className=' flex items-center justify-center gap-3'>
            <Link to='/' className='text-white text-[2.5vh] font-semibold px-3 py-2 rounded-md bg-red-500'>Agency</Link>
            <Link to='/passenger' className='text-white text-[2.5vh] font-semibold px-3 py-2 rounded-md bg-red-500'>Passenger</Link>
            <Link to='/flights' className='text-white text-[2.5vh] font-semibold px-3 py-2 rounded-md bg-red-500'>Flights</Link>
            <Link to='/bookings' className='text-white text-[2.5vh] font-semibold px-3 py-2 rounded-md bg-red-500'>Bookings</Link>
          </div>
        </nav>
      <Routes>
        <Route path='/' element={<Create/>}></Route>
        <Route path='/passenger' element={<Passenger/>}></Route>
        <Route path='/agency/:id' element={<Update/>}></Route>
        <Route path='/update/pass/:id' element={<Updatepass/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/booking' element={<Booking/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/flights' element={<Flights/>}></Route>
      </Routes>
    </div>
  )
}

export default App
