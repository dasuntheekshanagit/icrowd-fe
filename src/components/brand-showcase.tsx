import { Card, CardContent } from "@/components/ui/card"

const brands = [
  { name: "Anker", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Anker_logo.svg/2560px-Anker_logo.svg.png" },
  { name: "UGREEN", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/UGREEN_logo.svg/2560px-UGREEN_logo.svg.png" },
  { name: "DJI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/DJI_logo.svg/2560px-DJI_logo.svg.png" },
  { name: "JBL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/JBL_logo.svg/2560px-JBL_logo.svg.png" },
  { name: "SONY", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/2560px-Sony_logo.svg.png" },
  { name: "BASEUS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Baseus_logo.svg/2560px-Baseus_logo.svg.png" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" },
  { name: "MI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/2048px-Xiaomi_logo.svg.png" },
]

export function BrandShowcase() {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Shop by Brand</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <a key={brand.name} href={`/brand/${brand.name.toLowerCase()}`} className="group">
              <Card className="h-24 flex items-center justify-center p-4 hover:shadow-md transition-shadow bg-background">
                <CardContent className="p-0 flex items-center justify-center w-full h-full">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" 
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
