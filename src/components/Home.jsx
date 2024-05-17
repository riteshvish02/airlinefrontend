import React, { useEffect } from 'react'
import axios from '../axios/axios'
const Home = () => {
  const getflights = async ()=>{
    const {data} = await axios.get('/flights')
    console.log(data.data);
  }
  useEffect(()=>{
    getflights()
  },[])
  return (
    <div className='w-full h-[120vh]'>
      <nav className='w-full h-[8vh] text-white flex items-center justify-between px-[25vh] bg-[#2874F0] '>
        <h2 style={{fontFamily:"cursive"}} className='font-medium text-[3vh] '>Travels</h2>
        <div className='text-[2.5vh] font-semibold flex items-center gap-4'>
            <h2>My account</h2>
            <h2>More</h2>
        </div>
      </nav>
      <div  className='p-1 w-full cursor-pointer '>
        <div style={{backgroundImage:"url('https://rukminim2.flixcart.com/www/2000/2000/promos/06/01/2021/276bd352-f8b3-49cf-87e9-c853e6dbd5ac.jpg?q=50')",backgroundSize:"cover",backgroundPosition:"top"}} className='flex items-end justify-center pb-10 w-full h-[65vh] '>
            <div className='w-[88%] flex items-end justify-center pb-7 h-[25vh] bg-white'>
                <div>
                    <form className='flex gap-[1.2vh] items-baseline justify-center' action="">
                    <div className='flex relative items-baseline gap-1'>
                    <h2 className='flex flex-col relative'>
                      <div className='w-[30vh] h-[35vh] top-[7vh] shadow-md border-[2px] bg-white absolute'>
                        <h2 className='m-1 text-[1.8vh] font-medium text-slate-800'>RECENT SEARCHES</h2>
                        <div>

                        </div>
                      </div>
                    <input style={{borderRight:"none"}} className='cursor-pointer rounded-[2px] outline-none  px-3 py-[1.3vh]  text-[2.3vh] border-[#999] border-[1px]' type="text" placeholder='From' />
                    <h3 className='text-[2vh] ml-1 text-[#777]'>Any worldwide city or airport</h3>
                    </h2>
                    <h2>
                      <img className='absolute border-[1px] left-[28vh] top-[1.1vh] scale-[1] border-[#C2C2C2] p-1 rounded-full' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgY2xhc3M9Ik5RUHREeCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTUtNWgyNHYyNEgtNXoiLz48cGF0aCBmaWxsPSIjQzJDMkMyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0wIDhsNS4wNzggNnYtMy42SDE0VjhIMHptMTQtMkw4LjkyMiAwdjMuNkgwVjZoMTR6Ii8+PC9nPjwvc3ZnPg==" alt="" />
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
        <div className='w-full pl-[12vh] pt-[2.5vh] text-black h-[100vh] mt-1'>
          <h2 className='text-[5vh] font-bold'>Find your next destination</h2>
          <h3 className='text-[2vh] text-slate-600 font-medium'>Pick a vibe and explore the top destinations from Bhopal</h3>
          <div className='flex gap-[4vh] pt-4 text-[1.8vh]'>
            <button className='px-2 border-[1.8px] border-blue-600  pr-5 rounded-[100px] flex items-center h-[6.5vh] justify-center '>
              <img className='scale-[0.5] w-[6vh] ' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLjU0MSAyMS4zMjVsLTkuNTg4LTEwYTQuOTIzIDQuOTIzIDAgMSAxIDYuOTUtNi45NzZsMS41NjcgMS41NjZhLjc1Ljc1IDAgMCAwIDEuMDYgMGwxLjU2Ni0xLjU2NmE0LjkyMyA0LjkyMyAwIDAgMSA2Ljk2MyA2Ljk2MmwtOS42IDEwLjAxNGgxLjA4MnptLTEuMDgyIDEuMDM4YS43NS43NSAwIDAgMCAxLjA4MiAwbDkuNTktMTAuMDAzYTYuNDE4IDYuNDE4IDAgMCAwLS4wMTItOS4wNyA2LjQyMyA2LjQyMyAwIDAgMC05LjA4My0uMDAxTDExLjQ3IDQuODU0aDEuMDZsLTEuNTY2LTEuNTY2YTYuNDIzIDYuNDIzIDAgMSAwLTkuMDgyIDkuMDg2bDkuNTc3IDkuOTl6Ii8+PC9zdmc+" alt="" />
             <h2>Romantic</h2>
            </button>
            <button className='px-2 border-[1.8px] border-blue-600  pr-5 rounded-[100px] flex items-center h-[6.5vh] justify-center '>
              <img className='scale-[0.5] w-[6vh] ' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE4Ljc1IDEyLjc1YTQuNSA0LjUgMCAxIDEtOSAwIDQuNSA0LjUgMCAwIDEgOSAwem0xLjUgMGE2IDYgMCAxIDAtMTIgMCA2IDYgMCAwIDAgMTIgMHptLS4wOC03LjA4NWwtMS4wODQtMi4xNzFhMi4yNSAyLjI1IDAgMCAwLTIuMDEzLTEuMjQ0aC01LjY0NmEyLjI1IDIuMjUgMCAwIDAtMi4wMTMgMS4yNDRMOC4zMyA1LjY2MyA5IDUuMjVIMi4yNUEyLjI1IDIuMjUgMCAwIDAgMCA3LjV2MTJhMi4yNSAyLjI1IDAgMCAwIDIuMjUgMi4yNWgxOS41QTIuMjUgMi4yNSAwIDAgMCAyNCAxOS41di0xMmEyLjI1IDIuMjUgMCAwIDAtMi4yNS0yLjI1SDE5LjVsLjY3LjQxNXptLTEuMzQuNjdhLjc1Ljc1IDAgMCAwIC42Ny40MTVoMi4yNWEuNzUuNzUgMCAwIDEgLjc1Ljc1djEyYS43NS43NSAwIDAgMS0uNzUuNzVIMi4yNWEuNzUuNzUgMCAwIDEtLjc1LS43NXYtMTJhLjc1Ljc1IDAgMCAxIC43NS0uNzVIOWEuNzUuNzUgMCAwIDAgLjY3LS40MTVsMS4wODYtMi4xN2EuNzUuNzUgMCAwIDEgLjY3LS40MTVoNS42NDdhLjc1Ljc1IDAgMCAxIC42NzEuNDE1bDEuMDg1IDIuMTd6TTQuMTI0IDkuNzVhLjM3NS4zNzUgMCAxIDEgMC0uNzUuMzc1LjM3NSAwIDAgMSAwIC43NS43NS43NSAwIDAgMCAwLTEuNSAxLjEyNSAxLjEyNSAwIDEgMCAwIDIuMjUgMS4xMjUgMS4xMjUgMCAwIDAgMC0yLjI1Ljc1Ljc1IDAgMCAwIDAgMS41ek02IDZWNC41YS43NS43NSAwIDAgMC0xLjUgMFY2QS43NS43NSAwIDAgMCA2IDZ6Ii8+PC9zdmc+" alt="" />
             <h2>Sightseeing</h2>
            </button>
            <button className='px-2 border-[1.8px] border-blue-600  pr-5 rounded-[100px] flex items-center h-[6.5vh] justify-center '>
              <img className='scale-[0.5] w-[6vh] ' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE4Ljk0OCAxMi43MjNhOS44OCA5Ljg4IDAgMCAwIDQuMzk1LTIuNTYgMi4yNSAyLjI1IDAgMCAwLTMuMTg0LTMuMTggNS40NzUgNS40NzUgMCAwIDEtMy44NDMgMS41OTFoLS4zODRhNS40NzYgNS40NzYgMCAwIDEtMy44NDItMS41OTMgMi4yNSAyLjI1IDAgMCAwLTMuMTgxIDMuMTgzIDkuODc4IDkuODc4IDAgMCAwIDQuMzkzIDIuNTZMMTIuNzUgMTJ2Mi41NWwuMzE0LS42MS0yLjQ5MyAxLjc4MkEzLjc1IDMuNzUgMCAwIDAgOSAxOC43NzJ2Mi45NzhhMi4yNSAyLjI1IDAgMCAwIDQuNSAwdi0yLjk3OGwtLjMxNC42MSAzLTIuMTQzTDE1IDE2LjYzdjEuNWEzLjc3NCAzLjc3NCAwIDAgMCAxLjA5NyAyLjY1bDIuNTYyIDIuNTYyYTIuMjUgMi4yNSAwIDEgMCAzLjE4Mi0zLjE4MmwtMi41Ni0yLjU2LjIxOS41M1YxMmwtLjU1Mi43MjN6bS0uMzk2LTEuNDQ2QS43NS43NSAwIDAgMCAxOCAxMnY2LjEyOWMwIC4xOTkuMDguMzkuMjIuNTNsMi41NiAyLjU2YS43NS43NSAwIDAgMS0xLjA2IDEuMDYybC0yLjU2LTIuNTYxYTIuMjcyIDIuMjcyIDAgMCAxLS42Ni0xLjU5M3YtMS40OThhLjc1Ljc1IDAgMCAwLTEuMTg2LS42MWwtMyAyLjE0M2EuNzUuNzUgMCAwIDAtLjMxNC42MXYyLjk3OGEuNzUuNzUgMCAwIDEtMS41IDB2LTIuOTc4YzAtLjcyNi4zNTEtMS40MDcuOTQzLTEuODNsMi40OTMtMS43ODJhLjc1Ljc1IDAgMCAwIC4zMTQtLjYxVjEyYS43NS43NSAwIDAgMC0uNTUyLS43MjMgOC4zNzggOC4zNzggMCAwIDEtMy43MjctMi4xNzIuNzUuNzUgMCAxIDEgMS4wNi0xLjA2MiA2Ljk3OSA2Ljk3OSAwIDAgMCA0Ljg5OSAyLjAzMWguMzg4YTYuOTc4IDYuOTc4IDAgMCAwIDQuOS0yLjAzLjc1Ljc1IDAgMSAxIDEuMDYzIDEuMDYgOC4zOCA4LjM4IDAgMCAxLTMuNzI5IDIuMTczem0tLjE3Ny03LjUyN2ExLjg3NSAxLjg3NSAwIDEgMS0zLjc1IDAgMS44NzUgMS44NzUgMCAwIDEgMy43NSAwem0xLjUgMGEzLjM3NSAzLjM3NSAwIDEgMC02Ljc1IDAgMy4zNzUgMy4zNzUgMCAwIDAgNi43NSAwek0zIDYuNzVhLjc1Ljc1IDAgMSAxLTEuNSAwIC43NS43NSAwIDAgMSAxLjUgMHptMS41IDBhMi4yNSAyLjI1IDAgMSAwLTQuNSAwIDIuMjUgMi4yNSAwIDAgMCA0LjUgMHpNNC43MDQuMDIyQTIuMjUgMi4yNSAwIDAgMCAzIDIuMjA1VjYuNzVhLjc1Ljc1IDAgMCAwIDEuNSAwVjIuMjA1YS43NS43NSAwIDAgMSAuNTY4LS43MjcuNzUuNzUgMCAxIDAtLjM2NC0xLjQ1NnpNNiAxNS43NWEuNzUuNzUgMCAxIDEtMS41IDAgLjc1Ljc1IDAgMCAxIDEuNSAwem0xLjUgMGEyLjI1IDIuMjUgMCAxIDAtNC41IDAgMi4yNSAyLjI1IDAgMCAwIDQuNSAwek02IDEydjMuNzVhLjc1Ljc1IDAgMCAwIDEuNSAwVjEyQS43NS43NSAwIDAgMCA2IDEyeiIvPjwvc3ZnPg==" alt="" />
            <h2>NightLife</h2>
            </button>
            <button className='px-2 border-[1.8px] border-blue-600  pr-5 rounded-[100px] flex items-center h-[6.5vh] justify-center '>
              <img className='scale-[0.5] w-[6vh] ' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIuNzUgNmg5LjVhLjI1LjI1IDAgMCAxLS4yNS0uMjV2MTcuNWwuNzUtLjc1SDIuMjVsLjc1Ljc1VjUuNzVhLjI1LjI1IDAgMCAxLS4yNS4yNXptMC0xLjVjLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1djE3LjVjMCAuNDE0LjMzNi43NS43NS43NWgxMC41YS43NS43NSAwIDAgMCAuNzUtLjc1VjUuNzVjMC0uNjktLjU2LTEuMjUtMS4yNS0xLjI1aC05LjV6bTMtMS41aDMuNUEuMjUuMjUgMCAwIDEgOSAyLjc1djIuNWwuNzUtLjc1aC00LjVsLjc1Ljc1di0yLjVhLjI1LjI1IDAgMCAxLS4yNS4yNXptMC0xLjVjLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1djIuNWMwIC40MTQuMzM2Ljc1Ljc1Ljc1aDQuNWEuNzUuNzUgMCAwIDAgLjc1LS43NXYtMi41YzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNWgtMy41ek01LjI1IDloNC41YS43NS43NSAwIDAgMCAwLTEuNWgtNC41YS43NS43NSAwIDAgMCAwIDEuNXptMCAzaDQuNWEuNzUuNzUgMCAwIDAgMC0xLjVoLTQuNWEuNzUuNzUgMCAwIDAgMCAxLjV6bTAgM2g0LjVhLjc1Ljc1IDAgMCAwIDAtMS41aC00LjVhLjc1Ljc1IDAgMCAwIDAgMS41em0wIDNoNC41YS43NS43NSAwIDAgMCAwLTEuNWgtNC41YS43NS43NSAwIDAgMCAwIDEuNXptMCAzaDQuNWEuNzUuNzUgMCAwIDAgMC0xLjVoLTQuNWEuNzUuNzUgMCAwIDAgMCAxLjV6TTcuNS43NXYxLjVhLjc1Ljc1IDAgMCAwIDEuNSAwVi43NWEuNzUuNzUgMCAwIDAtMS41IDB6TTE1Ljc1IDI0aDZhLjc1Ljc1IDAgMCAwIC43NS0uNzVWMTAuNUExLjUgMS41IDAgMCAwIDIxIDloLTQuNWExLjUgMS41IDAgMCAwLTEuNSAxLjV2MTIuNzVhLjc1Ljc1IDAgMCAwIDEuNSAwVjEwLjVIMjF2MTIuNzVsLjc1LS43NWgtNmEuNzUuNzUgMCAwIDAgMCAxLjV6TTE5LjUgOC4yNXYxLjVhLjc1Ljc1IDAgMCAwIDEuNSAwdi0xLjVhLjc1Ljc1IDAgMCAwLTEuNSAwek0uNzUgMjRoMjIuNWEuNzUuNzUgMCAwIDAgMC0xLjVILjc1YS43NS43NSAwIDAgMCAwIDEuNXoiLz48L3N2Zz4=" alt="" />
            <h2>City trip</h2>
            </button>
          </div>
          <div className='flex gap-[2.5vh] pt-9'>
            <div className='w-[25vh] h-[28vh] '>
              <img className='w-full h-[60%] object-cover object-center rounded-md' src="https://q-xx.bstatic.com/xdata/images/city/263x210/684757.jpg?k=5cd52ccbba6806c371689dab0da9678a5c1f4dcef697ea976a000f5e53ac4f18&o=" alt="" />
              <h2 className='text-[2.3vh] font-bold'>Panaji</h2>
              <h3 className='text-slate-600'>Mon, Jun 17 · One way</h3>
            </div>
            <div className='w-[25vh] h-[28vh] '>
              <img className='w-full h-[60%] object-cover object-center rounded-md' src="https://q-xx.bstatic.com/xdata/images/city/263x210/684569.jpg?k=a5ec6ac66c784664fb76a1f709993769fd7875bfcfdbc2c5efebb72f3782815f&o=" alt="" />
              <h2 className='text-[2.3vh] font-bold'>Cochin</h2>
              <h3 className='text-slate-600'>Mon, Jun 17 · One way</h3>
            </div>
            <div className='w-[25vh] h-[28vh] '>
              <img className='w-full h-[60%] object-cover object-center rounded-md' src="https://q-xx.bstatic.com/xdata/images/city/263x210/684568.jpg?k=2e0d30ebcaf31e7469617ea53a01cdaf68d14c506d1167af9b9b38e53832f156&o=" alt="" />
              <h2 className='text-[2.3vh] font-bold'>kolkata</h2>
              <h3 className='text-slate-600'>Mon, Jun 17 · One way</h3>
            </div>
            <div className='w-[25vh] h-[28vh] '>
              <img className='w-full h-[60%] object-cover object-center rounded-md' src="https://q-xx.bstatic.com/xdata/images/city/263x210/684511.jpg?k=4ee759f0ea5c88e018f4e67af90dedaae2e34313d84b228b841bb2c8f3741875&o=" alt="" />
              <h2 className='text-[2.3vh] font-bold'>Ahmedabad</h2>
              <h3 className='text-slate-600'>Mon, Jun 17 · One way</h3>
            </div>
            <div className='w-[25vh] h-[28vh] '>
              <img className='w-full h-[60%] object-cover object-center rounded-md' src="https://q-xx.bstatic.com/xdata/images/city/263x210/688741.jpg?k=90d9f411ca7d02653401dea272db943f137c11196b88096c46cde440503ece84&o=" alt="" />
              <h2 className='text-[2.3vh] font-bold'>Phuket town</h2>
              <h3 className='text-slate-600'>Mon, Jun 17 · One way</h3>
            </div>
          </div>
          <div>
            <h2 className='text-[3.5vh] font-bold'>Trending cities</h2>
            <h3 className='text-[2vh] text-slate-600 font-medium'>Book flights to a destination popular with travelers from India</h3>
            <div className='flex gap-[2vh] pt-2'>
            <div className='w-[35vh] h-[45vh] '>
              <img className='w-full h-[60%] object-cover object-center rounded-md' src="https://q-xx.bstatic.com/xdata/images/city/526x420/684764.webp?k=49cc399ccbdec7d3a1419b46e85b917d9b7ecf8940cdc826c5e41e1c8c23e356&o=" alt="" />
              <h2 className='text-[2.3vh] font-bold'>New Delhi, India</h2>
              <h3 className='text-slate-600'>Flights from Raja Bhoj Airport</h3>
            </div>
            <div className='w-[35vh] h-[45vh] '>
              <img className='w-full h-[60%] object-cover object-center rounded-md' src="https://q-xx.bstatic.com/xdata/images/city/526x420/971345.webp?k=876d6b28526147e7d0ac47379a0b3dff50b1de05e5249a159a2cfb64b3e2d397&o=" alt="" />
              <h2 className='text-[2.3vh] font-bold'>Mumbai, India</h2>
              <h3 className='text-slate-600'>Flights from Raja Bhoj Airport</h3>
            </div>
            <div className='w-[35vh] h-[45vh] '>
              <img className='w-full h-[60%] object-cover object-center rounded-md' src="https://q-xx.bstatic.com/xdata/images/city/526x420/684757.webp?k=7f36d2b34248c1f6298747b3048f56708682070ce0ff57af8103d932ff708326&o=" alt="" />
              <h2 className='text-[2.3vh] font-bold'>Dabolim, India</h2>
              <h3 className='text-slate-600'>Flights from Raja Bhoj Airport</h3>
            </div>
            <div className='w-[35vh] h-[45vh] '>
              <img className='w-full h-[60%] object-cover object-center rounded-md' src="https://q-xx.bstatic.com/xdata/images/city/526x420/684533.webp?k=67972bfc01525b685792e2719666319e1d719b2cba91ba9a4a145f37f19655b8&o=" alt="" />
              <h2 className='text-[2.3vh] font-bold'>Bangalore, India</h2>
              <h3 className='text-slate-600'>Flights from Raja Bhoj Airport</h3>
            </div>
            <div className='w-[35vh] h-[45vh] '>
              <img className='w-full h-[60%] object-cover object-center rounded-md' src="https://q-xx.bstatic.com/xdata/images/city/526x420/977219.webp?k=5195e2536fa76cce99b3832db957dd594556791764839bb4ac3a64278c99ff4d&o=" alt="" />
              <h2 className='text-[2.3vh] font-bold'>Bhopal to Dubai</h2>
              <h3 className='text-slate-600'>Flights from Raja Bhoj Airport</h3>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
