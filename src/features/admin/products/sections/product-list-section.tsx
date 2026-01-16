import {Button} from "@/components/ui/button"
import {ProductTable} from "@/features/admin/products/components/product-table"
import {Plus} from "lucide-react"

interface ProductListSectionProps {
    products: any[]
}

export function ProductListSection({products}: ProductListSectionProps) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Manage Products</h1>
                <Button>
                    <Plus className="mr-2 h-4 w-4"/> Add Product
                </Button>
            </div>

            <ProductTable products={products}/>
        </div>
    )
}
