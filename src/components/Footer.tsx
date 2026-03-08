import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[600px] md:h-[300px] z-10 bg-amber-950 text-amber-50/80 p-8 flex items-center rounded-t-4xl">
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 w-full'>
            <div className='md:col-span-2 flex flex-col gap-2 md:gap-4 text-center md:text-left items-center md:items-start'>
                <div className="w-28 border rounded flex overflow-hidden mb-1">
                    <img
                    src="https://graphicsfamily.com/wp-content/uploads/edd/2021/11/Logo-Template-for-Food--1536x864.jpg"
                    alt="logo"
                    className="h-full object-cover"
                    />
                </div>
                <p className="max-w-xs text-sm leading-relaxed">Delivering happiness to your doorstep since 2026.</p>
                <p className="mt-2 text-xs text-amber-50/40">© My own Swiggy clone</p>
            </div>
            <div className='text-center md:text-left'>
                <h3 className='text-white font-bold tracking-widest text-sm mb-3 pointer-events-none'>COMPANY</h3>
                <ul className='flex flex-col md:gap-3 gap-2'>
                    <li className='hover:cursor-pointer hover:text-amber-50'>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className='hover:cursor-pointer hover:text-amber-50'>
                        Features
                    </li>
                    <li className='hover:cursor-pointer hover:text-amber-50'>
                        Works
                    </li>
                    <li className='hover:cursor-pointer hover:text-amber-50'>
                        Careers
                    </li>
                </ul>
            </div>
            <div className='text-center md:text-left'>
                <h3 className='text-white font-bold tracking-widest text-sm mb-3 pointer-events-none'>HELP</h3>
                <ul className='flex flex-col md:gap-3 gap-2'>
                    <li className='hover:cursor-pointer hover:text-amber-50'>
                        Customer Support
                    </li>
                    <li className='hover:cursor-pointer hover:text-amber-50'>
                        Delivery Details
                    </li>
                    <li className='hover:cursor-pointer hover:text-amber-50'>
                        Terms & Conditions
                    </li>
                    <li className='hover:cursor-pointer hover:text-amber-50'>
                        Privacy Policy
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer