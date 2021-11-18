

const FilterComponent = ({ title, byColor, byTitle }) => {
    return (
        <div>
            <h2 className="font-jose text-hekto-blue-dark underline font-semibold text-lg mb-1">{title}</h2>
            {byTitle &&
                <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox h-3.5 w-3.5 text-hekto-purple rounded-sm focus:outline-none focus:ring-0" name="" id="" />
                        <p className="text-sm font-lato text-hekto-blue-light">Coaster Furniture</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox h-3.5 w-3.5 text-hekto-purple rounded-sm focus:outline-none focus:ring-0" name="" id="" />
                        <p className="text-sm font-lato text-hekto-blue-light">Coaster Furniture</p>
                    </div>
                </div>
            }


            {byColor &&
                <div className="grid grid-cols-1 space-y-1">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 flex-1">
                            <div className="w-3.5 h-3.5 bg-hekto-blue rounded-full"></div>
                            <p className="text-gray-600">Blue</p>
                        </div>
                        <div className="flex items-center space-x-1 flex-1">
                            <div className="w-3.5 h-3.5 bg-yellow-600 rounded-full"></div>
                            <p className="text-gray-600">Orange</p>
                        </div>
                        <div className="flex items-center space-x-1 flex-1">
                            <div className="w-3.5 h-3.5 bg-yellow-300 rounded-full"></div>
                            <p className="text-gray-600">Yellow</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 flex-1">
                            <div className="w-3.5 h-3.5 bg-green-400 rounded-full"></div>
                            <p className="text-gray-600">Green</p>
                        </div>
                        <div className="flex items-center space-x-1 flex-1">
                            <div className="w-3.5 h-3.5 bg-purple-500 rounded-full"></div>
                            <p className="text-gray-600">Purple</p>
                        </div>
                        <div className="flex items-center space-x-1 flex-1">
                            <div className="w-3.5 h-3.5 bg-blue-400 rounded-full"></div>
                            <p className="text-gray-600">Sky</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default FilterComponent
