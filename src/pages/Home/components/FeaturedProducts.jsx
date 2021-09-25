import HeadingText from "../../../components/HeadingText/HeadingText"



const FeaturedProducts = () => {
    return (
        <div className="mt-28 max-w-5xl mx-auto">
            <HeadingText title="featured products" />

            <div className="grid grid-cols-1 max-w-xs mx-auto gap-6 mt-8 sm:grid-cols-2 md:max-w-lg lg:grid-cols-4 lg:max-w-full ">
                {/* Product */}
                <div className="rounded-lg shadow-lg">
                    <div className="bg-blue-50 h-3/4 flex items-center justify-center p-8">
                        <img src="images/products/prod-1.png" alt="" />
                    </div>

                    <div className="group bg-gray-50 py-3 transition duration-200 hover:bg-blue-800">
                        <p className="text-pink-600 font-lato text-center text-sm group-hover:text-white">Cantilever chair</p>
                        <div className="flex items-center justify-center space-x-1 mt-2">
                            <div className="h-1 rounded-xl bg-green-600 w-4"></div>
                            <div className="h-1 rounded-xl bg-pink-600 w-4"></div>
                            <div className="h-1 rounded-xl bg-blue-600 w-4"></div>
                        </div>

                        <p className="text-xs text-center mt-4 text-gray-700 font-lato font-medium group-hover:text-white">$42.00</p>
                    </div>
                </div>
                {/* Product */}
                <div className="rounded-lg shadow-lg">
                    <div className="bg-blue-50 h-3/4 flex items-center justify-center">
                        <img className=" object-cover object-center" src="images/products/prod-2.png" alt="" />
                    </div>

                    <div className="group bg-gray-50 py-3 transition duration-200 hover:bg-blue-800">
                        <p className="text-pink-600 font-lato text-center text-sm group-hover:text-white">Cantilever chair</p>
                        <div className="flex items-center justify-center space-x-1 mt-2">
                            <div className="h-1 rounded-xl bg-green-600 w-4"></div>
                            <div className="h-1 rounded-xl bg-pink-600 w-4"></div>
                            <div className="h-1 rounded-xl bg-blue-600 w-4"></div>
                        </div>

                        <p className="text-xs text-center mt-4 text-gray-700 font-lato font-medium group-hover:text-white">$42.00</p>
                    </div>
                </div>
                {/* Product */}
                <div className="rounded-lg shadow-lg">
                    <div className="bg-blue-50 h-3/4 flex items-center justify-center p-8">
                        <img src="images/products/prod-3.png" alt="" />
                    </div>

                    <div className="group bg-gray-50 py-3 transition duration-200 hover:bg-blue-800">
                        <p className="text-pink-600 font-lato text-center text-sm group-hover:text-white">Cantilever chair</p>
                        <div className="flex items-center justify-center space-x-1 mt-2">
                            <div className="h-1 rounded-xl bg-green-600 w-4"></div>
                            <div className="h-1 rounded-xl bg-pink-600 w-4"></div>
                            <div className="h-1 rounded-xl bg-blue-600 w-4"></div>
                        </div>

                        <p className="text-xs text-center mt-4 text-gray-700 font-lato font-medium group-hover:text-white">$42.00</p>
                    </div>
                </div>
                {/* Product */}
                <div className="rounded-lg shadow-lg">
                    <div className="bg-blue-50 h-3/4 flex items-center justify-center p-8">
                        <img className=" object-cover object-center" src="images/products/prod-4.png" alt="" />
                    </div>

                    <div className="group bg-gray-50 py-3 transition duration-200 hover:bg-blue-800">
                        <p className="text-pink-600 font-lato text-center text-sm group-hover:text-white">Cantilever chair</p>
                        <div className="flex items-center justify-center space-x-1 mt-2">
                            <div className="h-1 rounded-xl bg-green-600 w-4"></div>
                            <div className="h-1 rounded-xl bg-pink-600 w-4"></div>
                            <div className="h-1 rounded-xl bg-blue-600 w-4"></div>
                        </div>

                        <p className="text-xs text-center mt-4 text-gray-700 font-lato font-medium group-hover:text-white">$42.00</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default FeaturedProducts
