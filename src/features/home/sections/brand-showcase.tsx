import { apiService } from "@/services/api/api-service"
import { useEffect, useState } from "react"
import {BrandCard} from "@/features/home/components/brand-card.tsx";

export function BrandShowcase() {
  const [brands, setBrands] = useState<any[]>([])

  useEffect(() => {
    const fetchBrands = async () => {
      const data = await apiService.getBrandList()
      setBrands(data)
    }
    fetchBrands()
  }, [])

  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Shop by Brand</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {brands.map((brand) => (
              <BrandCard
                  key={brand.name}
                  name={brand.name}
                  logo={brand.logo}
              />
          ))}
        </div>
      </div>
    </section>
  )
}
