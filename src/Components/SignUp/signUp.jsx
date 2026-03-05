import React from 'react'
import BgImage from "../../assets/images/bg.png"
import Footer from "../Footer/Footer";
import Facebook from '../../assets/Icons/facebook.png'
import Google from '../../assets/Icons/google.png'
import MailBox from '../../assets/Icons/padlock.svg'
import padlock from '../../assets/Icons/padlock.svg'
import visibility from '../../assets/Icons/visibility-off.svg'
import telephone from '../../assets/Icons/telephone.png'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp(){
    const navigate = useNavigate()
    return(
        <div>
            <div className="flex font-[Inter]">
                <div className='relative w-1/2'>
                    <img src={BgImage} alt="background-image" className='w-full object-cover h-[1024px]'/>
                    <div className='absolute inset-0 bg-[#FF7A18B2] text-white flex flex-col items-center'>    
                        <span className='text-[40px] mt-[220px] font-[700]">'>Chuks Kitchen</span>   
                        <div className='flex flex-col items-center text-[20px]'>        
                            <p>Your journey to delicious, authentic </p>
                            <p>Nigerian meals starts here. Sign up </p>
                            <p>or log in to order your favorites </p>
                            <p>today!</p>
                        </div>
                    </div>
                </div>
                    <div className="m-30 font-[Inter] ml-[150px]">
                        <span className='font-[Island_Moments] text-[#FF7A18] text-4xl flex justify-center items-center'>Chuks Kitchen</span>                
                        <p className="flex justify-center items-center mt-2 font-[500] text-[24px]">Create Your Account</p>
                        <div className="flex flex-col justify-center items-center text-[14px]">
                            <div className="">
                                <p className="mt-4 mb-1.5">
                                    Email
                                </p>
                                <div className='relative'>
                                    <input type="email" required placeholder="name@gmail.com" className="border-1 border-[#BDBDBD] w-[380px] rounded-lg focus:outline-none focus:border-[#BDBDBD] p-2 pl-10"/><br />
                                    <img src={MailBox} alt="mail box" className="absolute left-3 top-1/2 -translate-y-1/2"/>
                                </div>
                            </div>                  
                            <div className="">
                                <p className="mt-4 mb-1.5">
                                    Phone number
                                </p>
                                <div className='relative'>
                                    <input type="number" required placeholder="8123340690" className="border-1 border-[#BDBDBD] w-[380px] rounded-lg focus:outline-none focus:border-[#BDBDBD] p-2 pl-10"/><br />
                                    <img src={telephone} alt="telephone" className="absolute left-3 top-1/2 -translate-y-1/2"/>
                                </div>
                            </div>
                            <div className="flex-col">
                                <div className="relative">
                                    <p className="mt-4 mb-1.5">
                                        Password
                                    </p>
                                    <input type="password" placeholder="QWE123#" required className="border-1 border-[#BDBDBD] w-[380px] p-2 rounded-lg pl-10 pr-10 focus:outline-none" />
                                    <img src={padlock} className="absolute left-3 top-1/2 -translate-y-1/2 pt-[28px]" />
                                    <img src={visibility} className="absolute right-3 top-1/2 -translate-y-1/2 pt-[28px]"/>
                                </div>
                            </div>
                            <div className="relative">
                                <p className="mt-4 mb-1.5">Confirm Password</p>
                                <input type="password" placeholder="QWE123#" required className="border-1 border-[#BDBDBD] w-[380px] p-2 rounded-lg pl-10 pr-10 focus:outline-none" />
                                <img src={padlock} className="absolute left-3 top-1/2 -translate-y-1/2 pt-[43px]" />
                                <img src={visibility} className="absolute right-3 top-1/2 -translate-y-1/2 pt-[43px] "/>
                            </div>
                                <div className='flex mr-[6px]'>
                                    <input type='checkbox' className='mt-2 mr-2'/> 
                                    <span className="mt-1.5">
                                        I agree to the  
                                    <span className='text-[#64B5F6] ml-[5px] mr-[5px]'>
                                        Terms & Conditions
                                    </span> 
                                        and 
                                    <span className='text-[#64B5F6] ml-[5px]'>
                                        Privacy Policy
                                    </span>
                                    </span>
                                </div>
                                <button onClick={() => navigate('/hero')} className='h-12 w-[380px] border-2 bg-[#FF7A18] text-white rounded-lg mt-[12px] '>Continue</button>
                        
                            <p className="mt-1.5">Or continue with</p>
                            <button className='h-12 w-[380px] border-1 border-[#BDBDBD] rounded-lg mt-[18px] flex items-center justify-center gap-2'>
                                <img src={Google} alt="google"/>
                                Continue with Google
                            </button>
                            <button className='h-12 w-[380px] border-1 border-[#BDBDBD] rounded-lg mt-[18px] flex items-center justify-center gap-2'>
                                <img src={Facebook} alt="facebook"/>
                                Continue with Apple
                            </button>
                            <div className='mt-4 flex'>
                                <p className="">Already have an account? </p>
                                <Link to="/signIn">
                                    <p className="text-[#64B5F6] ml-[4px]">Sign In</p>
                                </Link>
                            </div>
                        </div>
                    </div>
        </div>
        <Footer/>
                </div>
    )
}