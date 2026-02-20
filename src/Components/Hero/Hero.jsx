import React from 'react'
import BgImage from "../../assets/images/bg.png"
const Hero = () => {
  return (    
    <div className='flex'>
      <img src={BgImage} alt="background-image" className='w-1/2 h-[1024px]'/>
      <div className='flex-col'>
        <header className='ml-[100px] mt-[20px]'>
            <span className='font-[Island_Moments] text-[#FF7A18] text-4xl'>Chuks Kitchen</span>                
            <button className='w-36 h-12 border-2 border-[#1E88E5] rounded-lg text-base text-[#1E88E5] ml-[200px] font-medium'>Sign In</button>  
        </header>
        <div className='flex-col'>
          <span>Your Authentic Taste of Nigeria</span>
          <span>Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage  of Nigeria right to your doorstep.</span>
          <div>
            <img src="" alt="" />
            <span>Freshly Prepared</span>
            </div>
          <div>
            <img src="" alt="" />
            <span>Support Local Business</span>
          </div>
          <div>
            <img src="" alt="" />
            <span>Fast & Reliable Delivery</span>
          </div>
        </div>
        <button className='h-12 w-[500px] border-2 bg-[#FF7A18] text-white rounded-lg'>Start Your Order</button><br/>
        <button className='h-12 w-[500px] border-2 border-[#1E88E5] text-[#1E88E5] rounded-lg'>Learn More About Us</button>
      </div>  
      
    </div>
  )
}

export default Hero
