import { ProductGrid } from "@/features/products/sections/product-grid"
import { ProductSidebar } from "@/features/products/sections/product-sidebar"
import { apiService } from "@/services/api/api-service"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export default function Products() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      // Simulate network delay
      // await new Promise(resolve => setTimeout(resolve, 1000))
      const data = await apiService.getAllProducts()
      
      let filtered = data
      
      const category = searchParams.get("category")
      if (category) {
          filtered = filtered.filter(p => p.category.toLowerCase().includes(category.toLowerCase()))
      }
      
      const brand = searchParams.get("brand")
      if (brand) {
          filtered = filtered.filter(p => p.brand && p.brand.toLowerCase().replace(/ /g, "-").replace(/\//g, "") === brand.toLowerCase())
      }

      const search = searchParams.get("search")
      if (search) {
          filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      }

      setProducts(filtered)
      setLoading(false)
    }
    fetchProducts()
  }, [searchParams])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <ProductSidebar />
        <ProductGrid products={products} loading={loading} />
      </div>
    </div>
  )
}
