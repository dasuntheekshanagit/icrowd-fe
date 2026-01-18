import {PromotionalPopup} from "@/features/home/sections/promotional-popup"
import {BrandShowcase} from "@/features/home/sections/brand-showcase"
import {CategoryShowcase} from "@/features/home/sections/category-showcase"
import {FeaturedProducts} from "@/features/home/sections/featured-products"
import {HeroCarousel} from "@/features/home/sections/hero-carousel"
import {MoreProducts} from "@/features/home/sections/more-products"
import {PromotionalBanner} from "@/features/home/sections/promotional-banner";
import {CTASection} from "@/features/home/sections/cta-section";

export const Home = () => {
    return (
        <>
            <PromotionalBanner/>
            <PromotionalPopup/>
            <HeroCarousel/>
            <FeaturedProducts/>
            <CategoryShowcase/>
            <CTASection/>
            <BrandShowcase/>
            <MoreProducts/>
        </>
    )
}
