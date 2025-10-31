import React from 'react'
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";


const TopBar = () => {
    return (
        <div className='bg-[#ea2e0e] text-white'>
            <div className='container mx-auto flex justify-between items-center py-3 px-4'>
                <div className='hidden md:flex items-center space-x-4' >
                    <a href="#" className='hover:text-gray-300'>
                        <TbBrandMeta className="h-5 w-5" />
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                        <IoLogoInstagram className="h-5 w-5" />
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                        <RiTwitterXLine className="h-4 w-4 " />
                    </a>
                </div>

                <div className="text-sm text-center flex-grow">
                    <span className='capitalize'>we ship world wide fast and reliable shoping</span>
                </div>

                <div className="text-sm hidden md:block">
                    <a href="tel:+923117052178" className='hover:text-gray-300'>0311-7052178</a>
                </div>


            </div>


        </div>
    )
}

export default TopBar
