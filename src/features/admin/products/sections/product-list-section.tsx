import { Button } from "@/components/ui/button"
import { ProductFormDialog } from "@/features/admin/products/components/product-form-dialog"
import { ProductTable } from "@/features/admin/products/components/product-table"
import { apiService } from "@/services/api/api-service"
import { Plus, Loader2 } from "lucide-react"
import { useState } from "react"

interface ProductListSectionProps {
  products: any[]
  onRefresh: () => void
}

export function ProductListSection({ products, onRefresh }: ProductListSectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const handleAdd = () => {
    setSelectedProduct(null)
    setIsDialogOpen(true)
  }

  const handleEdit = (product: any) => {
    setSelectedProduct(product)
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
        setDeletingId(id)
        try {
            await apiService.deleteProduct(id)
            onRefresh()
        } catch (error) {
            console.error("Failed to delete product", error)
        } finally {
            setDeletingId(null)
        }
    }
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

      {deletingId && (
          <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded-md flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" /> Deleting...
              </div>
          </div>
      )}

      <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete} />
      
      <ProductFormDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        product={selectedProduct} 
        onSave={handleSave} 
      />
    </div>
  )
}
