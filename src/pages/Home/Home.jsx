import HeroSection from "../../components/Hero/HeroSection"
import Navbar from "../../components/Navbar/Navbar"
import TopBar from "../../components/TopBar/TopBar"
import FeaturedProducts from "./components/FeaturedProducts"
import LatestProducts from "./components/LatestProducts"


const Home = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <HeroSection />
            <FeaturedProducts />
            <LatestProducts />
        </div>
    )
}

export default Home
