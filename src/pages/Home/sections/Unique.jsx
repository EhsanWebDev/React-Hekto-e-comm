import Button from "../../../components/Button/Button"


const Unique = () => {
    return (
        <div className="w-full bg-indigo-100">
            <div className="mt-24  mx-auto grid grid-cols-1 max-w-xs py-4 md:grid-cols-2 md:max-w-5xl md:place-items-center">
                <div className="">
                    <img className="object-cover" src="/images/unique-1.png" alt="" />
                </div>


                <div className="">
                    <h2 className="text-xl text-blue-900 tracking-wider font-jose capitalize mb-8 font-semibold md:text-2xl lg:text3xl">Unique Features Of latest & Trending Products</h2>

                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-2 h-2 bg-hekto-pink rounded-full md:w-3 md:h-3" />
                        <p className="font-lato tracking-wide text-xs font-light text-gray-500 md:text-sm">All frames constructed with hardwood solids and laminates</p>
                    </div>
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-2 h-2 bg-hekto-blue-dark rounded-full md:w-3 md:h-3" />
                        <p className="font-lato tracking-wide text-xs font-light text-gray-500 md:text-sm">All frames constructed with hardwood solids and laminates</p>
                    </div>
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-2 h-2 bg-hekto-purple rounded-full md:w-3 md:h-3" />
                        <p className="font-lato tracking-wide text-xs font-light text-gray-500 md:text-sm">All frames constructed with hardwood solids and laminates</p>
                    </div>

                    <div className="flex  items-center space-x-2 mt-8">
                        <Button />
                        <div>
                            <p className="font-jose text-xs md:text-sm">B & B Italian Sofa</p>
                            <p className="text-xs font-lato font-light">$32.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Unique
