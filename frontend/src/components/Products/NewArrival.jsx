import React, { useRef, useState, useEffect } from 'react'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'


const NewArrival = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true)
    const [canScrollLeft, setCanScrollLeft] = useState(true)

    const newArrival = [
        {
            _id: '1',
            name: 'Stylish Jacket',
            price: 120,
            images: [
                {
                    url: 'https://picsum.photos/500/500?random=1',
                    altText: 'stylish jacket'
                }
            ]
        },
        {
            _id: '2',
            name: 'Stylish Jacket',
            price: 120,
            images: [
                {
                    url: 'https://picsum.photos/500/500?random=2',
                    altText: 'stylish jacket'
                }
            ]
        },
        {
            _id: '3',
            name: 'Stylish Jacket',
            price: 120,
            images: [
                {
                    url: 'https://picsum.photos/500/500?random=3',
                    altText: 'stylish jacket'
                }
            ]
        },
        {
            _id: '4',
            name: 'Stylish Jacket',
            price: 120,
            images: [
                {
                    url: 'https://picsum.photos/500/500?random=4',
                    altText: 'stylish jacket'
                }
            ]
        },
        {
            _id: '5',
            name: 'Stylish Jacket',
            price: 120,
            images: [
                {
                    url: 'https://picsum.photos/500/500?random=5',
                    altText: 'stylish jacket'
                }
            ]
        },
        {
            _id: '6',
            name: 'Stylish Jacket',
            price: 120,
            images: [
                {
                    url: 'https://picsum.photos/500/500?random=6',
                    altText: 'stylish jacket'
                }
            ]
        },
        {
            _id: '7',
            name: 'Stylish Jacket',
            price: 120,
            images: [
                {
                    url: 'https://picsum.photos/500/500?random=7',
                    altText: 'stylish jacket'
                }
            ]
        },
        {
            _id: '8',
            name: 'Stylish Jacket',
            price: 120,
            images: [
                {
                    url: 'https://picsum.photos/500/500?random=8',
                    altText: 'stylish jacket'
                }
            ]
        },

    ]

    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.pageX - scrollRef.current.offsetLeft)
        setScrollLeft(scrollRef.current.scrollLeft)

    }
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX
        scrollRef.current.scrollLeft = scrollLeft - walk

    }
    const handleMouseUpOrLeave = () => {
        setIsDragging(false)
    }




    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -400 : 400;
        scrollRef.current.scrollBy({ left: scrollAmount, behaviour: 'smooth' })

    }




    // scroll buttons 
    const updateScrollButtons = () => {
        const container = scrollRef.current

        if (container) {
            const leftScroll = container.scrollLeft;
            const rightScroll = container.scrollWidth > leftScroll + container.clientWidth

            setCanScrollLeft(leftScroll > 0)
            setCanScrollRight(rightScroll)

        }
    }


    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", updateScrollButtons)
            updateScrollButtons();
            return () => container.removeEventListener("scroll", updateScrollButtons)
        }

    }, [])

    return (
        <section className='py-16 px-4 lg:px-0'>
            <div className="container mx-auto text-center mb-10 relative">
                <h2 className='text-3xl font-bold mb-4 '>Explore New Arrivals</h2>
                <p className='text-lg text-gray-800 mb-8'>
                    Discover the latest styles straights off the runaways, freshly added to keep your wardrobe on the cutting edge of fashion.
                </p>

                {/* scroll button  */}
                <div className="absolute right-0 bottom-[-40px] mb-1 flex space-x-2 ">
                    <button
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className={`p-2 rounded border ${canScrollLeft ? " bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
                        <FiChevronsLeft className='text-2xl ' />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={`p-2 rounded border ${canScrollRight ? " bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
                        <FiChevronsRight className=' text-2xl ' />
                    </button>
                </div>
            </div>

            {/* scrollable content  */}

            <div ref={scrollRef}
                className={`container mx-auto overflow-x-scroll [scrollbar-width:none] flex space-x-6 relative ${isDragging  ? "cursor-grabbing" : "cursor-grab"}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}>
                {
                    newArrival.map((product) => (
                        <div key={product._id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
                            <img
                                className='w-full h-[350px] rounded-xl object-cover'
                                draggable='false'
                                src={product.images[0]?.url}
                                alt={product.images[0]?.altText || product.name} />
                            <div className="absolute bottom-0 right-0 left-0 backdrop-blur-xs text-white p-4 rounded-b-lg">
                                <Link to={`/product/${product._id}`} className='block'>
                                    <h4 className='font-medium'>{product.name}</h4>
                                    <p className='mt-1'>$ {product.price}</p>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default NewArrival
