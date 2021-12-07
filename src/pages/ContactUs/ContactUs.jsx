import Button from "../../components/Button/Button"
import Footer from "../../components/Footer/Footer"
import HeroSection from "../../components/Hero/HeroSection"
import Navbar from "../../components/Navbar/Navbar"
import TopBar from "../../components/TopBar/TopBar"

const ContactUs = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <HeroSection
                heading="" title="Contact Us" showBread text=""
                breadCrumbText="Home / Pages / Contact Us" />
            <div className=" max-w-md mx-auto my-8 md:max-w-3xl lg:max-w-5xl lg:my-20">
                <div className="lg:flex lg:items-center">
                    <div className="lg:flex-1 lg:mr-8">
                        <h2 className="text-xl font-jose font-bold text-hekto-blue-dark md:text-2xl">Information About Us</h2>
                        <p className="text-gray-400 text-xs mt-4 md:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                    </div>

                    <div className="lg:flex-1">
                        <h2 className="text-xl font-jose font-bold text-hekto-blue-dark mt-2 md:text-2xl">Contact Way</h2>
                        <div className="grid grid-cols-2 mt-2 gap-6">
                            <div className="flex items-center space-x-2">
                                <div className="h-8 w-8 bg-purple-900 rounded-full"></div>
                                <div>
                                    <p className="text-gray-400 text-xs md:text-sm">Tel: 877-67-88-99</p>
                                    <p className="text-gray-400 text-xs md:text-sm">E-Mail: shop@store.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="h-8 w-8 bg-pink-500 rounded-full"></div>
                                <div>
                                    <p className="text-gray-400 text-xs md:text-sm">Support Forum</p>
                                    <p className="text-gray-400 text-xs md:text-sm">For over 24hr</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="h-8 w-8 bg-yellow-500 rounded-full"></div>
                                <div>
                                    <p className="text-gray-400 text-xs md:text-sm">20 Margaret st, London</p>
                                    <p className="text-gray-400 text-xs md:text-sm">Great britain, 3NM98-LK</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="h-8 w-8 bg-green-500 rounded-full"></div>
                                <div>
                                    <p className="text-gray-400 text-xs md:text-sm">Free standard shipping</p>
                                    <p className="text-gray-400 text-xs md:text-sm">on all orders.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-8 md:grid md:grid-cols-2 md:place-items-stretch md:gap-8 lg:mt-20">
                    <div>
                        <h2 className="text-xl font-jose font-bold text-hekto-blue-dark md:text-2xl">Get In Touch</h2>
                        <p className="text-gray-400 text-xs tracking-wide md:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.</p>


                        <form action="" className="mt-4">

                            <div className="space-y-2">
                                <input type="text" className="border-2 border-gray-200 w-full p-2 text-sm rounded outline-none focus:border-opacity-0 focus:ring-2 focus:ring-hekto-purple" placeholder="Your Name*" />
                                <input type="email" className="border-2 border-gray-200 w-full p-2 text-sm rounded outline-none focus:border-opacity-0 focus:ring-2 focus:ring-hekto-purple" placeholder="Email Address" />
                            </div>
                            <div className="space-y-2 mt-2 mb-2">
                                <input type="email" className="border-2 border-gray-200 w-full p-2 text-sm rounded outline-none focus:border-opacity-0 focus:ring-2 focus:ring-hekto-purple" placeholder="Subject" />

                                <textarea name="" id="" cols="20" rows="6" placeholder="Type Your Message*" className="border-2 border-gray-200 w-full p-2 text-sm rounded outline-none focus:border-opacity-0 focus:ring-2 focus:ring-hekto-purple"></textarea>
                            </div>
                            <Button title="Send Mail" />

                        </form>
                    </div>
                    <div>
                        <img src="images/contact.svg" className="h-full w-full hidden md:block" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs
