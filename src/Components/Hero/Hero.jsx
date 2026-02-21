import React from 'react'
import BgImage from "../../assets/images/bg.png"
import ForknKnife from '../../assets/Icons/fork-knife-fill.png'

const Hero = () => {
  return (    
    <div className='flex'>
      <img src={BgImage} alt="background-image" className='w-1/2 h-[1024px]'/>
      <div className='flex-col ml-[100px]'>
        <header className=' mt-[20px]'>
            <span className='font-[Island_Moments] text-[#FF7A18] text-4xl'>Chuks Kitchen</span>                
            <button className='w-36 h-12 border-2 border-[#1E88E5] rounded-lg text-base text-[#1E88E5] ml-[200px] font-medium'>Sign In</button>  
        </header>
        <div className='flex-col mt-[80px] font-[Inter]'>
          <p className='text-[32px] font-semibold'>Your Authentic Taste of Nigeria</p>
          <p className='text-base mt-[17px]'>Experience homemade flavors delivered fresh to your desk or home. We</p>           
          <p className='text-base mb-[50px]'> bring the rich culinary heritage  of Nigeria right to your doorstep.</p>
          <div className='flex'>
          <div className='flex mr-[70px]'>
            <span className='bg-[#FFE1C4] h-[37px] w-[38px] rounded-[13px] flex justify-center items-center'>
              <img src={ForknKnife} alt="A fork and knife icon" />
            </span>
            <span className='flex justify-center items-center ml-[10px]'>Freshly Prepared</span>
          </div>
          <div className='flex'>
            <span className='bg-[#FFE1C4] h-[37px] w-[38px] rounded-[13px] ml-[10px] flex justify-center items-center'>
              <img src={ForknKnife} alt="A fork and knife icon" />
            </span>
            <span className='flex justify-center items-center ml-[10px] '>Support Local Business</span>
          </div>
          </div>

          <div className='flex mt-[28px]'>            
            <span className='bg-[#FFE1C4] h-[37px] w-[38px] rounded-[13px] flex justify-center items-center'>
              <img src={ForknKnife} alt="A fork and knife icon" />
            </span>
            <span className='flex justify-center items-center ml-[10px] '>Fast & Reliable Delivery</span>
          </div>
        </div>
        <button className='h-12 w-[500px] border-2 bg-[#FF7A18] text-white rounded-lg mt-[38px]'>Start Your Order</button><br/>
        <button className='h-12 w-[500px] border-2 border-[#1E88E5] text-[#1E88E5] rounded-lg mt-[24px]'>Learn More About Us</button>
      </div>  

    </div>
  )
}

export default Hero
