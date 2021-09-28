import Button from "../Button/Button"


const Footer = () => {
    return (
        <div className="bg-purple-50 py-20">


            <div className="max-w-sm items-center justify-between 
                 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2
                  md:max-w-lg lg:grid-cols-2 lg:max-w-5xl">
                <div className="md:col-span-2 lg:col-span-1 px-2 py-2">
                    <p className="text-3xl font-jose">Hekto</p>

                    <div className="flex items-center mt-4">
                        <input type="text" placeholder="Enter Email Address" className="py-2 px-4 bg-white focus:outline-none " />
                        <button className=" bg-hekto-pink text-white px-4 py-2 rounded-md">
                            Sign Up
                        </button>
                    </div>

                    <p className=" font-lato text-sm text-gray-500 capitalize mt-6">contact info</p>
                    <p className=" font-lato text-sm text-gray-500 capitalize mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, laboriosam.</p>
                </div>

                <div className="grid grid-cols-1  md:col-span-2 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:col-span-1">
                    <div >
                        <p className="font-jose text-2xl">Categories</p>

                        <ul className="space-y-2 mt-3">
                            <li><a href="#" className="font-lato text-sm text-gray-500">Lorem ipsum dolor sit</a></li>
                            <li><a href="#" className="font-lato text-sm text-gray-500">Lorem ipsum dolor sit</a></li>
                            <li><a href="#" className="font-lato text-sm text-gray-500">Lorem ipsum dolor sit</a></li>
                            <li><a href="#" className="font-lato text-sm text-gray-500">Lorem ipsum dolor sit</a></li>
                            <li><a href="#" className="font-lato text-sm text-gray-500">Waterproof Headphones</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-jose text-2xl">Categories</p>

                        <ul className="space-y-2 mt-3">
                            <li><a href="#" className="font-lato text-sm text-gray-500">Lorem ipsum dolor sit</a></li>
                            <li><a href="#" className="font-lato text-sm text-gray-500">Lorem ipsum dolor sit</a></li>
                            <li><a href="#" className="font-lato text-sm text-gray-500">Lorem ipsum dolor sit</a></li>
                            <li><a href="#" className="font-lato text-sm text-gray-500">Lorem ipsum dolor sit</a></li>
                            <li><a href="#" className="font-lato text-sm text-gray-500">Waterproof Headphones</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-jose text-2xl">Categories</p>

                        <ul className="space-y-2 mt-3">
                            <li><a href="#" className="font-lato text-sm text-gray-500">Lorem ipsum dolor sit</a></li>
                            <li><a href="#" className="font-lato text-sm text-gray-500">Lorem ipsum dolor sit</a></li>
                            <li><a href="#" className="font-lato text-sm text-gray-500">Lorem ipsum dolor sit</a></li>
                            <li><a href="#" className="font-lato text-sm text-gray-500">Lorem ipsum dolor sit</a></li>
                            <li><a href="#" className="font-lato text-sm text-gray-500">Waterproof Headphones</a></li>
                        </ul>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Footer
