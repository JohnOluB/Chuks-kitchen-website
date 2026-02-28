import React from "react";
import BgImage from "../../assets/images/bg.png"
import Footer from "../Footer/Footer";
import Facebook from '../../assets/Icons/facebook.png'
import Google from '../../assets/Icons/google.png'
import {Link} from 'react-router-dom'

export default function SignIn(){
    return(
        <div>
            <div className="flex font-[Inter]">
           
                <img src={BgImage} alt="background-image" className='w-1/2 h-[1024px]'/>
           
             <div className="m-30">
                <span className='font-[Island_Moments] text-[#FF7A18] text-4xl flex justify-center items-center'>Chuks Kitchen</span>                
                <p className="flex justify-center items-center mt-2 font-[500] text-[22px]">Login Your Account</p>
                <div className="flex flex-col justify-center items-center text-[14px]">
                    <div className="">
                        <p className="mt-4 mb-1.5">
                            Email or Phone number
                        </p>
                        <input type="email, number" required placeholder="name@gmail.com" className="border border-[#BDBDBD] w-[380px] rounded-lg p-2 focus:outline-none focus:border-[#BDBDBD]"/><br />
                
                    </div>
                    <div className="flex-col">
                        <p className="mt-4 mb-1.5">Password</p>
                        <input type="password" placeholder="****" required className="border-1 border-[#BDBDBD] w-[380px] p-2 rounded-lg" />
                    </div>
                        <p className="mt-1.5 ml-[267px] text-[#64B5F6]">Forgot Password?</p>
                        <Link to='/'>
                            <button className='h-12 w-[380px] border-2 bg-[#FF7A18] cursor-pointer text-white rounded-lg mt-[12px] '>Continue</button>
                        </Link>
                        
                
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