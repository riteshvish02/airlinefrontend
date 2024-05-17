import React from 'react'

function Search() {
  return (
    <>
      <div className='w-full overflow-x-hidden'>
      <nav className='w-full h-[8vh] text-white flex items-center justify-between px-[25vh] bg-[#2874F0] '>
        <h2 style={{fontFamily:"cursive"}} className='font-medium text-[3vh] '>Travels</h2>
        <div className='text-[2.5vh] font-semibold flex items-center gap-4'>
            <h2>My account</h2>
            <h2>More</h2>
        </div>
      </nav>
        <div className='w-full h-[18vh] bg-[#172337]'>
        <div className='w-[88%] m-auto flex items-end justify-center pb-7 h-[18vh] text-white '>
                <div>
                    <form className='flex gap-[1.2vh] items-baseline justify-center' action="">
                    <div className='flex relative items-baseline gap-1'>
                    <h2 className='flex flex-col relative'>
                      {/* <div className='w-[30vh] h-[35vh] top-[7vh] shadow-md border-[2px] bg-white absolute'>
                        <h2 className='m-1 text-[1.8vh] font-medium text-slate-800'>RECENT SEARCHES</h2>
                        <div>

                        </div>
                      </div> */}
                    <input style={{borderRight:"none"}} className='bg-[#2F394B] cursor-pointer rounded-[2px] text-[#ffff] outline-none  px-3 py-[1.3vh]  text-[2.3vh] border-[#999] border-[1px]' type="text" placeholder='From' />
                    <h3 className='text-[2vh] ml-1 text-[#777]'>Any worldwide city or airport</h3>
                    </h2>

                    <h2>
                      {/* <img className='absolute border-[1px] left-[28vh] top-[1.1vh] scale-[1] border-[#C2C2C2] p-1 rounded-full' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgY2xhc3M9Ik5RUHREeCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTUtNWgyNHYyNEgtNXoiLz48cGF0aCBmaWxsPSIjQzJDMkMyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0wIDhsNS4wNzggNnYtMy42SDE0VjhIMHptMTQtMkw4LjkyMiAwdjMuNkgwVjZoMTR6Ii8+PC9nPjwvc3ZnPg==" alt="" /> */}
                    <input style={{borderLeft:"none"}} className='bg-[#2F394B] cursor-pointer outline-none px-3 py-[1.3vh] text-[2.3vh] border-[#999] border-[1px]' type="text" placeholder='To' />
                    <h3 className='text-[2vh] ml-1 text-[#777]'>Any worldwide city or airport</h3>
                    </h2>
                    </div>
                    <input className='bg-[#2F394B] rounded-[3px] cursor-pointer outline-none px-3 py-[1.3vh] text-[2.3vh] border-[#999] border-[1px] w-[20vh]' type="date" placeholder='Date' />
                    <input className='bg-[#2F394B] rounded-[3px] cursor-pointer outline-none px-3 py-[1.3vh] text-[2.3vh] border-[#999] border-[1px] w-[20vh]' type="date" placeholder='Date' />
                    <input className='bg-[#2F394B] rounded-[3px] cursor-pointer outline-none pl-2 pr-3 py-[1.3vh] text-[2.3vh] border-[#999] border-[1px] ' type="text" placeholder='1 Traveller | Economy ' />
                    <button className='bg-[#FB641B] cursor-pointer text-[2.5vh] text-white px-2 py-[1.2vh] rounded'>Search</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='w-full h-[100vh] flex'>
          <div className='w-[40vh] h-[80vh] shadow-lg border-[2px] p-5 m-5 '>
            <h2 className='text-2xl font-semibold'>Filter By</h2>
            <hr className='my-2' />
            <div className='w-full '>
              <h3 className='text-[2.3vh] font-medium mt-2'>Departure from Bangkok</h3>
                <div >
                <div className='flex justify-between my-2'>
                  <div className='flex items-center'> <input className='w-[2.5vh] border-[1.5px] mr-1 h-[2.5vh]' type="checkbox" /> <h3>Early Morning</h3></div>
                    <h2 className='text-xs font-medium text-slate-800'>12am - 6am</h2>
                </div>
                <div className='flex justify-between my-2'>
                  <div className='flex items-center'> <input className='w-[2.5vh] border-[1.5px] mr-1 h-[2.5vh]' type="checkbox" /> <h3>Morning</h3></div>
                    <h2 className='text-xs font-medium text-slate-800'>12am - 6am</h2>
                </div>
                <div className='flex justify-between my-2'>
                  <div className='flex items-center'> <input className='w-[2.5vh] border-[1.5px] mr-1 h-[2.5vh]' type="checkbox" /> <h3>Afternoon</h3></div>
                    <h2 className='text-xs font-medium text-slate-800'>12am - 6am</h2>
                </div>
                <div className='flex justify-between my-2'>
                  <div className='flex items-center'> <input className='w-[2.5vh] border-[1.5px] mr-1 h-[2.5vh]' type="checkbox" /> <h3>Night</h3></div>
                    <h2 className='text-xs font-medium text-slate-800'>12am - 6am</h2>
                </div>
                </div>
            </div>
            <hr className='my-2' />
              <div>
              <h3 className='text-[2.3vh] font-medium mt-2'>Price</h3>
                <input className='w-full bg-red-600' type="range" />
              </div>
              <div>
                <hr className='my-2' />
              <h3 className='text-[2.3vh] font-medium mt-2'>Duration</h3>
                <input className='w-full bg-red-600' type="range" />
              </div>
              <hr className='my-2' />
              <div >
                <div className='flex justify-between my-2'>
                  <div className='flex items-center'> 
                   <input className='w-[2.5vh] border-[1.5px] mr-2 h-[2.5vh]' type="checkbox" /> 
                   <img className='w-[2.6vh]' src="https://rukminim2.flixcart.com/fk-p-travel/100/100/storage/airlineLogos/airlineImage-WY.png?q=50" alt="" />
                   <h3>Oman Av</h3>
                   </div>
                </div>
                <div className='flex justify-between my-2'>
                  <div className='flex items-center'>
                     <input className='w-[2.5vh] border-[1.5px] mr-2 h-[2.5vh]' type="checkbox" /> 
                   <img className='w-[2.6vh]' src="https://rukminim2.flixcart.com/fk-p-travel/100/100/storage/airlineLogos/airlineImage-EK.png?q=50" alt="" />
                     <h3>Emirates</h3>
                     </div>
                </div>
                <div className='flex justify-between my-2'>
                  <div className='flex items-center'>
                   <input className='w-[2.5vh] border-[1.5px] mr-2 h-[2.5vh]' type="checkbox" /> 
                   <img className='w-[2.6vh] mr-1' src="https://rukminim2.flixcart.com/fk-p-travel/100/100/storage/airlineLogos/airlineImage-AI.png?q=50" alt="" />
                   <h3>Air India</h3>
                   </div>
                </div>
                
                </div>
          </div>
          <div  className=' w-[140vh] pt-5 min-h-[80vh]'>
            <div className='book mt-3 w-full h-[15vh] shadow-lg border-[2px] flex items-center justify-center px-[10vh]'>
              <div>
                <img className='w-[5vh]' src="https://rukminim2.flixcart.com/fk-p-travel/100/100/storage/airlineLogos/airlineImage-SL.png?q=50" alt="" />
                <h2 className='text-[1.8vh] ml-[-1.3vh]'>Air India | SL-218 </h2>
              </div>
              <div className='flex w-[50vh] ml-[15vh] justify-center gap-[8vh]  items-center'>
                <div className='flex flex-col items-end'>
                  <h3 className='text-slate-600'>DMK</h3>
                  <h2 className='text-[3vh] font-semibold'>20:05</h2>
                </div>
                <div className='flex flex-col items-center'>
                <span className='mb-[-1.3vh] text-slate-500 text-xs font-medium'>4h 35m</span>
                   <h2>-------------</h2>
                  <span className='mt-[-1.3vh] text-slate-500 text-xs font-medium'>Non stop</span>
                </div>
                <div className='flex flex-col items-start'>
                  <h3 className='text-slate-600'>BOM</h3>
                  <h2 className='text-[3vh] font-semibold'>20:05</h2>
                </div>
               
              </div>
              <div className='flex items-center gap-[3vh] ml-5'>
                  <div className='flex flex-col items-end'>
                  <h3 className='text-[3vh] font-semibold'>₹15,919</h3>
                  <h2 className='text-[1.6vh] text-green-500 font-medium'>₹1273 + ₹140 off on UPI | FKCCDC</h2>
                  </div>
                  <button className=' text-[2.5vh] Book px-5 py-2 rounded-md bg-orange-500 text-white'>
                    <h2>Book</h2>
                  </button>
                </div>
            </div>
            <div className='book mt-3 w-full h-[15vh] shadow-lg border-[2px] flex items-center justify-center px-[10vh]'>
              <div>
                <img className='w-[5vh]' src="https://rukminim2.flixcart.com/fk-p-travel/100/100/storage/airlineLogos/airlineImage-SL.png?q=50" alt="" />
                <h2 className='text-[1.8vh] ml-[-1.3vh]'>Air India | SL-218 </h2>
              </div>
              <div className='flex w-[50vh] ml-[15vh] justify-center gap-[8vh]  items-center'>
                <div className='flex flex-col items-end'>
                  <h3 className='text-slate-600'>DMK</h3>
                  <h2 className='text-[3vh] font-semibold'>20:05</h2>
                </div>
                <div className='flex flex-col items-center'>
                <span className='mb-[-1.3vh] text-slate-500 text-xs font-medium'>4h 35m</span>
                   <h2>-------------</h2>
                  <span className='mt-[-1.3vh] text-slate-500 text-xs font-medium'>Non stop</span>
                </div>
                <div className='flex flex-col items-start'>
                  <h3 className='text-slate-600'>BOM</h3>
                  <h2 className='text-[3vh] font-semibold'>20:05</h2>
                </div>
               
              </div>
              <div className='flex items-center gap-[3vh] ml-5'>
                  <div className='flex flex-col items-end'>
                  <h3 className='text-[3vh] font-semibold'>₹15,919</h3>
                  <h2 className='text-[1.6vh] text-green-500 font-medium'>₹1273 + ₹140 off on UPI | FKCCDC</h2>
                  </div>
                  <button className=' text-[2.5vh] Book px-5 py-2 rounded-md bg-orange-500 text-white'>
                    <h2>Book</h2>
                  </button>
                </div>
            </div>
            <div className='book mt-3 w-full h-[15vh] shadow-lg border-[2px] flex items-center justify-center px-[10vh]'>
              <div>
                <img className='w-[5vh]' src="https://rukminim2.flixcart.com/fk-p-travel/100/100/storage/airlineLogos/airlineImage-SL.png?q=50" alt="" />
                <h2 className='text-[1.8vh] ml-[-1.3vh]'>Air India | SL-218 </h2>
              </div>
              <div className='flex w-[50vh] ml-[15vh] justify-center gap-[8vh]  items-center'>
                <div className='flex flex-col items-end'>
                  <h3 className='text-slate-600'>DMK</h3>
                  <h2 className='text-[3vh] font-semibold'>20:05</h2>
                </div>
                <div className='flex flex-col items-center'>
                <span className='mb-[-1.3vh] text-slate-500 text-xs font-medium'>4h 35m</span>
                   <h2>-------------</h2>
                  <span className='mt-[-1.3vh] text-slate-500 text-xs font-medium'>Non stop</span>
                </div>
                <div className='flex flex-col items-start'>
                  <h3 className='text-slate-600'>BOM</h3>
                  <h2 className='text-[3vh] font-semibold'>20:05</h2>
                </div>
               
              </div>
              <div className='flex items-center gap-[3vh] ml-5'>
                  <div className='flex flex-col items-end'>
                  <h3 className='text-[3vh] font-semibold'>₹15,919</h3>
                  <h2 className='text-[1.6vh] text-green-500 font-medium'>₹1273 + ₹140 off on UPI | FKCCDC</h2>
                  </div>
                  <button className=' text-[2.5vh] Book px-5 py-2 rounded-md bg-orange-500 text-white'>
                    <h2>Book</h2>
                  </button>
                </div>
            </div>
            <div className='book mt-3 w-full h-[15vh] shadow-lg border-[2px] flex items-center justify-center px-[10vh]'>
              <div>
                <img className='w-[5vh]' src="https://rukminim2.flixcart.com/fk-p-travel/100/100/storage/airlineLogos/airlineImage-SL.png?q=50" alt="" />
                <h2 className='text-[1.8vh] ml-[-1.3vh]'>Air India | SL-218 </h2>
              </div>
              <div className='flex w-[50vh] ml-[15vh] justify-center gap-[8vh]  items-center'>
                <div className='flex flex-col items-end'>
                  <h3 className='text-slate-600'>DMK</h3>
                  <h2 className='text-[3vh] font-semibold'>20:05</h2>
                </div>
                <div className='flex flex-col items-center'>
                <span className='mb-[-1.3vh] text-slate-500 text-xs font-medium'>4h 35m</span>
                   <h2>-------------</h2>
                  <span className='mt-[-1.3vh] text-slate-500 text-xs font-medium'>Non stop</span>
                </div>
                <div className='flex flex-col items-start'>
                  <h3 className='text-slate-600'>BOM</h3>
                  <h2 className='text-[3vh] font-semibold'>20:05</h2>
                </div>
               
              </div>
              <div className='flex items-center gap-[3vh] ml-5'>
                  <div className='flex flex-col items-end'>
                  <h3 className='text-[3vh] font-semibold'>₹15,919</h3>
                  <h2 className='text-[1.6vh] text-green-500 font-medium'>₹1273 + ₹140 off on UPI | FKCCDC</h2>
                  </div>
                  <button className=' text-[2.5vh] Book px-5 py-2 rounded-md bg-orange-500 text-white'>
                    <h2>Book</h2>
                  </button>
                </div>
            </div>
            <div className='book mt-3 w-full h-[15vh] shadow-lg border-[2px] flex items-center justify-center px-[10vh]'>
              <div>
                <img className='w-[5vh]' src="https://rukminim2.flixcart.com/fk-p-travel/100/100/storage/airlineLogos/airlineImage-SL.png?q=50" alt="" />
                <h2 className='text-[1.8vh] ml-[-1.3vh]'>Air India | SL-218 </h2>
              </div>
              <div className='flex w-[50vh] ml-[15vh] justify-center gap-[8vh]  items-center'>
                <div className='flex flex-col items-end'>
                  <h3 className='text-slate-600'>DMK</h3>
                  <h2 className='text-[3vh] font-semibold'>20:05</h2>
                </div>
                <div className='flex flex-col items-center'>
                <span className='mb-[-1.3vh] text-slate-500 text-xs font-medium'>4h 35m</span>
                   <h2>-------------</h2>
                  <span className='mt-[-1.3vh] text-slate-500 text-xs font-medium'>Non stop</span>
                </div>
                <div className='flex flex-col items-start'>
                  <h3 className='text-slate-600'>BOM</h3>
                  <h2 className='text-[3vh] font-semibold'>20:05</h2>
                </div>
               
              </div>
              <div className='flex items-center gap-[3vh] ml-5'>
                  <div className='flex flex-col items-end'>
                  <h3 className='text-[3vh] font-semibold'>₹15,919</h3>
                  <h2 className='text-[1.6vh] text-green-500 font-medium'>₹1273 + ₹140 off on UPI | FKCCDC</h2>
                  </div>
                  <button className=' text-[2.5vh] Book px-5 py-2 rounded-md bg-orange-500 text-white'>
                    <h2>Book</h2>
                  </button>
                </div>
            </div>
            <div className='book mt-3 w-full h-[15vh] shadow-lg border-[2px] flex items-center justify-center px-[10vh]'>
              <div>
                <img className='w-[5vh]' src="https://rukminim2.flixcart.com/fk-p-travel/100/100/storage/airlineLogos/airlineImage-SL.png?q=50" alt="" />
                <h2 className='text-[1.8vh] ml-[-1.3vh]'>Air India | SL-218 </h2>
              </div>
              <div className='flex w-[50vh] ml-[15vh] justify-center gap-[8vh]  items-center'>
                <div className='flex flex-col items-end'>
                  <h3 className='text-slate-600'>DMK</h3>
                  <h2 className='text-[3vh] font-semibold'>20:05</h2>
                </div>
                <div className='flex flex-col items-center'>
                <span className='mb-[-1.3vh] text-slate-500 text-xs font-medium'>4h 35m</span>
                   <h2>-------------</h2>
                  <span className='mt-[-1.3vh] text-slate-500 text-xs font-medium'>Non stop</span>
                </div>
                <div className='flex flex-col items-start'>
                  <h3 className='text-slate-600'>BOM</h3>
                  <h2 className='text-[3vh] font-semibold'>20:05</h2>
                </div>
               
              </div>
              <div className='flex items-center gap-[3vh] ml-5'>
                  <div className='flex flex-col items-end'>
                  <h3 className='text-[3vh] font-semibold'>₹15,919</h3>
                  <h2 className='text-[1.6vh] text-green-500 font-medium'>₹1273 + ₹140 off on UPI | FKCCDC</h2>
                  </div>
                  <button className=' text-[2.5vh] Book px-5 py-2 rounded-md bg-orange-500 text-white'>
                    <h2>Book</h2>
                  </button>
                </div>
            </div>
            <div className='book mt-3 w-full h-[15vh] shadow-lg border-[2px] flex items-center justify-center px-[10vh]'>
              <div>
                <img className='w-[5vh]' src="https://rukminim2.flixcart.com/fk-p-travel/100/100/storage/airlineLogos/airlineImage-SL.png?q=50" alt="" />
                <h2 className='text-[1.8vh] ml-[-1.3vh]'>Air India | SL-218 </h2>
              </div>
              <div className='flex w-[50vh] ml-[15vh] justify-center gap-[8vh]  items-center'>
                <div className='flex flex-col items-end'>
                  <h3 className='text-slate-600'>DMK</h3>
                  <h2 className='text-[3vh] font-semibold'>20:05</h2>
                </div>
                <div className='flex flex-col items-center'>
                <span className='mb-[-1.3vh] text-slate-500 text-xs font-medium'>4h 35m</span>
                   <h2>-------------</h2>
                  <span className='mt-[-1.3vh] text-slate-500 text-xs font-medium'>Non stop</span>
                </div>
                <div className='flex flex-col items-start'>
                  <h3 className='text-slate-600'>BOM</h3>
                  <h2 className='text-[3vh] font-semibold'>20:05</h2>
                </div>
               
              </div>
              <div className='flex items-center gap-[3vh] ml-5'>
                  <div className='flex flex-col items-end'>
                  <h3 className='text-[3vh] font-semibold'>₹15,919</h3>
                  <h2 className='text-[1.6vh] text-green-500 font-medium'>₹1273 + ₹140 off on UPI | FKCCDC</h2>
                  </div>
                  <button className=' text-[2.5vh] Book px-5 py-2 rounded-md bg-orange-500 text-white'>
                    <h2>Book</h2>
                  </button>
                </div>
            </div>
            <div className='book mt-3 w-full h-[15vh] shadow-lg border-[2px] flex items-center justify-center px-[10vh]'>
              <div>
                <img className='w-[5vh]' src="https://rukminim2.flixcart.com/fk-p-travel/100/100/storage/airlineLogos/airlineImage-SL.png?q=50" alt="" />
                <h2 className='text-[1.8vh] ml-[-1.3vh]'>Air India | SL-218 </h2>
              </div>
              <div className='flex w-[50vh] ml-[15vh] justify-center gap-[8vh]  items-center'>
                <div className='flex flex-col items-end'>
                  <h3 className='text-slate-600'>DMK</h3>
                  <h2 className='text-[3vh] font-semibold'>20:05</h2>
                </div>
                <div className='flex flex-col items-center'>
                <span className='mb-[-1.3vh] text-slate-500 text-xs font-medium'>4h 35m</span>
                   <h2>-------------</h2>
                  <span className='mt-[-1.3vh] text-slate-500 text-xs font-medium'>Non stop</span>
                </div>
                <div className='flex flex-col items-start'>
                  <h3 className='text-slate-600'>BOM</h3>
                  <h2 className='text-[3vh] font-semibold'>20:05</h2>
                </div>
               
              </div>
              <div className='flex items-center gap-[3vh] ml-5'>
                  <div className='flex flex-col items-end'>
                  <h3 className='text-[3vh] font-semibold'>₹15,919</h3>
                  <h2 className='text-[1.6vh] text-green-500 font-medium'>₹1273 + ₹140 off on UPI | FKCCDC</h2>
                  </div>
                  <button className=' text-[2.5vh] Book px-5 py-2 rounded-md bg-orange-500 text-white'>
                    <h2>Book</h2>
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
