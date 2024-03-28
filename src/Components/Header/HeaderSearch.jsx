import React from 'react'

const HeaderSearch = () => {
  return (
    <div className=' absolute top-2 flex flex-col justify-center items-center h-4/6 w-full'>
          <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" className=' h-[4rem] w-[17rem]' alt="" srcset="" />
          <h1 className=' text-4xl font-medium text-white mt-10 mb-10'>Discover the best food & drinks in Kolkata</h1>
          <div className=' w-[57%] bg-white h-14 flex items-center rounded-xl'>
              <div className='w-[30%] h-full flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 iRDDBk pl-2 w-[12%]"><title>location-fill</title><path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path></svg>
                  <select className=' w-[88%] h-full outline-none text-slate-400 rounded-xl border-none  '>
                      <option className='' value="Hiiii">Kolkata</option>
                      <option value="Hiiii">HIiiii</option>
                      <option value="Hiiii">HIiiii</option>
                      <option value="Hiiii">HIiiii</option>
                  </select>
              </div>
              <div className=' flex w-[70%] h-full items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#828282" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 iwHbVQ w-[10%]"><title>Search</title><path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path></svg>
                  <input type="text" className=' w-[90%] h-full outline-none rounded-xl' placeholder='Search for restaurant, cuisine or a dish' />
              </div>
          </div>
          
    </div>
  )
}

export default HeaderSearch
