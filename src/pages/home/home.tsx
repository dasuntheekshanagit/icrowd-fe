import { BrandShowcase } from "@/features/home/sections/brand-showcase.tsx"
import { CategoryShowcase } from "@/features/home/sections/category-showcase.tsx"
import { FeaturedProducts } from "@/features/home/sections/featured-products.tsx"
import { HeroCarousel } from "@/features/home/sections/hero-carousel.tsx"
import { MoreProducts } from "@/features/home/sections/more-products.tsx"

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <FeaturedProducts />
      <BrandShowcase />
      <CategoryShowcase />
      <MoreProducts />
    </>
  )
}
