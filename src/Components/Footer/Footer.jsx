import React from "react";
import Arrow from '../../assets/Icons/arrow-left.png'

export default function Footer() {
return(
    <>
    <div className='flex justify-evenly h-[420px] bg-[rgba(90,40,9,0.93)]/93'>
      <div className="mt-10">
        <span className='font-[Island_Moments] text-[#FF7A18] text-[37px]'>Chuks Kitchen</span>
        <div className="text-white text-[24px] font-[Jost]">
          <p>Bringing the authentic </p>
          <p>flavors of Nigerian</p> 
          <p>home cooking to your</p>
          <p>table, with passion</p> 
          <p>and care</p>
          <p className="text-white font-[Jost] text-[12px] mt-[90px]">© 2020 Lift Media. All rights reserved.</p>
        </div>
      </div>
      <div className="text-white mt-10 font-[Jost]">
        <p className="text-[24px]">Quick Links</p>
        <div className="text-[14px] font-[300] flex flex-col gap-3 py-4">
          <p>Home</p>
          <p>Explore</p>
          <p>My Order</p>
          <p>Account</p>
          <p>Contact</p>
        </div>
    </div>
      <div className='text-white mt-10 font-[Jost]'>
        <p className="text-[24px]">Contact Us</p>
        <div className="text-[14px] font-[300] my-4 flex flex-col gap-3">
          <p>+234 801 234 5678</p>
          <p>hello@chukskitchen.com</p>
          <p>123 Taste Blvd, Lagos, Nigeria</p>
        </div>
    </div>
    <div className="text-white mt-10 font-[Jost]">
        <div className="text-[14px] font-[300] flex flex-col gap-3">
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Linkdein</p>
        <p>Instagram</p>
        </div>
    </div>
    <div className="bg-[#0081FE] h-10 w-10 rounded-full flex justify-center items-center mt-[350px]">
      <img src={Arrow} alt="arrow" className=""/>
    </div>
    </div>
    </>
)

}