import React from 'react'
import BgImage from '../../assets/images/bg-two.png'
import NavBar from '../Navbar/navBar'
import Footer from '../Footer/Footer'
import SearchIcon from '../../assets/Icons/search-sm.png'

export default function Hero(){
    return(
        <div>
            <NavBar/>
            <div className='relative'>
                <img src={BgImage} alt="background image" className='w-full h-full object-cover' />
                <div className='absolute inset-0 text-[#ffffff] bg-black/50'>
                    <div className='mt-45 ml-10'>
                        <div className='text-[43px] flex flex-col font-[620] '>
                            <span>The Heart of Nigerian Home</span>
                            <span>Cooking</span>
                        </div>
                        <p className='font-[500] text-[28px] my-6'>Handcrafted with passion, delivered with care.</p>
                        <button className='bg-[#FF7A18] h-[46px] w-[210px] rounded-lg mb-4'>Discover what's new</button>
                    </div>
                    
                        <span className='bg-white'>
                            <input type="text" placeholder='What are you craving for today?' className='text-black font-[500] text-[18px] w-[970px] p-15' /><img src={SearchIcon} alt="search icon" className='mt-[-4]'/>
                        </span>
                    
                </div>
            </div>
            
            
            
        
            
            
            <Footer/>
        </div>
    )

}