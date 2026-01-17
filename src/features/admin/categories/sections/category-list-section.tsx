import { Button } from "@/components/ui/button"
import { CategoryFormDialog } from "@/features/admin/categories/components/category-form-dialog"
import { CategoryTable } from "@/features/admin/categories/components/category-table"
import { apiService } from "@/services/api/api-service"
import { Plus } from "lucide-react"
import { useState } from "react"

interface CategoryListSectionProps {
  categories: any[]
  onRefresh: () => void
}

export function CategoryListSection({ categories, onRefresh }: CategoryListSectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<any>(null)

  const handleAdd = () => {
    setSelectedCategory(null)
    setIsDialogOpen(true)
  }

  const handleEdit = (category: any) => {
    setSelectedCategory(category)
    setIsDialogOpen(true)
  }

  const handleSave = async (category: any) => {
    if (category.id) {
        await apiService.updateCategory(category.id, category)
    } else {
        await apiService.addCategory(category)
    }
    setIsDialogOpen(false)
    onRefresh()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Categories</h1>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" /> Add Category
        </Button>
      </div>

      <CategoryTable categories={categories} onEdit={handleEdit} />

      <CategoryFormDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        category={selectedCategory} 
        onSave={handleSave} 
      />
    </div>
  )
}
