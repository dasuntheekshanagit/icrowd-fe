import { Button } from "@/components/ui/button"
import { ProductFormDialog } from "@/features/admin/products/components/product-form-dialog"
import { ProductTable } from "@/features/admin/products/components/product-table"
import { Plus } from "lucide-react"
import { useState } from "react"

interface ProductListSectionProps {
  products: any[]
}

export function ProductListSection({ products }: ProductListSectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const handleAdd = () => {
    setSelectedProduct(null)
    setIsDialogOpen(true)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const handleEdit = (product: any) => {
  //   setSelectedProduct(product)
  //   setIsDialogOpen(true)
  // }

  const handleSave = (product: any) => {
    console.log("Saving product:", product)
    // Here you would typically call an API to save the product
    setIsDialogOpen(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Products</h1>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>

      <ProductTable products={products} />
      
      <ProductFormDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        product={selectedProduct} 
        onSave={handleSave} 
      />
    </div>
  )
}
