import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { apiService } from "@/services/api/api-service"
import { useEffect, useState } from "react"

export function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await apiService.getFeaturedProducts()
      setProducts(data)
    }
    fetchProducts()
  }, [])

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
