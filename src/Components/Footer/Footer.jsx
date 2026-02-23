import React from "react";

export default function Footer() {
return(
    <>
    <div className='flex justify-evenly h-[350px] bg-[rgba(90,40,9,0.93)]/93 font-[poppins] '>
      <div className="mt-5">
        <span className='font-[Island_Moments] text-[#FF7A18] text-[37px]'>Chuks Kitchen</span>
        <div className="text-white">
        <p>Bringing the authentic </p>
        <p>flavors of Nigerian</p> 
        <p>home cooking to your</p>
        <p>table, with passion</p> 
        <p>and care</p>
        </div>
      </div>
      <div className="text-white mt-5">
        <p className="text-[24px]">Quick Links</p>
        <div className="text-[12px]">
        <p>Home</p>
        <p>Explore</p>
        <p>My Order</p>
        <p>Account</p>
        <p>Contact</p>
        </div>
    </div>
      <div className='text-white mt-5'>
        <p className="text-[24px]">Contact Us</p>
        <div className="text-[12px] my-4">

        <p>+234 801 234 5678</p>
        <p>hello@chukskitchen.com</p>
        <p>123 Taste Blvd, Lagos, Nigeria</p>
        </div>
    </div>
    <div className="text-white mt-5">
        <div className="text-[12px]">
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Linkdein</p>
        <p>Instagram</p>
        </div>
    </div>
    </div>
    </>
)

}