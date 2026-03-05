import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function NavBar(){
    const navigate = useNavigate()
    return(
        <div>
            <header className='flex justify-evenly mt-5'>
                <span className='font-[Island_Moments] text-[#FF7A18] text-4xl'>Chuks Kitchen</span>                
                <NavLink to='/hero' className={({isActive})=> isActive ? 'text-[#FF7A18]' : 'text-black'}>
                    Home
                </NavLink>
                <NavLink to='/explore' className={({isActive})=> isActive ? 'text-[#FF7A18]' : 'text-black'}>
                    Explore
                </NavLink>
                <NavLink to='/my-order' className={({isActive})=> isActive ? 'text-[#FF7A18]' : 'text-black'}>
                    My Orders
                </NavLink>
                <NavLink to='/' className={({isActive})=> isActive ? 'text-[#FF7A18]' : 'text-black'}>
                    Account
                </NavLink>
                <button onClick={() => navigate('/signIn')} className='bg-[#FF7A18] h-[40px] w-[120px] rounded-lg text-[#ffffff] mb-4'>Login</button>
            </header>
        </div>
    )

}