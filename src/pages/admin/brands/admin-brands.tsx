import { BrandListSection } from "@/features/admin/brands/sections/brand-list-section"
import { apiService } from "@/services/api/api-service"
import { useEffect, useState } from "react"

export default function AdminBrands() {
  const [brands, setBrands] = useState<any[]>([])

  useEffect(() => {
    const fetchBrands = async () => {
      const data = await apiService.getBrandList()
      setBrands(data)
    }
    fetchBrands()
  }, [])

  return <BrandListSection brands={brands} />
}
