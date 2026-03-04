import React from 'react'
import BgImage from "../../assets/images/bg.png"
import Footer from "../Footer/Footer";
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp(){
    const navigate = useNavigate()
    return(
        <div>
            <div className="flex">
                <div>
                    <span>Chuks Kitchen</span>   
                    <p>Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!</p>
                    <img src={BgImage} alt="background-image" className='w-1/2 h-[1024px]'/>
                </div>
                    <div className="m-30">
                        <span className='font-[Island_Moments] text-[#FF7A18] text-4xl flex justify-center items-center'>Chuks Kitchen</span>                
                        <p className="flex justify-center items-center mt-2">Create Your Account</p>
                        <div className="flex flex-col justify-center items-center text-[14px]">
                            <div className="">
                                <p className="mt-4 mb-1.5">
                                    Email
                                </p>
                                <input type="email" required placeholder="name@gmail.com" className="border-1 border-[#BDBDBD] w-[380px] rounded-lg p-2"/><br />
                        
                            </div>                  
                            <div className="">
                                <p className="mt-4 mb-1.5">
                                    Phone number
                                </p>
                                <input type="number" required placeholder="8123340690" className="border-1 border-[#BDBDBD] w-[380px] rounded-lg p-2"/><br />
                        
                            </div>
                            <div className="flex-col">
                                <p className="mt-4 mb-1.5">Password</p>
                                <input type="password" placeholder="QWE123#" required className="border-1 border-[#BDBDBD] w-[380px] p-2 rounded-lg" />
                            </div>

                            <div className="">
                                <p className="mt-4 mb-1.5">
                                    Confirm password
                                </p>
                                <input type="password" required placeholder="QWE123#" className="border-1 border-[#BDBDBD] w-[380px] rounded-lg p-2"/><br />
                        
                            </div>
                                <div className='flex mr-8'><input type='checkbox' className='mt-2 mr-2'/> <span className="mt-1.5">I agree to the <span className='text-[#64B5F6]'>Terms & Conditions</span> and <span className='text-[#64B5F6]'>Privacy Policy</span></span></div>
                                <button onClick={() => navigate('/hero')} className='h-12 w-[380px] border-2 bg-[#FF7A18] text-white rounded-lg mt-[12px] '>Continue</button>
                        
                            <p className="mt-1.5">Or continue with</p>
                            <button className='h-12 w-[380px] border-1 border-[#BDBDBD] rounded-lg mt-[18px]'>Continue with Google</button>
                            <button className='h-12 w-[380px] border-1 border-[#BDBDBD] rounded-lg mt-[18px]'>Continue with Apple</button>
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