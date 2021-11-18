

const SingleGridItem = () => {
    return (
        <div className=" max-w-md mx-auto">
            <div className=" bg-pink-50 p-12 relative group cursor-pointer hover:shadow-sm hover:bg-gray-100">
                <img src="./images/image9.png" className="object-cover" alt="" srcset="" />

                <div className="absolute left-0 bottom-0 m-2 space-y-1 opacity-0 transition-opacity duration-300  group-hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 group-hover:line-through w-7 rounded-full text-hekto-blue-light hover:bg-white hover:shadow-md p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 rounded-full text-hekto-blue-light hover:bg-white hover:shadow-md p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 rounded-full text-hekto-blue-light hover:bg-white hover:shadow-md p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>
            </div>
            <div>
                <h2 className="font-jose text-center text-xl mt-1">Product Name</h2>
                <div className="flex items-center justify-center space-x-1 mt-1">
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>

                <div className="flex items-center justify-center space-x-2 mt-2">
                    <p className="font-lato text-hekto-blue-dark text-sm ">$26.00</p>
                    <p className="font-lato text-hekto-pink text-sm  line-through">$26.00</p>
                </div>

            </div>




        </div>
    )
}

export default SingleGridItem
