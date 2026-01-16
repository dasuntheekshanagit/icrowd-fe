import {Button} from "@/components/ui/button"
import {CategoryTable} from "@/features/admin/categories/components/category-table"
import {Plus} from "lucide-react"

interface CategoryListSectionProps {
    categories: any[]
}

export function CategoryListSection({categories}: CategoryListSectionProps) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Manage Categories</h1>
                <Button>
                    <Plus className="mr-2 h-4 w-4"/> Add Category
                </Button>
            </div>

            <CategoryTable categories={categories}/>
        </div>
    )
}
