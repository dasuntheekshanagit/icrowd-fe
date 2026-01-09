import { Card, CardContent } from "@/components/ui/card"

const brands = [
  { name: "Anker", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Anker_logo.svg/2560px-Anker_logo.svg.png" },
  { name: "UGREEN", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/UGREEN_logo.svg/2560px-UGREEN_logo.svg.png" },
  { name: "DJI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/DJI_logo.svg/2560px-DJI_logo.svg.png" },
  { name: "JBL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/JBL_logo.svg/2560px-JBL_logo.svg.png" },
  { name: "SONY", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/2560px-Sony_logo.svg.png" },
  { name: "BASEUS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Baseus_logo.svg/2560px-Baseus_logo.svg.png" },
  { name: "AppleCare / GNEXT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" },
  { name: "WIWU", logo: "https://www.wiwu.com/static/image/logo.png" },
  { name: "MI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/2048px-Xiaomi_logo.svg.png" },
  { name: "Haylou", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Haylou_logo.svg/2560px-Haylou_logo.svg.png" },
  { name: "Hollyland", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Hollyland_Technology_Logo.png/1200px-Hollyland_Technology_Logo.png" },
  { name: "ASPOR", logo: "https://aspor.com.cn/wp-content/uploads/2019/12/logo.png" },
]

export function BrandShowcase() {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Shop by Brand</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {brands.map((brand) => (
            <a key={brand.name} href={`/brand/${brand.name.toLowerCase().replace(/ /g, "-").replace(/\//g, "")}`} className="group w-40 sm:w-48">
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
