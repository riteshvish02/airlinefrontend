import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../axios/axios'
import { toast } from 'react-toastify'
function Passenger() {
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
    
  const userformHander = async (e)=>{
    e.preventDefault()
    try {
            // const {data} = await axios.post('/flights',{flightNumber,AgenciesId,arrivalAirportId,departureAirportId,arrivalTime,departureTime,boardingGate,totalSeats,price})
        const {data} = await axios.post('/flights',{flightNumber,AgencyId:AgenciesId,arrivalAirportId,departureAirportId,arrivalTime,departureTime,boardingGate,totalSeats,price})
    console.log(data);
    setflightNumber('')
    setAgenciesId('')
    setarrivalAirportId('')
    setdepartureAirportId('')
    setarrivalTime('')
    setdepartureTime('')
    setprice('')
    setboardingGate('')
    settotalSeats('')
    getflightdata()
    toast.success("flight created successfully")
    } catch (error) {   
      console.log(error);
      toast.error(error.response.data.error.Explanation)
    }
  }
  const getflightdata = async () => {
    const {data} = await axios.get('/flights')
    setflightdata(data.data)
    console.log(data.data);
  }
  const flightDeleteHandler = async (id) => {
    const d = await axios.delete(`/flights/${id}`)
    var dets = flightdata.filter((item,index)=>{
      return item.id !== id
    })
    toast.success("flights deleted successfully")
    setflightdata(dets)
 }
 
  useEffect(()=>{
    getflightdata()
  },[])
  return   (
    <>
      <div className='w-full h-screen '>
        
        <h3 className='text-3xl font-semibold ml-10 mt-3 '>Admin Panel for flights</h3>
      

        
        <form onSubmit={userformHander} className=' right-[8vh] top-[16vh] ml-10 mt-3 w-[100vh] p-10 h-[45vh] rounded flex flex-col items-start gap-3 border-[2px] border-slate-300' action="">
            <h2 className='text-[2.5vh] font-medium'>Create flights</h2>
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
                Create
            </button>
        </form>

       <div className='w-[96vw] m-auto h-[1.2px] mt-4 bg-black'></div>
       <div className='w-full min-h-[30vh]'>
        <h3 className='text-3xl font-semibold ml-10 mt-3 '>Flights data</h3>
         { flightdata ? 
           flightdata.map((flight,index)=>{
              const deprdate = new Date(flight.departureTime)
              const arrdate = new Date(flight.arrivalTime)
               return(
                <div className='w-[85vw] flex-col  rounded-md gap-4  items-center justify-between flex px-[5vh] border-red-600 border-[2px] py-[9vh] m-auto mt-4' >
                <div className='flex items-center justify-between gap-[10vh]'>
                <h2 className='text-[2.8vh] font-medium'>
                   FlightId : <span className='text-black'>{flight.id}</span>
                </h2>
                <h2 className='text-[2.8vh] font-medium'>
                  AgencyName : <span className='text-black text-[2.2vh]'>{flight.AgencyDetail.agencyname}</span>
                </h2>

                <h2 className='text-[2.8vh] font-medium'>
                  totalSeats : <span className='text-black text-[2.2vh]'>{flight.totalSeats}</span>
                </h2>
                <h2 className='text-[2.8vh] font-medium'>
                 Price : <span className='text-black text-[2.2vh]'>{flight.price}</span>
                </h2>
                </div>
                <div className='w-[80vw] h-[2px] bg-red-500'></div>
                <div className='flex items-center justify-between gap-[10vh] bg-slate-300 p-2 rounded py-5'>
               <div className='flex flex-col gap-2'>
                  <h2 className='text-[2.8vh] font-medium'>
                      DepartureAirport : <span className='text-black text-[2.2vh]'>{flight.DepartureAirport.name} ({flight.DepartureAirport.code})</span>
                  </h2>
                  <h2 className='text-[2.8vh] font-medium'>
                      DepartureTime : <span className='text-black text-[2.2vh]'>{(deprdate).toString()}</span>
                  </h2>
                  <h2 className='text-[2.8vh] font-medium'>
                      City : <span className='text-black text-[2.2vh]'>{flight.DepartureAirport.City.name} </span>
                  </h2>
                  <h2 className='text-[2.8vh] font-medium'>
                      Address : <span className='text-black text-[2.2vh]'>{flight.DepartureAirport.address}</span>
                  </h2>
               </div>
                <div className='flex flex-col gap-2 '>
                  <h2 className='text-[2.8vh] font-medium'>
                      ArrivalAirport : <span className='text-black text-[2.2vh]'>{flight.ArrivalAirport.name} ({flight.ArrivalAirport.code})</span>
                  </h2>
                  <h2 className='text-[2.8vh] font-medium'>
                  ArrivalTime : <span className='text-black text-[2.2vh]'>{(arrdate).toString()}</span>
                  </h2>
                  <h2 className='text-[2.8vh] font-medium'>
                      City : <span className='text-black text-[2.2vh]'>{flight.ArrivalAirport.City.name} </span>
                  </h2>
                  <h2 className='text-[2.8vh] font-medium'>
                      Address : <span className='text-black text-[2.2vh]'>{flight.ArrivalAirport.address}</span>
                  </h2>
                </div>
                </div>
                <div className='flex  gap-4 justify-between'>
                  <button onClick={()=>flightDeleteHandler(flight.id)} className='px-3 flex h-[7vh] gap-2 items-center bg-red-500 text-white text-[2.5vh] rounded'>
                    <h2>Delete </h2> <i class="ri-chat-delete-fill"></i>
                  </button>
                  <Link to={`/update/flight/${flight.id}`} className='px-2 flex h-[7vh] gap-2 items-center bg-blue-500 text-white text-[2.5vh] rounded'>
                   <h2> update </h2><i class="ri-pencil-fill"></i>
                  </Link>
                </div>
              </div>
               )
           })
           : <h2>Loading....</h2>
         }
       </div>
      
      </div>
    </>
  ) 
}

export default Passenger
