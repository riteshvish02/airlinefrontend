import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from '../../axios/booking'
function Updatebooking() {
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id);
    const [bookingsdata,setbookingsdata] = useState(null)
  const [flightId,setflightId] = useState('')
  const [userId,setuserId] = useState('')
  const [seats,setseats] = useState('')
    
  const flightformHander = async (e)=>{
    e.preventDefault()
    try {
            // const {data} = await axios.post('/flights',{flightNumber,AgenciesId,arrivalAirportId,departureAirportId,arrivalTime,departureTime,boardingGate,totalSeats,price})
        const {data} = await axios.patch(`/bookings/${id}`,{flightId,userId,seats})
    console.log(data);
    navigate(-1)
    toast.success("booking updated successfully")
    } catch (error) {   
      console.log(error);
      toast.error(error.response.data.error.Explanation)
    }
  }
  
  return  (
    <div className='w-full h-screen items-center justify-center flex'>
    <div className='w-[70vw] flex-col h-[85vh] shadow-lg bg-white border-[3px] flex items-center justify-center rounded'>
        <h2 className='text-3xl font-bold'>Update Route</h2>
        <form onSubmit={flightformHander} className=' right-[8vh] top-[16vh] ml-10 mt-3 w-[100vh] p-10 h-[45vh] rounded flex flex-col items-start gap-3 border-[2px] border-slate-300' action="">
            <h2 className='text-[2.5vh] font-medium'>Update booking</h2>
            <div className='flex gap-2'>
          <input value={flightId}  onChange={(e)=>setflightId(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='FlightId' name='address' />
          <input value={userId}  onChange={(e)=>setuserId(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='userId' name='gender' />
          <input value={seats}  onChange={(e)=>setseats(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='Seats  ' name='password' />
          </div>
              <button className='px-3 text-white rounded py-2 bg-blue-500'>
                update
            </button>
        </form>
    </div>
    </div>
  )
}

export default Updatebooking
