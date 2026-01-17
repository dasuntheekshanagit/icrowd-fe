import { BrandListSection } from "@/features/admin/brands/sections/brand-list-section"
import { apiService } from "@/services/api/api-service"
import { useEffect, useState } from "react"

export default function AdminBrands() {
  const [brands, setBrands] = useState<any[]>([])

  const fetchBrands = async () => {
    const data = await apiService.getBrandList()
    setBrands(data)
  }

  useEffect(() => {
    fetchBrands()
  }, [])

  return <BrandListSection brands={brands} onRefresh={fetchBrands} />
}
