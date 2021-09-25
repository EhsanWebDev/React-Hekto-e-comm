
import { MenuAlt1Icon, SearchIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";

const linkStyle = "text-sm font-lato font-light transition duration-300 hover:text-pink-600"
const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <div className="w-full shadow">

            <div className={`fixed left-0 top-0 w-72 h-screen bg-hekto-blue-dark rounded-r-md text-white z-10 p-2 transform  ${showSidebar ? "translate-x-0" : "-translate-x-full"}  transition-transform duration-300 lg:hidden`}>
                <div className="relative ">
                    <XIcon className="w-6 h-6 absolute right-0 cursor-pointer" onClick={() => setShowSidebar(false)} />
                    <ul className="flex flex-col items-center justify-center h-screen space-y-4">
                        <li><a href="#" className={linkStyle}>Home</a></li>
                        <li><a href="#" className={linkStyle}>Pages</a></li>
                        <li><a href="#" className={linkStyle}>Products</a></li>
                        <li><a href="#" className={linkStyle}>Blog</a></li>
                        <li><a href="#" className={linkStyle}>Shop</a></li>
                        <li><a href="#" className={linkStyle}>Contact</a></li>
                    </ul>
                </div>
            </div>



            <div className="bg-gray-50 py-3 max-w-5xl mx-auto ">
                <div className="flex items-center justify-between px-2 lg:px-0">
                    <div className="flex items-center">
                        <div className="flex items-center space-x-3">
                            <MenuAlt1Icon className="w-8 h-8 cursor-pointer lg:hidden" onClick={() => setShowSidebar(true)} />
                            <p className="font-jose font-bold text-3xl pt-1 text-hekto-blue-dark">Hekto</p>
                        </div>


                        <ul className="hidden items-center space-x-7 lg:flex lg:ml-6">
                            <li><a href="#" className={linkStyle}>Home</a></li>
                            <li><a href="#" className={linkStyle}>Pages</a></li>
                            <li><a href="#" className={linkStyle}>Products</a></li>
                            <li><a href="#" className={linkStyle}>Blog</a></li>
                            <li><a href="#" className={linkStyle}>Shop</a></li>
                            <li><a href="#" className={linkStyle}>Contact</a></li>
                        </ul>
                    </div>

                    <div className="flex ">
                        <input className="border border-gray-300  px-4 focus:outline-none focus:border-0 focus:ring-2 focus:ring-pink-600 " type="text" />
                        <button className="bg-pink-600 py-2 px-2.5 text-white"> <SearchIcon className="w-5 h-5" /> </button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Navbar
