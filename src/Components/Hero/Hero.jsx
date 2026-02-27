import React from 'react'
import BgImage from '../../assets/images/bg-two.png'
import BgImageThree from '../../assets/images/bg-three.png'
import NavBar from '../Navbar/navBar'
import Footer from '../Footer/Footer'
import SearchIcon from '../../assets/Icons/search-sm.png'
import {FoodMenu,  ChefSpecials}  from '../../Data/foodData.js'

export default function Hero(){
    return(
        <div className='font-[Inter]'>
            <NavBar/>
            <div className='relative'>
                <img src={BgImage} alt="background image" className='w-full h-full object-cover' />
                <div className='absolute inset-0 text-[#ffffff] bg-black/50 font-[Inter]'>
                    <div className='mt-45 ml-10'>
                        <div className='text-[40px] flex flex-col font-[600] '>
                            <span>The Heart of Nigerian Home</span>
                            <span>Cooking</span>
                        </div>
                        <p className='font-[600] text-[20px] my-6'>Handcrafted with passion, delivered with care.</p>
                        <button 
                        className='bg-[#FF7A18] h-[46px] w-[210px] rounded-lg mb-4'>
                        Discover what's new
                        </button>
                    </div>
                    <div className='relative w-[1190px] ml-[80px] mt-[265px]'>
                        <input 
                        type="text" 
                        placeholder='What are you craving for today?' 
                        className='bg-white text-black font-[500] 
                        text-[18px] w-[1190px] p-[10px] pl-14 rounded-lg 
                        placeholder:font-[600] focus:outline-none shadow-xl' />
                        <img src={SearchIcon} alt="search icon" className='absolute left-3 top-1/2 -translate-y-1/2 mt-[-4] w-[30px]'/>
                    </div>
                </div>
            </div>
                <div className='bg-[#F3F4F6] mb-[80px]'>
                    <div className='font-[600] flex flex-col justify-center items-center'>
                        <p className='text-black mt-30 text-[28px]'>Popular Categories</p>    
                        <div className='grid grid-cols-3 gap-16 mt-8'>
                            {FoodMenu.map((food)=>(
                            <div key={food.id} className="bg-white rounded-xl overflow-hidden shadow-sm h-[300px] w-[320px] ">
                                <div className=''>
                                    <img src={food.image} alt={food.name} className="w-full object-cover" />
                                    <h3 className='flex justify-center items-center mt-8 text-[17px]'>{food.name}</h3>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div> 
                    <div className='font-[600] flex flex-col justify-center items-center'>
                        <p className='text-black mt-40 font-[600] text-[32px]'>Chef's Specials</p>  
                        <div className='grid grid-cols-3 gap-16 mt-4'>
                            {ChefSpecials.map((specials)=>(
                                <div key={specials.id} className='mt-[30px] shadow-sm w-[320px] rounded-lg overflow-hidden'>
                                    <img src={specials.image} alt={specials.name} className='w-full h-[200px] object-cover'/>
                                    <div className='px-4'>
                                        <h3 className='font-[500] mt-8 text-[20px] px-4'>{specials.name}</h3>
                                        <p className='text-[14px] font-[500] px-4'>{specials.details}</p>
                                        <div className='flex justify-between items-center mt-4 mb-8 px-4'>
                                            <p className='text-[#FF7A18] flex justify-center items-center'>{specials.price}</p>
                                            <button className='bg-[#FF7A18] text-white text-[13px] h-[40px] w-[100px] rounded-lg'>Add to cart</button>
                                        </div>
                                    </div>
                                  
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            <div className='relative'>
                <img src={BgImageThree} alt="" />
                <div className='absolute inset-0 text-[#ffffff] bg-black/50'>
                    <div className='flex flex-col mt-45 ml-10 font-[Inter]'>
                        <span className='font-[700] text-[43px]'>Introducing Our New Additions!</span>
                        <span className='text-[20px] font-[500] my-4'>
                             Explore exciting new dishes, crafted with the freshest
                        <p>ingredients and authentic Nigerian flavors. Limited time</p> 
                        <p>offer!</p></span>
                        <button 
                        className='bg-[#FF7A18] h-[46px] w-[210px] rounded-lg'>
                        Discover what's new
                        </button>
                    </div>     
                    
                </div>
            </div>
            <Footer/>
        </div>
    )

}