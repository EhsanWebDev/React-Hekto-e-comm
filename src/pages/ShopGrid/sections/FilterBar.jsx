import React, { useState } from 'react'
import FilterComponent from '../../../components/FilterComponent/FilterComponent'

const FilterBar = ({ title = "Ecommerce Acceories & Fashion item", results = "About 9,620 results (0.62 seconds)", onPressGrid, onPressList }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="max-w-sm mx-auto mt-12 lg:max-w-5xl md:max-w-3xl md:flex md:items-center md:justify-between">
            <div>
                <div className="flex">
                    <h2 className="font-jose text-hekto-blue-dark font-medium text-lg">{title}

                    </h2>
                    <div className="relative"> <svg onClick={() => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer inline-block ml-8 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>

                        <div className={`absolute ${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-700 right-0 top-8 rounded overflow-y-scroll bg-white p-4 space-y-4 shadow-2xl h-80 w-80 md:hidden`}>
                            <FilterComponent title="Product Brand" byTitle />
                            <FilterComponent title="Filter By Color" byColor />
                        </div>


                    </div>
                </div>




                <p className="font-lato text-xs text-gray-400">{results}</p>
            </div>

            <div className="mt-2 flex items-center space-x-3">
                <div className="flex items-center">
                    <p className="font-lato text-hekto-blue-light mr-1">Per Page:</p>
                    <input type="text" className="border w-12" />
                </div>
                <div className="flex items-center">
                    <p className="font-lato text-hekto-blue-light mr-1">Sort By:</p>
                    <select name="" id="" className="border text-xs text-hekto-blue-light focus:outline-none">
                        <option className="" value="Best Match">Best Match</option>
                        <option className="" value="Best Match">Trending</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <p className="font-lato text-hekto-blue-light mr-1">View:</p>
                    <span title="Grid mode">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={onPressGrid} className="h-4 w-4 text-hekto-blue-dark cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </span>
                    <span title="List mode">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={onPressList} className="h-4 w-4 text-hekto-blue-light cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </span>

                </div>
            </div>
        </div>
    )
}

export default FilterBar
