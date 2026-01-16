import { ProductCard } from "@/components/shared/product-card"
import { Skeleton } from "@/components/ui/skeleton"
import { apiService } from "@/services/api/api-service"
import { useEffect, useState } from "react"

export function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      // Simulate network delay for skeleton demo
      await new Promise(resolve => setTimeout(resolve, 1000))
      const data = await apiService.getFeaturedProducts()
      setProducts(data)
      setLoading(false)
    }
    fetchProducts()
  }, [])

  return (
    <section className="py-12 container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[200px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))
          : products.map((product) => (
              <ProductCard 
                key={product.id} 
                id={product.id}
                name={product.name}
                image={product.image}
                category={product.category}
                brand={product.brand}
                price={product.price}
                discountedPrice={product.discountedPrice}
                discountVariant={product.discountVariant}
                offerEndsAt={product.offerEndsAt}
                stock={product.stock}
              />
            ))}
      </div>
    </section>
  )
}
