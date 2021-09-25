import Button from "../../../components/Button/Button"


const Unique = () => {
    return (
        <div className="w-full bg-indigo-100">
            <div className="mt-24 max-w-5xl mx-auto flex justify-between items-center py-12">
                <div className="flex-1">
                    <img className="h-96 object-cover w-5/6" src="/images/unique-1.png" alt="" />
                </div>


                <div className="flex-1">
                    <h2 className="text-3xl text-blue-900 tracking-wider font-jose capitalize mb-8 font-semibold">Unique Features Of latest & Trending Products</h2>

                    <div className="flex items-center space-x-4 mb-4">
                        <div className="w-3 h-3 bg-pink-600 rounded-full" />
                        <p className="font-lato tracking-wide text-sm font-light text-gray-500">All frames constructed with hardwood solids and laminates</p>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="w-3 h-3 bg-blue-600 rounded-full" />
                        <p className="font-lato tracking-wide text-sm font-light text-gray-500">All frames constructed with hardwood solids and laminates</p>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full" />
                        <p className="font-lato tracking-wide text-sm font-light text-gray-500">All frames constructed with hardwood solids and laminates</p>
                    </div>

                    <div className="flex items-center space-x-4 mt-8">
                        <Button />
                        <div>
                            <p className="font-jose text-sm">B & B Italian Sofa</p>
                            <p className="text-xs font-lato font-light">$32.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Unique
