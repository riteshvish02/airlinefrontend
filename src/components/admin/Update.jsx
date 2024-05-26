import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from '../../axios/axios'
function Update() {
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id);
    const[agencydata,setAgencydata] = useState(null)
      
        let [Agency,setagency] = useState("")
        let [modelNumber,setmodelNumber] = useState("")
        let [capacity,setcapacity] = useState("")
    const AgencyformHander = async (e)=>{
        e.preventDefault()
        try {
        const {data} = await axios.patch(`/airplanes/${id}`,{agencyname:Agency,modelNumber:modelNumber,capacity:capacity})
        console.log(data);
        navigate('/')
        toast.success("Agency updated successfully")
        } catch (error) {
          console.log(error);
       toast.error(error.response.data.error.Explanation)
        }
      }
    const getAgency = async ()=>{
        try {
            const {data} = await axios.get(`/airplanes/${id}`)
            // console.log(data.data);
            setAgencydata(data.data)
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(()=>{
        getAgency()
        
    },[])
  return agencydata && (
    <div className='w-full h-screen items-center justify-center flex'>
    <div className='w-[60vw] flex-col h-[85vh] shadow-lg bg-white border-[3px] flex items-center justify-center rounded'>
        <h2 className='text-3xl font-bold'>Update Route</h2>
    <form onSubmit={AgencyformHander} className='ml-10 mt-6 w-[80vh]  p-10 h-[40vh] rounded flex flex-col items-start gap-3 border-[2px] border-slate-300' action="">
            <h2 className='text-[2.5vh] font-medium'>Update Agency</h2>
            <input value={Agency} onChange={(e)=>setagency(e.target.value)} className='border-[1.2px] py-2 px-5'  type="text" placeholder='AgencyName' name='AgencyName' />
            <input value={modelNumber} onChange={(e)=>setmodelNumber(e.target.value)} className='border-[1.2px] py-2 px-5' type="text" placeholder='ModelNumber' name='modelNumber' />
            <input value={capacity} onChange={(e)=>setcapacity(e.target.value)} className='border-[1.2px] py-2 px-5' type="text" placeholder='capacity' name='capacity' />
            <button className='px-3 text-white rounded py-2 bg-blue-500'>
               Update
            </button>
        </form>
    </div>
    </div>
  )
}

export default Update
