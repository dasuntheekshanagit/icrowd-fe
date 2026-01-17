import { Button } from "@/components/ui/button"
import { ProductFormDialog } from "@/features/admin/products/components/product-form-dialog"
import { ProductTable } from "@/features/admin/products/components/product-table"
import { apiService } from "@/services/api/api-service"
import { Plus } from "lucide-react"
import { useState } from "react"

interface ProductListSectionProps {
  products: any[]
  onRefresh: () => void
}

export function ProductListSection({ products, onRefresh }: ProductListSectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const handleAdd = () => {
    setSelectedProduct(null)
    setIsDialogOpen(true)
  }

  const handleEdit = (product: any) => {
    setSelectedProduct(product)
    setIsDialogOpen(true)
  }

  const handleSave = async (product: any) => {
    if (product.id) {
        await apiService.updateProduct(product.id, product)
    } else {
        await apiService.addProduct(product)
    }
    setIsDialogOpen(false)
    onRefresh()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Products</h1>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>

      <ProductTable products={products} onEdit={handleEdit} />
      
      <ProductFormDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        product={selectedProduct} 
        onSave={handleSave} 
      />
    </div>
  )
}
