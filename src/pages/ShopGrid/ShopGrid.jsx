
import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/Hero/HeroSection'
import Navbar from '../../components/Navbar/Navbar'
import TopBar from '../../components/TopBar/TopBar'
import ShopListWithFilters from './components/ShopListWithFilters'
import ShopProductGrid from './components/ShopProductsGrid'
import FilterBar from './sections/FilterBar'

const ShopGrid = () => {
    const [gridMode, setGridMode] = useState(false)
    return (
        <div>
            <TopBar />
            <Navbar />
            <HeroSection
                heading="" title="Shop Grid Default" showBread text=""
                breadCrumbText="Home / Pages / Grid" />
            <FilterBar onPressGrid={() => setGridMode(true)} onPressList={() => setGridMode(false)} />
            {!gridMode ? <ShopListWithFilters /> :
                <ShopProductGrid />
            }


            <Footer />
        </div>
    )
}

export default ShopGrid
