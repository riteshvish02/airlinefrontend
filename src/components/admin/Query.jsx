import React, { useState } from 'react'
import axios from '../../axios/axios'
import instance from '../../axios/passenaxios'


const Query = () => {const [flightdata,setflightdata] = useState(null)

    const calldata = async ()=>{
        const {data} = await axios.get('/flights?trip=chen')
        setflightdata(data.data)
        console.log(data.data);
    }

    const calldata2 = async ()=>{
        const {data} = await axios.get('/flights?trips=chen-del')
        setflightdata(data.data)
        console.log(data.data);
    }

    const calldata3 = async ()=>{
        const det = await instance.get('/user/123')
         console.log(det);
        const {data} = await axios.get('/flights?trip=chen&tripDate=2024-05-26')
        setflightdata(data.data)
        console.log(data.data);
    }



  return (
    <div className='w-full min-h-[150vh] p-9'>
      <h2 className='text-[2.5vh]'>Question 1 : <span>Get the complete details of all flights to New Delhi</span></h2>
      <div className='flex gap-3 min-h-[10vh]'>

        <details onClick={calldata}>
           <summary className=' flex  w-[10vh] h-[5vh] justify-center items-center bg-green-400 rounded-md text-white'>Answer</summary>
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
                 
                </div>
              </div>
               )
           })
           : <h2>Loading....</h2>
         }
       </div>
        </details>
      </div>

      <h2 className='mt-[10vh] text-[2.5vh]'>Question 2 : <span> Get the details about all flights from Chennai to New Delhi. </span></h2>
      <div className='flex gap-3 min-h-[10vh]'>

        <details onClick={calldata2}>
           <summary className=' flex  w-[10vh] h-[5vh] justify-center items-center bg-green-400 rounded-md text-white'>Answer</summary>
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
                 
                </div>
              </div>
               )
           })
           : <h2>Loading....</h2>
         }
       </div>
        </details>
      </div>

      <h2 className='mt-[10vh] text-[2.5vh]'>Question 3 : <span> Find only the flight numbers for passenger with pid 123 for flights to Chennai before 
    06/11/2020.</span></h2>
      <div className='flex gap-3 min-h-[10vh]'>

        <details onClick={calldata3}>
           <summary className=' flex  w-[10vh] h-[5vh] justify-center items-center bg-green-400 rounded-md text-white'>Answer</summary>
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
                   FlightNumber : <span className='text-black'>{flight.flightNumber}</span>
                </h2>
               
                </div>
                
                
              </div>
               )
           })
           : <h2>Loading....</h2>
         }
       </div>
        </details>
      </div>
    </div>
  )
}

export default Query
