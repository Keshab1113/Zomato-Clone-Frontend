import React from 'react'
import { motion } from "framer-motion";

const DinnerOption = () => {
  return (
      <div className='  h-80 w-full flex justify-center items-center'>
          <div className='  w-4/5 h-full flex items-center justify-around'>
        <motion.div
          className="box h-60 w-[32%] rounded-xl cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <div className=' w-full overflow-hidden rounded-xl'>
            <div className=' h-40 overflow-hidden w-full rounded-t-xl'>
              <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg" className=' h-40 w-full rounded-t-xl scale-[1] object-cover' alt="" srcset="" />
            </div>
              <div className='w-full h-20 rounded-b-xl pl-4 border'>
              <h1 className=' text-xl font-medium opacity-100'>Order Online</h1>
              <p className=' text-lg  text-[rgb(79,79,79)] opacity-100'>Stay home and order to your doorstep</p>
              </div>
            
          </div>
          </motion.div>
        <motion.div
          className="box h-60 w-[32%] rounded-xl cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <div className=' w-full overflow-hidden rounded-xl'>
            <div className=' h-40 overflow-hidden w-full rounded-t-xl'>
              <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg" className=' h-40 w-full rounded-t-xl scale-[1] object-cover' alt="" srcset="" />
            </div>
              <div className='w-full h-20 rounded-b-xl pl-4 border'>
              <h1 className=' text-xl font-medium opacity-100'>Dining</h1>
              <p className=' text-lg  text-[rgb(79,79,79)] opacity-100'>View the city's favourite dining venues</p>
              </div>
            
          </div>
          </motion.div>
        <motion.div
          className="box h-60 w-[32%] rounded-xl cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <div className=' w-full overflow-hidden rounded-xl'>
            <div className=' h-40 overflow-hidden w-full rounded-t-xl'>
              <img src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg" className=' h-40 w-full rounded-t-xl scale-[1] object-cover' alt="" srcset="" />
            </div>
              <div className='w-full h-20 rounded-b-xl pl-4 border'>
              <h1 className=' text-xl font-medium opacity-100'>Nightlife and Clubs</h1>
              <p className=' text-lg  text-[rgb(79,79,79)] opacity-100'>Explore the city’s top nightlife outlets</p>
              </div>
            
          </div>
          </motion.div>
        
          </div>
    </div>
  )
}

export default DinnerOption
