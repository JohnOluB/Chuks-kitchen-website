import React from "react";
import BgImage from "../../assets/images/bg.png"
import Footer from "../Footer/Footer";
import Facebook from '../../assets/Icons/facebook.png'
import Google from '../../assets/Icons/google.png'
import MailBox from '../../assets/Icons/mail.svg'
import padlock from '../../assets/Icons/padlock.svg'
import visibility from '../../assets/Icons/visibility-off.svg'
import {useNavigate} from 'react-router-dom'

export default function SignIn(){
    const navigate = useNavigate()
    return(
        <div>
            <div className="flex font-[Inter]">
                <div className='relative w-1/2'>
                    <img src={BgImage} alt="background-image" className='w-full object-cover h-[1024px]'/>
                    <div className="absolute inset-0 bg-[#FF7A18B2] text-white flex flex-col items-center">
                        <p className="text-[40px] mt-[220px] font-[700]">Chuks Kitchen</p>
                        <div className='text-[20px]'>
                            <p>Your journey to delicious, authentic </p> 
                            <p>Nigerian meals starts here. Sign up </p> 
                            <p>or log in to order your favorites </p>
                            <p>today!</p>
                        </div>    
                    </div>
                </div>
             <div className="mt-[90px] ml-[130px]">
                <span className='font-[Island_Moments] text-[#FF7A18] text-4xl flex justify-center items-center'>Chuks Kitchen</span>                
                <p className="flex justify-center items-center mt-[4px] font-[500] text-[22px]">Login Your Account</p>
                <div className="flex flex-col justify-center items-center text-[14px]"> 
              <div className="relative">
                    <p className="mt-4 mb-1.5">Email or Phone number</p>
                    <div className="relative">
                        <input type="text" placeholder="name@gmail.com" required className="border border-[#BDBDBD] w-[380px] rounded-lg p-2 focus:outline-none focus:border-[#BDBDBD] pl-10"/>
                        <img src={MailBox} alt="mail box" className="absolute left-3 top-1/2 -translate-y-1/2"/>
                    </div>
                    </div>
                    <div className="flex-col">
                        <div className="relative">
                            <p className="mt-4 mb-1.5">Password</p>
                            <input type="password" placeholder="****" required className="border-1 border-[#BDBDBD] w-[380px] p-2 rounded-lg pl-10 pr-10 focus:outline-none" />
                            <img src={padlock} className="absolute left-3 top-1/2 -translate-y-1/2 mt-[11px]" />
                            <img src={visibility} className="absolute right-3 top-1/2 -translate-y-1/2 mt-[11px]"/>
                        </div>
                    </div>
                    <p className="mt-1.5 ml-[267px] text-[#64B5F6]">Forgot Password?</p>
                    <button onClick={() => navigate('/Hero/hero')} className='h-12 w-[380px] border-2 bg-[#FF7A18] cursor-pointer text-white rounded-lg mt-[12px] '>Continue</button>
                    <p className="mt-1.5">Or continue with</p>
                     <button className='h-12 w-[380px] border border-[#BDBDBD] rounded-lg mt-[18px] flex items-center justify-center gap-2'>
                        <img src={Google} alt="google"/>
                        Continue with Google
                    </button>
                    <button className='h-12 w-[380px] border border-[#BDBDBD] rounded-lg mt-[18px] flex items-center justify-center gap-2'>
                        <img src={Facebook} alt="facebook"/>
                        Continue with Apple
                    </button>
                    <p className="mt-4">Don't have an account? <span className="text-[#64B5F6]">Create an account</span></p>
                </div>
             </div>
            </div>
<Footer/>
        </div>
    )
}