import React from 'react'
import LocalitiesList from './LocalitiesList'

const Localities = () => {
  return (
    <div className=' h-full flex justify-center mt-24 mb-24'>
          <div className=' w-4/5 h-full'>
              <h1 className=' text-4xl font-normal'>Popular localities in and around <span className=' font-medium'>Kolkata</span> </h1>
              <LocalitiesList/>
          </div>
    </div>
  )
}

export default Localities
