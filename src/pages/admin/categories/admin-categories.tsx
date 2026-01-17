import { CategoryListSection } from "@/features/admin/categories/sections/category-list-section"
import { apiService } from "@/services/api/api-service"
import { useEffect, useState } from "react"

export default function AdminCategories() {
  const [categories, setCategories] = useState<any[]>([])

  const fetchCategories = async () => {
    const data = await apiService.getCategoryList()
    setCategories(data)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return <CategoryListSection categories={categories} onRefresh={fetchCategories} />
}
