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
                        <button 
                        className='bg-[#FF7A18] h-[46px] w-[210px] rounded-lg mb-4'>
                        Discover what's new
                        </button>
                    </div>
                    <div className='relative w-[1190px] ml-[80px] mt-[250px]'>
                        <input 
                        type="text" 
                        placeholder='What are you craving for today?' 
                        className='bg-white font-medium text-black font-[500] text-[18px] w-[1190px] p-[10px] pl-14 rounded-lg placeholder:font-[600]' />
                        <img src={SearchIcon} alt="search icon"                             className='absolute left-3 top-1/2 -translate-y-1/2 mt-[-4] w-[30px]'/>
                    </div>
                </div>
            </div>
            {/* <div className='flex flex-col justify-center items-center'>
                <p className='font-[600] text-black h-full'>Popular Categories</p>
        
                <img src={} alt="" />
                <img src={} alt="" />
                <img src={} alt="" />
                <img src={} alt="" />
                <img src={} alt="" />
                        
                
            </div>  */}
            
            <Footer/>
        </div>
    )

}