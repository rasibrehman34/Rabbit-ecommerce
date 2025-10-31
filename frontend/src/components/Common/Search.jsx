import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const handleSearchToggle = () => {
        setIsOpen(!isOpen)
    }
    const handleSearch = (e) => {
        e.preventDefault();
        console.log('search term:', searchTerm)
        setIsOpen(false)
        setSearchTerm('')
    }
    

    return (
        <div className={`flex justify-center items-center w-full transition-all duration-200 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto" }`}>

            {
                isOpen ? (
                <form onSubmit={handleSearch} className="relative flex justify-center items-center w-full">
                    <div className="relative w-1/2">
                    <input 
                    type="text"
                    onChange={(e)=>setSearchTerm(e.target.value)} 
                    value={searchTerm} 
                    placeholder="Search Item"
                    className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700" 
                    />

                    {/* search icon  */}
                    <button
                    type="submit"
                    className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
                         <HiMagnifyingGlass className="h-6 w-6" />
                    </button>                                        
                    </div>

                    {/* close button  */}
                    <button 
                    onClick={handleSearchToggle}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
                        <HiMiniXMark  className="h-5 w-6"  />
                    </button>
                </form> 
                ) : (
                    <button
                    onClick={handleSearchToggle}
                    className="text-gray-600 hover:text-black">
                        <HiMagnifyingGlass className=" cursor-pointer h-5 w-6" />
                    </button>
                )
            }

        </div>
    )
}

export default Search
