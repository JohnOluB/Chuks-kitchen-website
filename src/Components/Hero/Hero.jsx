import React from 'react'
import BgImage from "../../assets/images/bg.png"
const Hero = () => {
  return (    
    <div className='flex'>
      <img src={BgImage} alt="background-image" className='w-1/2 h-[1024px]'/>
        <div className='ml-[300px]'>
            <span>chuks kitchen</span>                
            <button className='w-36 h-12 border-2 border-[#1E88E5] rounded-lg text-base text-[#1E88E5]'>Sign In</button>
        
        
        </div>
    </div>
  )
}

export default Hero