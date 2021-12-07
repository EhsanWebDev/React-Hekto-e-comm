import { NavLink } from "react-router-dom"

const Menu = () => {
    return (
        <div className="grid place-content-center min-h-screen bg-gray-800 text-white">
            <h1 className="text-5xl font-jose text-white border-b-2 border-blue-500 mb-8">Hekto e-comm Store</h1>

            <NavLink to="/home" className="text-3xl transform transition-all duration-300 hover:translate-x-2 hover:underline hover:text-hekto-red" >Home </NavLink>
            <NavLink to="/shop" className="text-3xl transform transition-all duration-300 hover:translate-x-2 hover:underline hover:text-hekto-red" >Products Grid </NavLink>
            <NavLink to="/product-details" className="text-3xl transform transition-all duration-300 hover:translate-x-2 hover:underline hover:text-hekto-red" >Product Details </NavLink>
            <NavLink to="/login" className="text-3xl transform transition-all duration-300 hover:translate-x-2 hover:underline hover:text-hekto-red" >Login </NavLink>
            <NavLink to="/contact-us" className="text-3xl transform transition-all duration-300 hover:translate-x-2 hover:underline hover:text-hekto-red" >Contact Us </NavLink>
            <NavLink to="/not-found" className="text-3xl transform transition-all font-lato duration-300 hover:translate-x-2 hover:underline hover:text-hekto-red" >Not found page  </NavLink>


        </div>
    )
}

export default Menu
