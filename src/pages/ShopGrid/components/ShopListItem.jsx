

const ShopListItem = () => {
    return (
        <div className="flex mx-4 space-x-4 shadow rounded-md pr-4 overflow-hidden md:mx-0 md:max-w-lg md:ml-auto lg:max-w-2xl">
            <div className="w-40 h-auto">
                <img src="images/watch.png" className="object-cover w-full h-full" alt="" />
            </div>
            <div className="flex-1">
                <div className="flex items-center space-x-8">
                    <h2 className="font-jose text-hekto-blue font-semibold text-lg">Dictum morbi</h2>
                    <div className="flex items-center space-x-1">
                        <div className="w-3.5 h-3.5 rounded-full bg-yellow-600"></div>
                        <div className="w-3.5 h-3.5 rounded-full bg-red-600"></div>
                        <div className="w-3.5 h-3.5 rounded-full bg-purple-600"></div>
                    </div>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                    <p className="font-lato text-hekto-blue-dark text-sm ">$26.00</p>
                    <p className="font-lato text-hekto-pink text-sm  line-through">$26.00</p>
                </div>

                <p className="text-gray-500 text-xs my-2 md:text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, in delectus? Ratione laborum rem amet ad officiis iste quasi nam.
                </p>

                <div className="space-x-4 flex items-center my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6  w-6 rounded-full text-hekto-blue-light shadow-md p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded-full text-hekto-blue-light shadow-md p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded-full text-hekto-blue-light shadow-md p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default ShopListItem
