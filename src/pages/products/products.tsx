import { ProductCard } from "@/features/products/components/product-card"
import { ProductFilters } from "@/features/products/components/product-filters"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import { useEffect, useState } from "react"
import { apiService } from "@/services/api/api-service"
import { useSearchParams } from "react-router-dom"

export default function Products() {
  const [products, setProducts] = useState<any[]>([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const fetchProducts = async () => {
      // In a real app, we would pass filters to the API
      // For now, we fetch all and filter client-side or just show all
      const data = await apiService.getAllProducts()
      
      // Basic client-side filtering for demonstration
      let filtered = data
      
      const category = searchParams.get("category")
      if (category) {
          // Simple check, real app would be more robust
          filtered = filtered.filter(p => p.category.toLowerCase().includes(category.toLowerCase()))
      }
      
      const brand = searchParams.get("brand")
      if (brand) {
          filtered = filtered.filter(p => p.brand.toLowerCase().replace(/ /g, "-").replace(/\//g, "") === brand.toLowerCase())
      }

      const search = searchParams.get("search")
      if (search) {
          filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      }

      setProducts(filtered)
    }
    fetchProducts()
  }, [searchParams])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Sheet */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" /> Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <div className="py-4">
                <ProductFilters />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-24">
            <ProductFilters />
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {products.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                  No products found matching your criteria.
              </div>
          )}
        </div>
      </div>
    </div>
  )
}
