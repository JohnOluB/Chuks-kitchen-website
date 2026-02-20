import React from 'react'
import BgImage from "../../assets/images/bg.png"
const Hero = () => {
  return (    
    <div className='flex'>
      <img src={BgImage} alt="background-image" className='w-1/2 h-[1024px]'/>
        <header className='ml-[100px] mt-[20px]'>
            <span className='font-[Island_Moments] text-[#FF7A18] text-4xl'>Chuks Kitchen</span>                
            <button className='w-36 h-12 border-2 border-[#1E88E5] rounded-lg text-base text-[#1E88E5] ml-[200px] font-medium'>Sign In</button>
        
  
        </header>
    </div>
  )
}

export default Hero
