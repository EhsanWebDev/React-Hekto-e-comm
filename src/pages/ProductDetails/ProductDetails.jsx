import { useState } from "react"
import Footer from "../../components/Footer/Footer"
import HeroSection from "../../components/Hero/HeroSection"
import Navbar from "../../components/Navbar/Navbar"
import TopBar from "../../components/TopBar/TopBar"


const ProductDetails = () => {
    const [showModel, setShowModel] = useState(false)
    const [readMore, setReadMore] = useState(false)

    const handleCLick = (value) => {
        setShowModel(value)
    }
    return (
        <div>
            <TopBar />
            <Navbar />
            <HeroSection
                heading="" title="Product Details" showBread text=""
                breadCrumbText="Home / Pages / Product Details" />
            <div className="my-4 shadow-lg max-w-md mx-auto bg-white flex flex-col py-1 px-2 space-y-3  md:max-w-3xl lg:max-w-5xl md:flex-row md:items-center md:my-20">
                <div className="flex flex-col overflow-hidden space-y-1 md:flex-row-reverse md:space-y-0 md:h-96">
                    <div className=" h-96 md:h-full md:mx-2 cursor-pointer" onClick={() => handleCLick(true)}>
                        <img src="images/det1.png" className="object-cover w-full h-full" alt="" />
                    </div>
                    <div className="flex justify-between items-center space-x-1 md:flex-col md:space-x-0 md:space-y-2">
                        <div className="h-32 w-32 lg:h-36 lg:w-36 ">
                            <img src="images/det2.png" className="object-cover w-full h-full" alt="" />
                        </div>
                        <div className="h-32 w-32 lg:h-36 lg:w-36">
                            <img src="images/det3.png" className="object-cover w-full h-full" alt="" />
                        </div>
                        <div className="h-32 w-32 lg:h-36 lg:w-36">
                            <img src="images/det4.png" className="object-cover w-full h-full" alt="" />
                        </div>
                    </div>

                </div>

                <div className="flex-1 md:ml-2 lg:ml-6">
                    <h1 className="text-xl font-jose text-hekto-blue-dark md:text-2xl lg:text-3xl lg:pb-2">Playwood arm chair</h1>

                    <div className="flex items-center lg:pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <p className="text-xs font-jose ml-1">(22)</p>
                    </div>

                    <div className="flex items-center space-x-2 mt-1 lg:pb-2">
                        <p className="font-lato text-hekto-blue-dark text-sm ">$26.00</p>
                        <p className="font-lato text-hekto-pink text-xs line-through">$26.00</p>
                    </div>

                    <p className=" font-jose text-gray-400 tracking-wider text-xs my-2 md:text-sm lg:pb-2 lg:text-sm ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, in delectus? Ratione laborum rem amet ad officiis iste quasi nam.
                    </p>
                    <button className="text-hekto-blue-light capitalize text-sm w-full py-1 px-2 bg-gray-50 shadow rounded hover:bg-gray-100 focus:ring-1 focus:ring-hekto-pink lg:w-auto lg:px-8">
                        Add to cart
                    </button>
                </div>
            </div>

            <div className={`${showModel ? "block" : "hidden pointer-events-none"} fixed inset-0 bg-gray-900 bg-opacity-70 grid place-items-center transition duration-1000`} onClick={() => handleCLick(false)}>
                <div className="max-w-xs mx-auto md:max-w-3xl lg:max-w-full">
                    <div className="w-full h-full">
                        <img src="images/det1.png" className="object-cover w-full h-full" alt="" />
                    </div>
                </div>
            </div>

            <div className=" bg-purple-50 py-12">
                <div className="max-w-md mx-auto space-y-2 md:max-w-3xl lg:max-w-5xl ">
                    <div className="flex items-center justify-between md:justify-start md:space-x-12">
                        <h4 className="font-jose underline text-base text-hekto-blue-dark capitalize md:text-lg">Description</h4>
                        <h4 className="font-jose  text-base text-hekto-blue-dark capitalize md:text-lg">Additional info</h4>
                        <h4 className="font-jose  text-base text-hekto-blue-dark capitalize md:text-lg">reviews</h4>
                        <h4 className="font-jose  text-base text-hekto-blue-dark capitalize md:text-lg">video</h4>

                    </div>

                    <div>
                        <h2 className="font-jose text-hekto-blue-dark md:text-lg">Varius tempor.</h2>
                        <div className="relative">
                            <p className={`text-xs text-gray-500 text-justify tracking-wider font-lato md:text-sm ${readMore ? "line-clamp-none" : "line-clamp-3"}`}>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.</p>
                            <button className="text-xs  absolute right-0 text-hekto-blue " onClick={() => setReadMore(!readMore)}> {readMore ? "Read Less" : "Read More"}</button>
                        </div>

                        <h2 className="font-jose text-hekto-blue-dark mt-6 md:text-lg">More details</h2>

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-hekto-blue-dark" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <p className="text-xs text-gray-600 font-lato tracking-wider truncate md:text-sm">Aliquam dis vulputate vulputate integer sagittis.</p>
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-hekto-blue-dark" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <p className="text-xs text-gray-600 font-lato tracking-wider truncate md:text-sm">Aliquam dis vulputate vulputate integer sagittis.</p>
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-hekto-blue-dark" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <p className="text-xs text-gray-600 font-lato tracking-wider truncate md:text-sm">Aliquam dis vulputate vulputate integer sagittis.</p>
                        </div>

                    </div>

                </div>

            </div>


            <Footer />
        </div>
    )
}

export default ProductDetails
