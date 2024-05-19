import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../axios/axios'
import { toast } from 'react-toastify'
function Create() {
  const [Airportdata,setAirportdata] = useState(null)
  const [Agency,setagency] = useState("")
  const [modelNumber,setmodelNumber] = useState("")
  const [capacity,setcapacity] = useState("")
  const [airport,setairport] = useState("")
  const [cityID,setcityID] = useState("")
  const [address,setaddress] = useState("")
  const [citycode,setcitycode] = useState("")
  const [city,setcity] = useState("")
  const AgencyformHander = async (e)=>{
    e.preventDefault()
    try {
    const {data} = await axios.post('/airplanes',{AgencyName:Agency,modelNumber:modelNumber,capacity:capacity})
    console.log(data);
    setagency('')
    setcapacity('')
    setmodelNumber('')
    toast.success("Agency created successfully")
    } catch (error) {
      console.log(error);
    }
  }

  

  const cityFormHandler = async (e)=>{
    e.preventDefault()
    try {
    const {data} = await axios.post('/cities',{name:city})
    console.log(data);
    setcity('')
    toast.success("city created successfully")
    } catch (error) {
      console.log(error);
    }
  }
  const AirportformHander = async (e)=>{
    e.preventDefault()
    try {
    const {data} = await axios.post('/airports',{name:airport,code:citycode,cityId:cityID,address:address})
    console.log(data);
    setairport('')
    setcitycode('')
    setaddress('')
    setcityID('')
    toast.success("airport created successfully")
    } catch (error) {
      console.log(error);
    }
  }

  const getAirport = async () => {
    const {data} = await axios.get('/airports')
    console.log(data.data);
    setAirportdata(data.data)
  }
  const airportDeleteHandler = async (id) => {
     const d = axios.delete(`/airports/${id}`)
   }
  useEffect(()=>{
      getAirport()
  },[])
  return Airportdata ?   (
    <>
      <div className='w-full h-screen '>
        <nav className='w-full h-[8vh] items-center justify-between flex px-[15vh] bg-blue-500'>
          <h2 className='text-white text-[3vh] font-medium'>Flight And Bookings</h2>
          <div className=' flex items-center justify-center gap-3'>
            <Link to='/' className='text-white text-[2.5vh] font-semibold px-3 py-2 rounded-md bg-red-500'>Agency</Link>
            <Link to='/passenger' className='text-white text-[2.5vh] font-semibold px-3 py-2 rounded-md bg-red-500'>Passenger</Link>
            <Link to='/flights' className='text-white text-[2.5vh] font-semibold px-3 py-2 rounded-md bg-red-500'>Flights</Link>
            <Link to='/bookings' className='text-white text-[2.5vh] font-semibold px-3 py-2 rounded-md bg-red-500'>Bookings</Link>
          </div>
        </nav>
        <h3 className='text-3xl font-semibold ml-10 mt-3 '>Admin Panel for Agencies and Airports</h3>
      <form onSubmit={AgencyformHander} className='ml-10 mt-6 w-[70vh]  p-10 h-[40vh] rounded flex flex-col items-start gap-3 border-[2px] border-slate-300' action="">
            <h2 className='text-[2.5vh] font-medium'>Create Agency</h2>
            <input value={Agency} onChange={(e)=>setagency(e.target.value)} className='border-[1.2px] py-2 px-5'  type="text" placeholder='AgencyName' name='AgencyName' />
            <input value={modelNumber} onChange={(e)=>setmodelNumber(e.target.value)} className='border-[1.2px] py-2 px-5' type="text" placeholder='ModelNumber' name='modelNumber' />
            <input value={capacity} onChange={(e)=>setcapacity(e.target.value)} className='border-[1.2px] py-2 px-5' type="text" placeholder='capacity' name='capacity' />
            <button className='px-3 text-white rounded py-2 bg-blue-500'>
                Create
            </button>
        </form>

        <form onSubmit={cityFormHandler} className='ml-10 mt-3 w-[50vh] p-10 h-[28vh] rounded flex flex-col items-start gap-3 border-[2px] border-slate-300' action="">
            <h2 className='text-[2.5vh] font-medium'>Create Cities</h2>
            <input value={city}  onChange={(e)=>setcity(e.target.value)}  className='border-[1.2px] py-2 px-2' type="text" placeholder='Name' name='name' />
            <button className='px-3 text-white rounded py-2 bg-blue-500'>
                Create
            </button>
        </form>
        <form onSubmit={AirportformHander} className='absolute right-[8vh] top-[16vh] ml-10 mt-3 w-[100vh] p-10 h-[35vh] rounded flex flex-col items-start gap-3 border-[2px] border-slate-300' action="">
            <h2 className='text-[2.5vh] font-medium'>Create Airports</h2>
            <div className='flex gap-2'>
            <input value={airport}  onChange={(e)=>setairport(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='Name' name='name' />
            <input value={cityID}  onChange={(e)=>setcityID(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='CityId' name='cityId' />
            </div>
            <div className='flex gap-2'>
            <input value={address}  onChange={(e)=>setaddress(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='Address' name='address' />
            <input value={citycode}  onChange={(e)=>setcitycode(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='Citycode' name='code' />
            </div>
              <button className='px-3 text-white rounded py-2 bg-blue-500'>
                Create
            </button>
        </form>

       <div className='w-[96vw] m-auto h-[1.2px] mt-4 bg-black'></div>
       <div className='w-full min-h-[50vh]'>
        <h3 className='text-3xl font-semibold ml-10 mt-3 '>Airports data</h3>
         {
           Airportdata.map((airport,index)=>{
               return(
                <div className='w-[85vw] rounded-md gap-4  items-center justify-between flex px-[5vh] border-red-600 border-[2px] py-6 m-auto mt-4' >
                <h2 className='text-[2.8vh] font-medium'>
                  Id : <span className='text-black'>{airport.id}</span>
                </h2>
                <h2 className='text-[2.8vh] font-medium'>
                  Name : <span className='text-black text-[2.2vh]'>{airport.name}</span>
                </h2>
                <h2 className='text-[2.8vh] font-medium'>
                  Code : <span className='text-black text-[2.2vh]'>{airport.code}</span>
                </h2>
                <h2 className='text-[2.8vh] font-medium'>
                  Address : <span className='text-black text-[2.2vh]'>{airport.address}</span>
                </h2>
                <div className='flex  gap-4 justify-between'>
                  <button onClick={()=>airportDeleteHandler(airport.id)} className='px-3 flex h-[7vh] gap-2 items-center bg-red-500 text-white text-[2.5vh] rounded'>
                    <h2>Delete </h2> <i class="ri-chat-delete-fill"></i>
                  </button>
                  <button className='px-2 flex h-[7vh] gap-2 items-center bg-blue-500 text-white text-[2.5vh] rounded'>
                   <h2> update </h2><i class="ri-pencil-fill"></i>
                  </button>
                </div>
              </div>
               )
           })
         }
       </div>
       <div className='w-full min-h-[50vh]'>
        <h3 className='text-3xl font-semibold ml-10 mt-3 '>Agency data</h3>
         {
           Airportdata.map((airport,index)=>{
               return(
                <div className='w-[85vw] rounded-md gap-4  items-center justify-between flex px-[5vh] border-red-600 border-[2px] py-6 m-auto mt-4' >
                <h2 className='text-[2.8vh] font-medium'>
                  Id : <span className='text-black'>{airport.id}</span>
                </h2>
                <h2 className='text-[2.8vh] font-medium'>
                  Name : <span className='text-black text-[2.2vh]'>{airport.name}</span>
                </h2>
                <h2 className='text-[2.8vh] font-medium'>
                  Code : <span className='text-black text-[2.2vh]'>{airport.code}</span>
                </h2>
                <h2 className='text-[2.8vh] font-medium'>
                  Address : <span className='text-black text-[2.2vh]'>{airport.address}</span>
                </h2>
                <div className='flex  gap-4 justify-between'>
                  <button onClick={()=>airportDeleteHandler(airport.id)} className='px-3 flex h-[7vh] gap-2 items-center bg-red-500 text-white text-[2.5vh] rounded'>
                    <h2>Delete </h2> <i class="ri-chat-delete-fill"></i>
                  </button>
                  <button className='px-2 flex h-[7vh] gap-2 items-center bg-blue-500 text-white text-[2.5vh] rounded'>
                   <h2> update </h2><i class="ri-pencil-fill"></i>
                  </button>
                </div>
              </div>
               )
           })
         }
       </div>
      </div>
    </>
  ) : (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className='text-3xl font-semibold'>Loading...</h1>
    </div>
  )
}

export default Create
