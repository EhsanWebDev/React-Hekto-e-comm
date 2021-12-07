import Button from "../../components/Button/Button"
import Footer from "../../components/Footer/Footer"
import HeroSection from "../../components/Hero/HeroSection"
import Navbar from "../../components/Navbar/Navbar"
import TopBar from "../../components/TopBar/TopBar"

const NotFound = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <HeroSection
                heading="" title="Not Found" showBread text=""
                breadCrumbText="Home / Pages / Not Found" />
            <div className="max-w-md flex flex-col items-center mx-auto md:max-w-3xl lg:max-w-5xl my-8">
                <div><img src="images/not.svg" alt="" /></div>
                <Button title="Back To Home" />
            </div>
            <Footer />
        </div>
    )
}

export default NotFound
