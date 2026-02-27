import React from "react";
import BgExplore from '../../assets/images/bg-explore.png'
import NavBar from "../Navbar/navBar";
import Footer from "../Footer/Footer";
import AddIcon from '../../assets/Icons/Vector.png'
import {PopularDishes, JollofRiceEntrees, SwallowSoups}  from "../../Data/foodData.js"

export default function Explore(){
    return(
        <div>
            <NavBar/>
            <div className="relative">
                <img src={BgExplore} alt=""/>
                <div className="absolute inset-0 font-[Inter] text-[#ffffff] bg-black/50">
                    <div className="mt-62 ml-10 flex flex-col">
                        <span className="font-[600] text-[40px]">Chuks Kitchen</span>
                        <span className="mt-4 font-[400] text-[20px]">Chuks Kitchen Nigeria Home Cooking 4.8 (1.2k)</span>   
                    </div>
                </div>    
            </div>
            <div className="bg-[#F3F4F6] my-20 font-[Inter]">
                <div className="mx-8 bg-white rounded-lg">
                    <div className="ml-12 flex flex-col gap-5">
                        <p className="font-[500]">Menu Categories</p>
                        <p>Popular</p>
                        <p>Jollof Rice & Entrees</p>
                        <p>Swallow & Soups</p>
                        <p>Grills & sides</p>
                        <p>Beverages</p>
                        <p>Desserts</p>
                    </div>
                </div>
                <p className="font-[600] mt-[50px] ml-[136px] text-[28px]">Popular</p>
                <div className="flex justify-center items-center">
                    <div className='grid grid-cols-3 gap-16 mt-8'>
                        {PopularDishes.map((dishes)=>(
                        <div key={dishes.id} className="bg-white rounded-xl overflow-hidden shadow-sm h-[420px] w-[320px] mb-8">
                            <img src={dishes.image} alt={dishes.name}  className='w-full h-[200px] object-cover'/>
                            <div className="px-4">
                                <p className="font-[500] mt-8 text-[20px]">{dishes.name}</p>
                                <p className="text-[14px] font-[500]">{dishes.details}</p>
                                <div className='flex justify-between items-center mt-8 mb-8'>
                                    <p className='text-[#FF7A18] flex justify-center items-center'>{dishes.price}</p>
                                    <div className='h-8 w-8 rounded-full bg-[#FF7A18] flex justify-center items-center'>
                                        <img src={AddIcon} alt="" className="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <p className="font-[600] mt-[50px] ml-[136px] text-[28px]">Jollof Rice & Entrees</p>
                <div className="flex justify-center items-center">
                    <div className='grid grid-cols-3 gap-16 mt-8'>
                        {JollofRiceEntrees.map((jollof)=>(
                        <div key={jollof.id} className="bg-white rounded-xl overflow-hidden shadow-sm h-[420px] w-[320px] mb-8">
                            <img src={jollof.image} alt={jollof.name}  className='w-full h-[200px] object-cover'/>
                            <div className="px-4">
                                <p className="font-[500] mt-8 text-[20px]">{jollof.name}</p>
                                <p className="text-[14px] font-[500]">{jollof.details}</p>
                                <div className='flex justify-between items-center mt-8 mb-8'>
                                    <p className='text-[#FF7A18] flex justify-center items-center'>{jollof.price}</p>
                                    <div className='h-8 w-8 rounded-full bg-[#FF7A18] flex justify-center items-center'>
                                        <img src={AddIcon} alt="" className="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

                <p className="font-[600] mt-[50px] ml-[136px] text-[28px]">Swallow & Soups</p>
                <div className="flex justify-center items-center">
                    <div className='grid grid-cols-3 gap-16 mt-8'>
                        {SwallowSoups.map((swallow)=>(
                        <div key={swallow.id} className="bg-white rounded-xl overflow-hidden shadow-sm h-[420px] w-[320px] mb-[80px]">
                            <img src={swallow.image} alt={swallow.name} className='w-full h-[200px] object-cover'/>
                            <div className="px-4">
                                <p className="font-[500] mt-8 text-[20px]">{swallow.name}</p>
                                <p className="text-[14px] font-[500]">{swallow.details}</p>
                                <div className='flex justify-between items-center mt-8 mb-8'>
                                    <p className='text-[#FF7A18] flex justify-center items-center'>{swallow.price}</p>
                                    <div className='h-8 w-8 rounded-full bg-[#FF7A18] flex justify-center items-center'>
                                        <img src={AddIcon} alt="" className="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}