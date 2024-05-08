import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-[120vh]'>
      <nav className='w-full h-[8vh] text-white flex items-center justify-between px-[25vh] bg-[#2874F0] '>
        <h2 style={{fontFamily:"cursive"}} className='font-medium text-[3vh] '>Travels</h2>
        <div className='text-[2.5vh] font-semibold flex items-center gap-4'>
            <h2>My account</h2>
            <h2>More</h2>
        </div>
      </nav>
      <div  className='p-2 w-full cursor-pointer '>
        <div style={{backgroundImage:"url('https://rukminim2.flixcart.com/www/2000/2000/promos/06/01/2021/276bd352-f8b3-49cf-87e9-c853e6dbd5ac.jpg?q=50')",backgroundSize:"cover",backgroundPosition:"top"}} className='flex items-end justify-center pb-10 w-full h-[65vh] '>
            <div className='w-[88%] flex items-end justify-center pb-7 h-[25vh] bg-white'>
                <div>
                    <form className='flex gap-[1.2vh] items-baseline justify-center' action="">
                    <div className='flex relative items-baseline gap-1'>
                    <h2 className='flex flex-col '>
                    <input style={{borderRight:"none"}} className='cursor-pointer rounded-[2px] outline-none  px-3 py-[1.3vh]  text-[2.3vh] border-[#999] border-[1px]' type="text" placeholder='From' />
                    <h3 className='text-[2vh] ml-1 text-[#777]'>Any worldwide city or airport</h3>
                    </h2>
                    <h2>
                      <img className='absolute border-[1px] left-[29.5vh] top-[1.1vh] scale-[0.8] border-[#C2C2C2] p-1 rounded-full' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgY2xhc3M9Ik5RUHREeCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTUtNWgyNHYyNEgtNXoiLz48cGF0aCBmaWxsPSIjQzJDMkMyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0wIDhsNS4wNzggNnYtMy42SDE0VjhIMHptMTQtMkw4LjkyMiAwdjMuNkgwVjZoMTR6Ii8+PC9nPjwvc3ZnPg==" alt="" />
                    <input style={{borderLeft:"none"}} className='cursor-pointer outline-none px-3 py-[1.3vh] text-[2.3vh] border-[#999] border-[1px]' type="text" placeholder='To' />
                    <h3 className='text-[2vh] ml-1 text-[#777]'>Any worldwide city or airport</h3>
                    </h2>
                    </div>
                    <input className='rounded-[3px] cursor-pointer outline-none px-3 py-[1.3vh] text-[2.3vh] border-[#999] border-[1px] w-[20vh]' type="date" placeholder='Date' />
                    <input className=' rounded-[3px] cursor-pointer outline-none px-3 py-[1.3vh] text-[2.3vh] border-[#999] border-[1px] w-[20vh]' type="date" placeholder='Date' />
                    <input className='rounded-[3px] cursor-pointer outline-none pl-2 pr-3 py-[1.3vh] text-[2.3vh] border-[#999] border-[1px] ' type="text" placeholder='1 Traveller | Economy ' />
                    <button className='cursor-pointer text-[2.5vh] text-white px-2 py-[1.2vh] rounded bg-blue-500'>Search</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='w-full h-[35vh] pt-2'>
            <img className='w-full h-full object-cover object-center' src="https://gos3.ibcdn.com/img-1656683092.jpg" alt="" />
        </div>
        <div className='w-full p-2 text-white h-[10vh] bg-[#000000dc] mt-1'>
            <h2>Owned By : <span>pvt limited.</span></h2>
        </div>
      </div>
    </div>
  )
}

export default Home
