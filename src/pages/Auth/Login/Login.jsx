import Button from "../../../components/Button/Button"
import Footer from "../../../components/Footer/Footer"
import HeroSection from "../../../components/Hero/HeroSection"
import Navbar from "../../../components/Navbar/Navbar"
import TopBar from "../../../components/TopBar/TopBar"

const Login = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <HeroSection
                heading="" title="My Account" showBread text=""
                breadCrumbText="Home / Pages / My Account" />
            <div className="my-20">
                <div className="shadow-md  bg-white max-w-md mx-auto py-8 px-8">
                    <h1 className="font-jose text-hekto-blue-dark text-2xl font-bold text-center">Login</h1>
                    <p className="text-sm text-gray-400 text-center font-lato">Please login using account detail bellow.</p>

                    <form action="" className="mt-4 space-y-3">
                        <input type="email" className="border-2 border-gray-200 w-full p-2 text-sm rounded" placeholder="Email Address" />
                        <input type="password" className="border-2 border-gray-200 w-full p-2 text-sm rounded" placeholder="Password" />
                        <p className="text-sm text-gray-400 capitalize font-lato">forgot your password?</p>
                        <Button title="Sign In" />
                        <p className="text-sm text-center text-gray-400 capitalize font-lato">Don’t have an Account? Create account</p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login
