import {Button} from "@/components/ui/button"
import {BrandTable} from "@/features/admin/brands/components/brand-table"
import {Plus} from "lucide-react"

interface BrandListSectionProps {
    brands: any[]
}

export function BrandListSection({brands}: BrandListSectionProps) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Manage Brands</h1>
                <Button>
                    <Plus className="mr-2 h-4 w-4"/> Add Brand
                </Button>
            </div>

            <BrandTable brands={brands}/>
        </div>
    )
}
