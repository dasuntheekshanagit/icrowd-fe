import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Anker Soundcore Life Q30",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2788&auto=format&fit=crop",
    category: "Audio"
  },
  {
    id: 2,
    name: "DJI Mini 3 Pro",
    price: "$759.00",
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2940&auto=format&fit=crop",
    category: "Photography"
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: "$1299.99",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2941&auto=format&fit=crop",
    category: "Phones"
  },
  {
    id: 4,
    name: "JBL Flip 6",
    price: "$129.95",
    image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=2864&auto=format&fit=crop",
    category: "Audio"
  },
  {
    id: 5,
    name: "UGREEN Nexode 100W",
    price: "$74.99",
    image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=3072&auto=format&fit=crop",
    category: "Power & Charging"
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    price: "$399.00",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2864&auto=format&fit=crop",
    category: "Smart Wearables"
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    price: "$348.00",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2788&auto=format&fit=crop",
    category: "Audio"
  },
  {
    id: 8,
    name: "Baseus Power Bank 65W",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=3072&auto=format&fit=crop",
    category: "Power & Charging"
  },
  {
    id: 9,
    name: "iPhone 15 Pro Max",
    price: "$1199.00",
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=2940&auto=format&fit=crop",
    category: "Phones"
  },
  {
    id: 10,
    name: "GoPro Hero 12",
    price: "$399.99",
    image: "https://images.unsplash.com/photo-1564466021183-a4268fce765e?q=80&w=2787&auto=format&fit=crop",
    category: "Photography"
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-12 container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
           <Card key={product.id} className="overflow-hidden flex flex-col h-full">
             <div className="aspect-square relative bg-secondary/20">
               <img src={product.image} alt={product.name} className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
             </div>
             <CardHeader className="p-3 pb-0">
               <CardTitle className="text-sm font-medium line-clamp-2 h-10" title={product.name}>{product.name}</CardTitle>
               <p className="text-xs text-muted-foreground">{product.category}</p>
             </CardHeader>
             <CardFooter className="p-3 pt-2 mt-auto flex flex-col items-start gap-2">
               <span className="font-bold text-sm">{product.price}</span>
               <Button size="sm" className="w-full h-8 text-xs">Add to Cart</Button>
             </CardFooter>
           </Card>
        ))}
      </div>
    </section>
  )
}
