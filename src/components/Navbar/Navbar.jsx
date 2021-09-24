
import { SearchIcon } from "@heroicons/react/solid";

const linkStyle = "text-sm font-lato font-light transition duration-300 hover:text-pink-600"
const Navbar = () => {
    return (
        <div className="w-full shadow">
            <div className="bg-gray-50 py-3 max-w-5xl mx-auto ">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <p className="font-jose font-semibold text-2xl">Hekto</p>

                        <ul className="flex items-center space-x-7">
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
