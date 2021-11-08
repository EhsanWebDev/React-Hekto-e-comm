
import React from 'react'
import HeroSection from '../../components/Hero/HeroSection'
import Navbar from '../../components/Navbar/Navbar'
import TopBar from '../../components/TopBar/TopBar'
import FilterBar from './sections/FilterBar'

const ShopGrid = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <HeroSection
                heading="" title="Shop Grid Default" showBread text=""
                breadCrumbText="Home / Pages / Grid" />
            <FilterBar />
        </div>
    )
}

export default ShopGrid
