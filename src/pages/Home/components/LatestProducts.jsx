import HeadingText from "../../../components/HeadingText/HeadingText"

const linkStyles = "capitalize text-sm font-lato transition duration-300 cursor-pointer hover:text-pink-600 hover:underline"

const LatestProducts = () => {
    return (
        <div className="mt-24 max-w-5xl mx-auto">
            <HeadingText title="latest products" />

            <ul className="flex justify-center space-x-6 mt-4 mb-12">
                <li>
                    <p className={linkStyles}>new arrival</p>
                </li>
                <li>
                    <p className={linkStyles}>best seller</p>
                </li>
                <li>
                    <p className={linkStyles}> featured</p>
                </li>
                <li>
                    <p className={linkStyles}>special offers</p>
                </li>
            </ul>
            {/* <div class="flex">

            </div> */}
            <div className="grid grid-cols-3 gap-8 gap-y-24 auto-cols-max">
                {/* Product */}
                <div>
                    <div className="bg-gray-100 h-full flex justify-center items-center">
                        <img src="images/products/prod-5.png" alt="" />
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <p className="font-jose text-sm">Comfort Handy Craft</p>

                        <div className="flex items-center space-x-2">
                            <p className="text-sm text-gray-700 font-lato font-medium">$42.00</p>
                            <p className="text-pink-600 line-through text-xs font-lato">$49.00</p>
                        </div>
                    </div>
                </div>
                {/* Product */}
                <div>
                    <div className="bg-gray-100 h-full flex justify-center items-center">
                        <img className="object-cover" src="images/products/prod-7.png" alt="" />
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <p className="font-jose text-sm">Comfort Handy Craft</p>

                        <div className="flex items-center space-x-2">
                            <p className="text-sm text-gray-700 font-lato font-medium">$42.00</p>
                            <p className="text-pink-600 line-through text-xs font-lato">$49.00</p>
                        </div>
                    </div>
                </div>
                {/* Product */}
                <div>
                    <div className="bg-gray-100 h-full flex justify-center items-center">
                        <img src="images/products/prod-1.png" alt="" />
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <p className="font-jose text-sm">Comfort Handy Craft</p>

                        <div className="flex items-center space-x-2">
                            <p className="text-sm text-gray-700 font-lato font-medium">$42.00</p>
                            <p className="text-pink-600 line-through text-xs font-lato">$49.00</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-gray-100 h-full flex justify-center items-center">
                        <img src="images/products/prod-5.png" alt="" />
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <p className="font-jose text-sm">Comfort Handy Craft</p>

                        <div className="flex items-center space-x-2">
                            <p className="text-sm text-gray-700 font-lato font-medium">$42.00</p>
                            <p className="text-pink-600 line-through text-xs font-lato">$49.00</p>
                        </div>
                    </div>
                </div>
                {/* Product */}
                <div>
                    <div className="bg-gray-100 h-full flex justify-center items-center">
                        <img className="object-cover" src="images/products/prod-7.png" alt="" />
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <p className="font-jose text-sm">Comfort Handy Craft</p>

                        <div className="flex items-center space-x-2">
                            <p className="text-sm text-gray-700 font-lato font-medium">$42.00</p>
                            <p className="text-pink-600 line-through text-xs font-lato">$49.00</p>
                        </div>
                    </div>
                </div>
                {/* Product */}
                <div>
                    <div className="bg-gray-100 h-full flex justify-center items-center">
                        <img src="images/products/prod-1.png" alt="" />
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <p className="font-jose text-sm">Comfort Handy Craft</p>

                        <div className="flex items-center space-x-2">
                            <p className="text-sm text-gray-700 font-lato font-medium">$42.00</p>
                            <p className="text-pink-600 line-through text-xs font-lato">$49.00</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LatestProducts
