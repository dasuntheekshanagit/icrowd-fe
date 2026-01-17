import { ProductListSection } from "@/features/admin/products/sections/product-list-section"
import { apiService } from "@/services/api/api-service"
import { useEffect, useState } from "react"

export default function AdminProducts() {
  const [products, setProducts] = useState<any[]>([])

  const fetchProducts = async () => {
    const data = await apiService.getAllProducts()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return <ProductListSection products={products} onRefresh={fetchProducts} />
}
