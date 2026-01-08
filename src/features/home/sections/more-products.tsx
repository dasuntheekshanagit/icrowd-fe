import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 11,
    name: "Hollyland Lark M1",
    price: "$149.00",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2832&auto=format&fit=crop",
    category: "Audio"
  },
  {
    id: 12,
    name: "Haylou Solar Plus",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2727&auto=format&fit=crop",
    category: "Smart Wearables"
  },
  {
    id: 13,
    name: "Aspor A323 Power Bank",
    price: "$25.00",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=2940&auto=format&fit=crop",
    category: "Power & Charging"
  },
  {
    id: 14,
    name: "Samsung Galaxy Buds2 Pro",
    price: "$229.99",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2941&auto=format&fit=crop",
    category: "Audio"
  },
  {
    id: 15,
    name: "Apple AirTag",
    price: "$29.00",
    image: "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=2940&auto=format&fit=crop",
    category: "Accessories"
  }
]

export function MoreProducts() {
  return (
    <section className="py-12 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">More to Explore</h2>
            <Button variant="link" className="gap-1">
                View All Products <ArrowRight className="w-4 h-4" />
            </Button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
             <Card key={product.id} className="overflow-hidden flex flex-col h-full bg-background">
               <div className="aspect-square relative bg-secondary/20">
                 <img src={product.image} alt={product.name} className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
               </div>
               <CardHeader className="p-3 pb-0">
                 <CardTitle className="text-sm font-medium line-clamp-2 h-10" title={product.name}>{product.name}</CardTitle>
                 <p className="text-xs text-muted-foreground">{product.category}</p>
               </CardHeader>
               <CardFooter className="p-3 pt-2 mt-auto flex flex-col items-start gap-2">
                 <span className="font-bold text-sm">{product.price}</span>
                 <Button size="sm" variant="outline" className="w-full h-8 text-xs">View Details</Button>
               </CardFooter>
             </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
            <Button size="lg" className="rounded-full px-8">
                Browse All Products
            </Button>
        </div>
      </div>
    </section>
  )
}
