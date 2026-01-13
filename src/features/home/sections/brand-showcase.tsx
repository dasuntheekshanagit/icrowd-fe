import { Card, CardContent } from "@/components/ui/card"

const brands = [
  { name: "Anker", logo: "/product_logo/Anker.svg" },
  { name: "UGREEN", logo: "/product_logo/ugreen.svg" },
  { name: "DJI", logo: "/product_logo/DJI.png" },
  { name: "JBL", logo: "/product_logo/JBL.svg" },
  { name: "SONY", logo: "/product_logo/Sony.png" },
  { name: "BASEUS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Baseus_logo.svg/2560px-Baseus_logo.svg.png" },
  { name: "AppleCare / GNEXT", logo: "/product_logo/Apple.svg" },
  { name: "Samsung", logo: "/product_logo/Samsung.svg" },
  { name: "WIWU", logo: "https://www.wiwu.com/static/image/logo.png" },
  { name: "MI", logo: "/product_logo/Xiaomi.svg" },
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
