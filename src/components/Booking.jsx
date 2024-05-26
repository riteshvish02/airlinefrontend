import React, { useEffect, useState } from 'react'
import axios from '../axios/booking'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

function Booking() {
  const [bookingsdata,setbookingsdata] = useState(null)
  const [flightId,setflightId] = useState('')
  const [userId,setuserId] = useState('')
  const [seats,setseats] = useState('')

  const bookingformHander = async (e)=>{
    e.preventDefault()
    try {
    const {data} = await axios.post('/bookings',{flightId,userId,seats})
    console.log(data);
    setflightId('')
    setseats('')
    setuserId('')
    getbookingdata()
    toast.success("booking created successfully")
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error.Explanation)

    }
  }

  const getbookingdata = async () => {
    const {data} = await axios.get('/bookings')
    setbookingsdata(data.data)
    console.log(data);
  }
  const userDeleteHandler = async (id) => {
    const d = await axios.delete(`/bookings/${id}`)
     var dets = bookingsdata.filter((item,index)=>{
       return item.id !== id
     })
     toast.success("booking deleted successfully")
   setbookingsdata(dets)
    
  }
 
  useEffect(()=>{
    getbookingdata()
  },[])
  return (
    <>
      <div className='w-full h-screen '>
      <h3 className='text-3xl font-semibold ml-10 mt-3 '>Admin Panel for users</h3>
      <form onSubmit={bookingformHander} className=' right-[8vh] top-[16vh] ml-10 mt-3 w-[100vh] p-10 h-[35vh] rounded flex flex-col items-start gap-3 border-[2px] border-slate-300' action="">
          <h2 className='text-[2.5vh] font-medium'>Create users</h2>
          <div className='flex gap-2'>
          <input value={flightId}  onChange={(e)=>setflightId(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='FlightId' name='address' />
          <input value={userId}  onChange={(e)=>setuserId(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='userId' name='gender' />
          <input value={seats}  onChange={(e)=>setseats(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='Seats  ' name='password' />
          </div>
            <button className='px-3 text-white rounded py-2 bg-blue-500'>
              Create
          </button>
      </form>

     <div className='w-[96vw] m-auto h-[1.2px] mt-4 bg-black'></div>
     <div className='w-full min-h-[30vh]'>
      <h3 className='text-3xl font-semibold ml-10 mt-3 '>Users data</h3>
       { bookingsdata ? 
         bookingsdata.map((booking,index)=>{
             return(
              <div className='w-[85vw] rounded-md gap-4  items-center justify-between flex px-[5vh] border-red-600 border-[2px] py-6 m-auto mt-4' >
              <h2 className='text-[2.8vh] font-medium'>
                Id : <span className='text-black'>{booking.id}</span>
              </h2>
              <h2 className='text-[2.8vh] font-medium'>
                FlightId : <span className='text-black text-[2.2vh]'>{booking.flightId}</span>
              </h2>
              <h2 className='text-[2.8vh] font-medium'>
                UserId : <span className='text-black text-[2.2vh]'>{booking.userId}</span>
              </h2>

              <h2 className='text-[2.8vh] font-medium'>
                Status : <span className='text-black text-[2.2vh]'>{booking.status}</span>
              </h2>
              <h2 className='text-[2.8vh] font-medium'>
                NOofSeats : <span className='text-black text-[2.2vh]'>{booking.noOfSeats}</span>
              </h2>
              <h2 className='text-[2.8vh] font-medium'>
                totalcost : <span className='text-black text-[2.2vh]'>{booking.totalcost}</span>
              </h2>
              <div className='flex  gap-4 justify-between'>
                <button onClick={()=>userDeleteHandler(booking.id)} className='px-3 flex h-[7vh] gap-2 items-center bg-red-500 text-white text-[2.5vh] rounded'>
                  <h2>Delete </h2> <i class="ri-chat-delete-fill"></i>
                </button>
                <Link to={`/update/booking/${booking.id}`} className='px-2 flex h-[7vh] gap-2 items-center bg-blue-500 text-white text-[2.5vh] rounded'>
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

export default Booking
