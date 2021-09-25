import HeroSection from "../../components/Hero/HeroSection"
import Navbar from "../../components/Navbar/Navbar"
import TopBar from "../../components/TopBar/TopBar"
import FeaturedProducts from "./components/FeaturedProducts"
import LatestProducts from "./components/LatestProducts"
import DiscountSection from "./sections/DiscountSection"
import Offers from "./sections/Offers"
import Trending from "./sections/Trending"
import Unique from "./sections/Unique"


const Home = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <HeroSection />
            <FeaturedProducts />
            <LatestProducts />
            <Offers />
            <Unique />
            <Trending />
            <DiscountSection />
        </div>
    )
}

export default Home
