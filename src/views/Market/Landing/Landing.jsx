import React from 'react'

import { Box } from '@material-ui/core'

import BannerSection from "./components/BannerSection"
import PopularCategorySection from "./components/PopularCategorySection"
import AllProductsSection from "./components/AllProductsSection"
import BlogSection from "./components/BlogSection"
import FAQSection from "./components/FAQSection"

const Landing = () => {
    return (
        <Box>
            <BannerSection />
            <PopularCategorySection />
            <AllProductsSection />
            <BlogSection />
            <FAQSection />
        </Box>
    )
}

export default Landing
