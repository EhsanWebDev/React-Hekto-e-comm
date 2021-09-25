import { CheckIcon } from "@heroicons/react/solid"
import Button from "../../../components/Button/Button"
import HeadingText from "../../../components/HeadingText/HeadingText"


const linkStyles = "capitalize text-sm font-lato transition duration-300 cursor-pointer hover:text-pink-600 hover:underline"

const DiscountSection = () => {
    return (
        <div className=" mb-20 max-w-5xl mx-auto">
            <HeadingText title="discount item" />

            <ul className="flex justify-center space-x-6 mt-4 mb-12">
                <li>
                    <p className={linkStyles}>wood chair</p>
                </li>
                <li>
                    <p className={linkStyles}>plastic chair</p>
                </li>
                <li>
                    <p className={linkStyles}>sofa collection</p>
                </li>

            </ul>

            <div className="grid grid-cols-1 w-full max-w-xs mx-auto lg:grid-cols-2 lg:max-w-full lg:gap-8">
                <div className="bg-pink-50 rounded-full lg:order-2 ">
                    <img className=" object-cover" src="images/discount-1.png" alt="" />
                </div>

                <div className="mt-8 flex flex-col justify-center">
                    <div>
                        <p className="font-jose text-blue-900 text-xl font-semibold lg:text-3xl lg:mb-4">20% Discount Of All Products</p>

                        <p className="text-pink-600 font-lato mb-4">Eams Sofa Compact</p>
                        <p className="text-gray-400 opacity-80 text-sm tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Officia, molestias? Maxime cum nobis, sit perferendis modi

                        </p>
                    </div>

                    <div>
                        <div className="mt-4 space-y-1 grid grid-cols-1 lg:grid-cols-2">
                            <div className="flex items-center space-x-1">
                                <CheckIcon className="w-4 h-4 text-gray-400" />
                                <p className="text-gray-400 text-sm">Material expose like metals</p>
                            </div>
                            <div className="flex items-center space-x-1">
                                <CheckIcon className="w-4 h-4 text-gray-400" />
                                <p className="text-gray-400 text-sm">Material expose like metals</p>
                            </div>
                            <div className="flex items-center space-x-1">
                                <CheckIcon className="w-4 h-4 text-gray-400" />
                                <p className="text-gray-400 text-sm">Material expose like metals</p>
                            </div>
                            <div className="flex items-center space-x-1">
                                <CheckIcon className="w-4 h-4 text-gray-400" />
                                <p className="text-gray-400 text-sm">Material expose like metals</p>
                            </div>
                        </div>

                        <div className=" mt-8">
                            <Button />
                        </div>
                    </div>




                </div>

            </div>

        </div>
    )
}

export default DiscountSection
