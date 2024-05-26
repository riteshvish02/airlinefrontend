import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from '../../axios/axios'
function Updateflights() {
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id);
    const [flightdata,setflightdata] = useState(null)
    const [ flightNumber,setflightNumber] = useState("")
    const [AgenciesId,setAgenciesId]  = useState("")
    const [arrivalAirportId,setarrivalAirportId] = useState("")
    const [departureAirportId,setdepartureAirportId] = useState("")
    const [ arrivalTime,setarrivalTime] = useState("")
    const [ departureTime,setdepartureTime] = useState("")
    const [ price,setprice] = useState("")
    const [boardingGate,setboardingGate] = useState("")
    const [ totalSeats,settotalSeats] = useState("")
    
  const flightformHander = async (e)=>{
    e.preventDefault()
    try {
            // const {data} = await axios.post('/flights',{flightNumber,AgenciesId,arrivalAirportId,departureAirportId,arrivalTime,departureTime,boardingGate,totalSeats,price})
        const {data} = await axios.patch(`/flights/${id}`,{flightNumber,AgencyId:AgenciesId,arrivalAirportId,departureAirportId,arrivalTime,departureTime,boardingGate,totalSeats,price})
    console.log(data);
    navigate(-1)
    toast.success("flight updated successfully")
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
            <h2 className='text-[2.5vh] font-medium'>update flights</h2>
            <div className='flex gap-2'>
            <input value={flightNumber}  onChange={(e)=>setflightNumber(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='FlightNumber' name='name' />
            <input value={AgenciesId}  onChange={(e)=>setAgenciesId(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='AgencyId' name='email' />
            <input value={arrivalAirportId}  onChange={(e)=>setarrivalAirportId(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='arrivalAirportId' name='email' />
            </div>
            <div className='flex gap-2'>
            <input value={departureAirportId}  onChange={(e)=>setdepartureAirportId(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='departureAirportId' name='address' />
            <input value={arrivalTime}  onChange={(e)=>setarrivalTime(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='arrivalTime' name='gender' />
            <input value={departureTime}  onChange={(e)=>setdepartureTime(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='departureTime' name='password' />
            </div>
            <div className='flex gap-2'>
            <input value={price}  onChange={(e)=>setprice(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='price' name='address' />
            <input value={boardingGate}  onChange={(e)=>setboardingGate(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='boardingGate' name='gender' />
            <input value={totalSeats}  onChange={(e)=>settotalSeats(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='totalSeats' name='password' />
            </div>
              <button className='px-3 text-white rounded py-2 bg-blue-500'>
                update
            </button>
        </form>
    </div>
    </div>
  )
}

export default Updateflights
