import {PromotionalBanner} from "@/components/shared/promotional-banner"
import {BrandShowcase} from "@/features/home/sections/brand-showcase"
import {CategoryShowcase} from "@/features/home/sections/category-showcase"
import {FeaturedProducts} from "@/features/home/sections/featured-products"
import {HeroCarousel} from "@/features/home/sections/hero-carousel"
import {MoreProducts} from "@/features/home/sections/more-products"

export default function Home() {
    return (
        <>
            <PromotionalBanner/>
            <HeroCarousel/>
            <FeaturedProducts/>
            <BrandShowcase/>
            <CategoryShowcase/>
            <MoreProducts/>
        </>
    )
}
