import React from 'react'

export default function NavBar(){
    return(
        <div>
            <header className='flex justify-evenly mt-5'>
                <span className='font-[Island_Moments] text-[#FF7A18] text-4xl'>Chuks Kitchen</span>                
                <span>Home</span>
                <span>Explore</span>
                <span>My Orders</span>
                <span>Account</span>
                <button className='bg-[#FF7A18] h-[40px] w-[120px] rounded-lg text-[#ffffff]'>Login</button>
            </header>
        </div>
    )

}