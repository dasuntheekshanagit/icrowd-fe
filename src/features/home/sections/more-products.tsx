import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/shared/product-card"
import { apiService } from "@/services/api/api-service"
import { ArrowRight } from "lucide-react"
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
             <ProductCard 
               key={product.id} 
               id={product.id}
               name={product.name}
               image={product.image}
               category={product.category}
               price={product.price}
               discountedPrice={product.discountedPrice}
               discountVariant={product.discountVariant}
               offerEndsAt={product.offerEndsAt}
               stock={product.stock}
             />
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
