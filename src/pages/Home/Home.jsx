import Footer from "../../components/Footer/Footer"
import HeroSection from "../../components/Hero/HeroSection"
import Navbar from "../../components/Navbar/Navbar"
import TopBar from "../../components/TopBar/TopBar"
import FeaturedProducts from "./components/FeaturedProducts"
import LatestProducts from "./components/LatestProducts"
import DiscountSection from "./sections/DiscountSection"
import LatestBlog from "./sections/LatestBlog"
import LatestNews from "./sections/LatestNews"
import Offers from "./sections/Offers"
import TopCategories from "./sections/TopCategories"
import Trending from "./sections/Trending"
import Unique from "./sections/Unique"


const Home = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <HeroSection showImg />
            <FeaturedProducts />
            <LatestProducts />
            <Offers />
            <Unique />
            <Trending />
            <DiscountSection />
            <TopCategories />
            <LatestNews />
            <LatestBlog />
            <Footer />
        </div>
    )
}

export default Home
