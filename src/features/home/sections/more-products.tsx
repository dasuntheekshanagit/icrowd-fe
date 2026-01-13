import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { apiService } from "@/services/api/api-service"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function MoreProducts() {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await apiService.getMoreProducts()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <section className="py-12 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">More to Explore</h2>
            <Button variant="link" className="gap-1" asChild>
                <Link to="/products">
                    View All Products <ArrowRight className="w-4 h-4" />
                </Link>
            </Button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
             <Link key={product.id} to={`/product/${product.id}`} className="block h-full">
               <Card className="overflow-hidden flex flex-col h-full bg-background hover:shadow-lg transition-shadow">
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
             </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center">
            <Button size="lg" className="rounded-full px-8" asChild>
                <Link to="/products">
                    Browse All Products
                </Link>
            </Button>
        </div>
      </div>
    </section>
  )
}
