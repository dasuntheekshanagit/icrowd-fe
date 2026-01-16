import { ProductCard } from "@/components/shared/product-card"
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
    </section>
  )
}
