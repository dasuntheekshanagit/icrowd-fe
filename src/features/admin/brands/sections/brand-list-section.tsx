import { Button } from "@/components/ui/button"
import { BrandFormDialog } from "@/features/admin/brands/components/brand-form-dialog"
import { BrandTable } from "@/features/admin/brands/components/brand-table"
import { Plus } from "lucide-react"
import { useState } from "react"

interface BrandListSectionProps {
  brands: any[]
}

export function BrandListSection({ brands }: BrandListSectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState<any>(null)

  const handleAdd = () => {
    setSelectedBrand(null)
    setIsDialogOpen(true)
  }

  const handleEdit = (brand: any) => {
    setSelectedBrand(brand)
    setIsDialogOpen(true)
  }

  const handleSave = (brand: any) => {
    console.log("Saving brand:", brand)
    // Here you would typically call an API to save the brand
    setIsDialogOpen(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Brands</h1>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" /> Add Brand
        </Button>
      </div>

      <BrandTable brands={brands} />

      <BrandFormDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        brand={selectedBrand} 
        onSave={handleSave} 
      />
    </div>
  )
}
