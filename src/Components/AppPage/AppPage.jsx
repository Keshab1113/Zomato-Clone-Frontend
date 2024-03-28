import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AppPage = () => {
  return (
      <div className=' bg-[rgb(255,251,247)]  h-[30rem] flex justify-center items-end'>
            <div className=' h-[95%] w-[55%] flex'>
              <div className=' w-[34%] h-full flex justify-center items-center'>
                  <img src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" alt="" srcset="" />
              </div>  
              <div className='flex justify-end items-center'>
                  <div className=' w-[90%]'>
                  <h1 className=' text-[44px] font-medium'>Get the Zomato app</h1>
                      <p className=' text-base mt-6 text-[rgb(54,54,54)]'>We will send you a link, open it on your phone to download the app</p>
                      <div className=' flex items-center mt-6'>
                          <input type="radio" name="s" className=' mr-3 h-5  w-5 accent-[rgb(239,79,95)]' id="" />
                  <h1 className=' mr-10 text-lg'>Email</h1>
                          <input type="radio" name="s" className=' mr-3 h-5 w-5 accent-[rgb(239,79,95)]' id="" />
                          <h1 className=' text-lg'>Phone</h1>
                      </div>
                      <div className=' flex mt-2 h-12'>
                          <TextField id="outlined-basic" label="Email" variant="outlined" className=' border rounded-lg h-12 w-72 pl-3 text-lg outline-none border-[rgb(239,79,95)' />
                          <button className='bg-[rgb(239,79,95)] h-12 w-36 ml-2 text-white rounded-lg'>Share App Link</button> 
                      </div>
                  <h1 className=' text-[rgb(156,156,156)] mt-5'>Download app from</h1>
                  <div className=' flex w-[19rem] items-center justify-between mt-4'>
                  <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" className=' w-36 h-10' alt="" srcset="" />
                      <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" className=' w-36 h-10' alt="" srcset="" />
                      </div>
                  </div>
              </div>
            </div>
    </div>
  )
}

export default AppPage
