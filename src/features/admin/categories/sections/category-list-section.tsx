import { Button } from "@/components/ui/button"
import { CategoryFormDialog } from "@/features/admin/categories/components/category-form-dialog"
import { CategoryTable } from "@/features/admin/categories/components/category-table"
import { apiService } from "@/services/api/api-service"
import { Plus, Loader2 } from "lucide-react"
import { useState } from "react"

interface CategoryListSectionProps {
  categories: any[]
  onRefresh: () => void
}

export function CategoryListSection({ categories, onRefresh }: CategoryListSectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<any>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const handleAdd = () => {
    setSelectedCategory(null)
    setIsDialogOpen(true)
  }

  const handleEdit = (category: any) => {
    setSelectedCategory(category)
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this category?")) {
        setDeletingId(id)
        try {
            await apiService.deleteCategory(id)
            onRefresh()
        } catch (error) {
            console.error("Failed to delete category", error)
        } finally {
            setDeletingId(null)
        }
    }
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

      {deletingId && (
          <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded-md flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" /> Deleting...
              </div>
          </div>
      )}

      <CategoryTable categories={categories} onEdit={handleEdit} onDelete={handleDelete} />

      <CategoryFormDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        category={selectedCategory} 
        onSave={handleSave} 
      />
    </div>
  )
}
