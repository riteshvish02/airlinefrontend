import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../axios/passenaxios'
import { toast } from 'react-toastify'
function Passenger() {
    const [userdata,setuserdata] = useState(null)
  const [name,setname] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  const [gender,setgender] = useState('')
  const [address,setaddress] = useState('')
 
  const userformHander = async (e)=>{
    e.preventDefault()
    try {
    const {data} = await axios.post('/user/signup',{name:name,address:address,gender:gender,password:password,email:email})
    console.log(data);
    setaddress('')
    setemail('')
    setgender('')
    setname('')
    setpassword('')
    getuserdata()
    toast.success("user created successfully")
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error.Explanation)

    }
  }
  const getuserdata = async () => {
    const {data} = await axios.get('/user')
    setuserdata(data.data)
    console.log(data);
  }
  const userDeleteHandler = async (id) => {
    const d = await axios.delete(`/user/${id}`)
     var dets = userdata.filter((item,index)=>{
       return item.id !== id
     })
     toast.success("user deleted successfully")
   setuserdata(dets)
    
  }
 
  useEffect(()=>{
    getuserdata()
  },[])
  return  userdata && (
    <>
      <div className='w-full h-screen '>
        
        <h3 className='text-3xl font-semibold ml-10 mt-3 '>Admin Panel for users</h3>
      

        
        <form onSubmit={userformHander} className=' right-[8vh] top-[16vh] ml-10 mt-3 w-[100vh] p-10 h-[35vh] rounded flex flex-col items-start gap-3 border-[2px] border-slate-300' action="">
            <h2 className='text-[2.5vh] font-medium'>Create users</h2>
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
                Create
            </button>
        </form>

       <div className='w-[96vw] m-auto h-[1.2px] mt-4 bg-black'></div>
       <div className='w-full min-h-[30vh]'>
        <h3 className='text-3xl font-semibold ml-10 mt-3 '>Users data</h3>
         { userdata ? 
           userdata.map((user,index)=>{
               return(
                <div className='w-[85vw] rounded-md gap-4  items-center justify-between flex px-[5vh] border-red-600 border-[2px] py-6 m-auto mt-4' >
                <h2 className='text-[2.8vh] font-medium'>
                  Id : <span className='text-black'>{user.id}</span>
                </h2>
                <h2 className='text-[2.8vh] font-medium'>
                  Name : <span className='text-black text-[2.2vh]'>{user.username}</span>
                </h2>
                <h2 className='text-[2.8vh] font-medium'>
                  Email : <span className='text-black text-[2.2vh]'>{user.email}</span>
                </h2>
                <h2 className='text-[2.8vh] font-medium'>
                  Address : <span className='text-black text-[2.2vh]'>{user.address}</span>
                </h2>
                <h2 className='text-[2.8vh] font-medium'>
                  gender : <span className='text-black text-[2.2vh]'>{user.gender}</span>
                </h2>
                <div className='flex  gap-4 justify-between'>
                  <button onClick={()=>userDeleteHandler(user.id)} className='px-3 flex h-[7vh] gap-2 items-center bg-red-500 text-white text-[2.5vh] rounded'>
                    <h2>Delete </h2> <i class="ri-chat-delete-fill"></i>
                  </button>
                  <Link to={`/update/pass/${user.id}`} className='px-2 flex h-[7vh] gap-2 items-center bg-blue-500 text-white text-[2.5vh] rounded'>
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
