import React from 'react'
import { Link } from 'react-router-dom';
import flag from "/flag.png";
import FooterList1 from './FooterList1';
import FooterList2 from './FooterList2';
import FooterList3 from './FooterList3';
import FooterList4 from './FooterList4';
import FooterList5 from './FooterList5';

const Footer = () => {
    return (
      <div className=' bg-slate-50 h-[30rem] w-full flex justify-center'>
        <div className=' w-4/5'>
          <div className=' flex justify-between h-1/4 items-center'>
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" className=' h-[1.7rem] w-[8.5rem]' alt="" srcset="" />
            <div className='flex justify-center items-center h-10'>
              <div className='flex justify-center items-center w-28 h-10 border border-slate-400 rounded-md'>
                <img src={flag} alt=""  className=' h-4 w-5'/>
                <select name="" id="" className=' outline-none w-[70%] ml-1 bg-slate-50 text-lg'>
                  <option value="">India</option>
                </select>
              </div>
              <div className='flex justify-center items-center w-28 h-10 border border-slate-400 rounded-md ml-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>language-globe</title><path d="M10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.011-5.518-4.482-9.989-9.999-10h-0.001zM17.14 6.18h-3c-0.264-1.393-0.63-2.62-1.107-3.791l0.047 0.131c1.755 0.733 3.161 2.010 4.039 3.618l0.021 0.042zM18.1 10c-0.002 0.676-0.090 1.33-0.252 1.954l0.012-0.054h-3.44c0.059-0.57 0.092-1.231 0.092-1.9s-0.034-1.33-0.099-1.982l0.007 0.082h3.44c0.15 0.57 0.238 1.224 0.24 1.899v0.001zM1.9 10c0.002-0.676 0.090-1.33 0.252-1.954l-0.012 0.054h3.46c-0.059 0.57-0.092 1.231-0.092 1.9s0.034 1.33 0.099 1.982l-0.007-0.082h-3.46c-0.15-0.57-0.238-1.224-0.24-1.899v-0.001zM7.48 8.1h5.040c0.063 0.57 0.099 1.231 0.099 1.9s-0.036 1.33-0.107 1.981l0.007-0.081h-5.040c-0.063-0.57-0.099-1.231-0.099-1.9s0.036-1.33 0.107-1.981l-0.007 0.081zM10.76 1.9c0.603 1.228 1.106 2.657 1.436 4.152l0.024 0.128h-4.44c0.354-1.623 0.857-3.052 1.51-4.395l-0.050 0.115c0.24 0 0.5 0 0.76 0s0.48 0 0.76 0zM6.96 2.48c-0.445 1.051-0.825 2.291-1.079 3.576l-0.021 0.124h-3c0.899-1.65 2.305-2.927 4.007-3.64l0.053-0.020zM2.86 13.8h3c0.262 1.4 0.629 2.634 1.107 3.811l-0.047-0.131c-1.757-0.738-3.165-2.022-4.039-3.637l-0.021-0.043zM9.24 18.1c-0.605-1.234-1.108-2.67-1.437-4.172l-0.023-0.128h4.44c-0.352 1.63-0.855 3.066-1.51 4.415l0.050-0.115c-0.24 0-0.5 0-0.76 0s-0.48 0-0.76 0zM13.040 17.52c0.431-1.046 0.798-2.28 1.041-3.558l0.019-0.122h3.040c-0.902 1.642-2.308 2.912-4.006 3.62l-0.054 0.020z"></path></svg>
              <select name="" id="" className=' w-[70%] outline-none ml-1 bg-slate-50 text-lg'>
                <option value="">English</option>
                </select>
              </div>
            </div>
          </div>
          <div className=' h-2/4 flex justify-between'>
            <div className=' w-1/5'>
              <h1 className=' text-base font-medium uppercase pb-4 tracking-[0.1rem]'>About Zomato</h1>
              <FooterList1/>
            </div>
            <div className=' w-1/5'>
              <h1 className=' text-base font-medium uppercase pb-4 tracking-[0.1rem]'>Zomaverse</h1>
              <FooterList2/>
            </div>
            <div className=' w-1/5 '>
              <h1 className=' text-base font-medium uppercase pb-4 tracking-[0.1rem]'>For Restaurants</h1>
              <FooterList3/>
            </div>
            <div className=' w-1/5 '>
              <h1 className=' text-base font-medium uppercase pb-4 tracking-[0.1rem]'>Learn More</h1>
              <FooterList4/>
            </div>
            <div className=' w-1/5 '>
              <h1 className=' text-base font-medium uppercase pb-4 tracking-[0.1rem]'>Social Links</h1>
              <FooterList5/>
            </div>
          </div>
          <hr />
          <div className=' h-1/4 flex items-center'>

            <p className=' text-sm text-slate-600'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
          </div>
          
      </div>
      </div>
  )
}

export default Footer
