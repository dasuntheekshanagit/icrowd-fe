import {CategoryListSection} from "@/features/admin/categories/sections/category-list-section"
import {apiService} from "@/services/api/api-service"
import {useEffect, useState} from "react"

export default function AdminCategories() {
    const [categories, setCategories] = useState<any[]>([])

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await apiService.getCategoryList()
            setCategories(data)
        }
        fetchCategories()
    }, [])

    return <CategoryListSection categories={categories}/>
}
