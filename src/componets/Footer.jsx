import React from 'react'
import footerLogo from "../assets/footer-logo.png"
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className='mt-9'>
        <div className='bg-gray-900 text-white py-10 px-4 '>
            <div className='px-7 h-32" flex justify-between items-center'>
                 <div className='md:w-1/2 w-full'>
                      <img src={footerLogo} alt="Logo" className='w-36 mb-5' />
                        <ul className='flex flex-col md:flex-row gap-3'>
                         <li><a href="/">Home</a></li>
                         <li><a href="/Services">Services</a></li>
                         <li className='flex item-inline'><a href="/About Us">About Us</a></li>
                         <li><a href="/Contact">Contact</a></li>
                        </ul>  
                </div>
                    <form className="max-w-md mx-auto"> 
                    <p className='pb-3'>Subscribe to our newsletter to receive the latest updates, news and offer !</p>  
                       <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                         <div className="relative">
                         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                           <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                         </svg>
                       </div>
                      <input type="search" id="default-search" className="block w-full p-3  ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" required />
                   <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
                </div>
             </form>
            </div >
                <div className=' '>
                   <div className='px-7 border-t border-gray-300 mt-4 pt-4 flex justify-between '>
                     <ul className='flex gap-4 flex '>
                       <li><a href="">Privacy Policy</a></li>
                       <li><a href="">Terms of Services</a></li>
                     </ul>
                     <ul className='flex gap-4'>
                     <Link to="https://www.facebook.com/"><FaFacebookF /></Link>
                       <Link to="https://www.twiter.com/"><FaTwitter /></Link>
                       <Link to="https://www.instagram.com/"><FaInstagram /></Link>
                     </ul>
                    
                   </div>
                  
                </div>
        </div>
     </div>    
  )
}

export default Footer