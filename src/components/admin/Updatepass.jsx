import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from '../../axios/passenaxios'
function Updatepass() {
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id);
    const[userdata,setuserdata] = useState(null)
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [gender,setgender] = useState('')
    const [address,setaddress] = useState('')
      
    const userformHander = async (e)=>{
        e.preventDefault()
        try {
        const {data} = await axios.patch(`/user/${id}`,{name:name,address:address,gender:gender,password:password,email:email})
        console.log(data);
        setaddress('')
        setemail('')
        setgender('')
        setname('')
        setpassword('')
        navigate('/passenger')
        toast.success("user created successfully")
        } catch (error) {
          console.log(error);
        }
      }
  
  return  (
    <div className='w-full h-screen items-center justify-center flex'>
    <div className='w-[70vw] flex-col h-[85vh] shadow-lg bg-white border-[3px] flex items-center justify-center rounded'>
        <h2 className='text-3xl font-bold'>Update Route</h2>
    <form onSubmit={userformHander} className='ml-10 mt-6 w-[100vh]  p-10 h-[40vh] rounded flex flex-col items-start gap-3 border-[2px] border-slate-300' action="">
            <h2 className='text-[2.5vh] font-medium'>Update User</h2>
            <div className='flex gap-2'>
            <input value={name}  onChange={(e)=>setname(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='Name' name='name' />
            <input value={email}  onChange={(e)=>setemail(e.target.value)} className='border-[1.2px] py-2 px-2' type="email" placeholder='email' name='email' />
            </div>
            <div className='flex gap-2'>
            <input value={address}  onChange={(e)=>setaddress(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='Address' name='address' />
            <input value={gender}  onChange={(e)=>setgender(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='gender' name='gender' />
            <input value={password}  onChange={(e)=>setpassword(e.target.value)} className='border-[1.2px] py-2 px-2' type="text" placeholder='password' name='password' />
            </div>
             <button className='px-3 text-white rounded py-2 bg-blue-500'>
               Update
            </button>
        </form>
    </div>
    </div>
  )
}

export default Updatepass
