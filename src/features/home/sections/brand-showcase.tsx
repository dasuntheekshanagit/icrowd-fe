import { Card, CardContent } from "@/components/ui/card"
import { apiService } from "@/services/api/api-service"
import { useEffect, useState } from "react"

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
            <a key={brand.name} href={`/brand/${brand.name.toLowerCase().replace(/ /g, "-").replace(/\//g, "")}`} className="group w-40 sm:w-48">
              <Card className="h-24 flex items-center justify-center p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-background">
                <CardContent className="p-0 flex items-center justify-center w-full h-full">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-h-12 max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
