import HeadingText from "../../../components/HeadingText/HeadingText"

const Trending = () => {
    return (
        <div className="mt-24 max-w-5xl mx-auto">
            <HeadingText title="trending products" />

            <div className="mt-8 grid grid-cols-1 max-w-xs mx-auto gap-8 md:max-w-xl md:grid-cols-2 lg:max-w-full lg:grid-cols-4">
                {/* Product */}
                <div className="rounded-md shadow-lg p-2 flex flex-col justify-center ">
                    <div className=" py-8 bg-gray-100 bg-opacity-80 flex items-center justify-center h-full">
                        <img className="object-cover" src="/images/products/prod-9.png" alt="" />
                    </div>
                    <div className="text-center py-4">
                        <p className="text-blue-800 mb-2">Cantilever chair</p>
                        <div className="flex items-center justify-center space-x-2">
                            <p className="text-sm text-blue-800 font-jose">$26.00</p>
                            <p className="text-xs line-through font-jose text-gray-500 font-light">$42.00</p>
                        </div>
                    </div>
                </div>
                {/* Product */}
                <div className="rounded-md shadow-lg p-2 flex flex-col justify-center ">
                    <div className=" py-8 bg-gray-100 bg-opacity-80 flex items-center justify-center h-full">
                        <img className="object-cover" src="/images/products/prod-10.png" alt="" />
                    </div>
                    <div className="text-center py-4">
                        <p className="text-blue-800 mb-2">Cantilever chair</p>
                        <div className="flex items-center justify-center space-x-2">
                            <p className="text-sm text-blue-800 font-jose">$26.00</p>
                            <p className="text-xs line-through font-jose text-gray-500 font-light">$42.00</p>
                        </div>
                    </div>
                </div>
                {/* Product */}
                <div className="rounded-md shadow-lg p-2 flex flex-col justify-center ">
                    <div className=" py-8 bg-gray-100 bg-opacity-80 flex items-center justify-center h-full">
                        <img className="object-cover" src="/images/products/prod-11.png" alt="" />
                    </div>
                    <div className="text-center py-4">
                        <p className="text-blue-800 mb-2">Cantilever chair</p>
                        <div className="flex items-center justify-center space-x-2">
                            <p className="text-sm text-blue-800 font-jose">$26.00</p>
                            <p className="text-xs line-through font-jose text-gray-500 font-light">$42.00</p>
                        </div>
                    </div>
                </div>
                {/* Product */}
                <div className="rounded-md shadow-lg p-2 flex flex-col justify-center ">
                    <div className=" py-8 bg-gray-100 bg-opacity-80 flex items-center justify-center h-full">
                        <img className="object-cover" src="/images/products/prod-8.png" alt="" />
                    </div>
                    <div className="text-center py-4">
                        <p className="text-blue-800 mb-2">Cantilever chair</p>
                        <div className="flex items-center justify-center space-x-2">
                            <p className="text-sm text-blue-800 font-jose">$26.00</p>
                            <p className="text-xs line-through font-jose text-gray-500 font-light">$42.00</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-12 mb-20 grid grid-cols-1 md:grid-cols-2 md:max-w-xl mx-auto md:gap-8 lg:grid-cols-3 xl:grid-cols-5 lg:max-w-full">
                <div className="bg-pink-50 shadow w-full max-w-xs p-8 mx-auto flex flex-col justify-between items-center  lg:max-w-full lg:items-start xl:col-span-2">

                    <div>
                        <p className="font-jose text-xl text-blue-900">23% off on all products</p>
                        <p className="underline text-xs text-pink-600 mt-2 capitalize font-lato text-center lg:text-left">shop now</p>
                    </div>

                    <div className="mt-8 lg:self-end">
                        <img src="/images/trending/trend-1.png" alt="" />
                    </div>
                </div>

                <div className="bg-blue-50 shadow w-full max-w-xs  mt-8 mx-auto p-8 flex flex-col justify-between items-center md:mt-0  lg:max-w-full lg:items-start xl:col-span-2">

                    <div>
                        <p className="font-jose text-xl text-blue-900">23% off on all products</p>
                        <p className="underline text-xs text-pink-600 capitalize font-lato mt-2 text-center lg:text-left">view collection</p>
                    </div>


                    <div className=" mt-8 lg:self-end">
                        <img src="/images/trending/trend-2.png" alt="" />
                    </div>
                </div>

                <div className="w-full mx-auto max-w-xs mt-8 md:col-span-2 lg:col-span-1 lg:mt-8">
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-gray-100 w-32 flex items-center justify-center py-2 xl:w-20 xl:h-20">
                            <img src="images/trending/trend-3.png" alt="" />
                        </div>

                        <div className="flex-1">
                            <p className="font-jose text-blue-900 text-lg lg:text-sm xl:text-xs xl:font-medium">Executive Seat chair</p>
                            <p className="text-blue-900 text-sm lg:text-xs">$32.00</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-gray-100 w-32 flex items-center justify-center py-2 xl:w-20 xl:h-20">
                            <img src="images/trending/trend-4.png" alt="" />
                        </div>

                        <div className="flex-1">
                            <p className="font-jose text-blue-900 text-lg lg:text-sm xl:text-xs xl:font-medium">Executive Seat chair</p>
                            <p className="text-blue-900 text-sm lg:text-xs">$32.00</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-gray-100 w-32 flex items-center justify-center py-2 xl:w-20 xl:h-20">
                            <img src="images/trending/trend-5.png" alt="" />
                        </div>

                        <div className="flex-1">
                            <p className="font-jose text-blue-900 text-lg lg:text-sm xl:text-xs xl:font-medium">Executive Seat chair</p>
                            <p className="text-blue-900 text-sm lg:text-xs">$32.00</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Trending
