import React from 'react'
import heroImage from '../../assets/rabbit-hero.webp'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
   <section className='relative'>
    <img 
    className='w-full sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover '
    src={heroImage} alt="hero Image" />
    <div className="absolute inset-0 bg-black/30 flex items-center justify-center ">
        <div className="text-center text-white p-6">
            <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>Vacation <br /> Ready</h1>
            <p className='text-sm tracking-tighter md:text-lg mb-6'>
                Explore our vacatio-ready outfits with fast worldwide shipping.
            </p>
            <Link className='bg-white text-gray-950 px-6 py-2 rounded-sm text-lg'>
            Shop Now
            </Link>
        </div>
    </div>
   </section>
  )
}

export default Hero
