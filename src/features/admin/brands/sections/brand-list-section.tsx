import { Button } from "@/components/ui/button"
import { BrandFormDialog } from "@/features/admin/brands/components/brand-form-dialog"
import { BrandTable } from "@/features/admin/brands/components/brand-table"
import { apiService } from "@/services/api/api-service"
import { Plus, Loader2 } from "lucide-react"
import { useState } from "react"

interface BrandListSectionProps {
  brands: any[]
  onRefresh: () => void
}

export function BrandListSection({ brands, onRefresh }: BrandListSectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState<any>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const handleAdd = () => {
    setSelectedBrand(null)
    setIsDialogOpen(true)
  }

  const handleEdit = (brand: any) => {
    setSelectedBrand(brand)
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this brand?")) {
        setDeletingId(id)
        try {
            await apiService.deleteBrand(id)
            onRefresh()
        } catch (error) {
            console.error("Failed to delete brand", error)
        } finally {
            setDeletingId(null)
        }
    }
  }

  const handleSave = async (brand: any) => {
    if (brand.id) {
        await apiService.updateBrand(brand.id, brand)
    } else {
        await apiService.addBrand(brand)
    }
    setIsDialogOpen(false)
    onRefresh()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Brands</h1>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" /> Add Brand
        </Button>
      </div>

      {deletingId && (
          <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded-md flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" /> Deleting...
              </div>
          </div>
      )}

      <BrandTable brands={brands} onEdit={handleEdit} onDelete={handleDelete} />

      <BrandFormDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        brand={selectedBrand} 
        onSave={handleSave} 
      />
    </div>
  )
}
