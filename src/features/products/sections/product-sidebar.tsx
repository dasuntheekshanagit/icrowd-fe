import {ProductFilters} from "@/features/products/components/product-filters"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {Button} from "@/components/ui/button"
import {Filter} from "lucide-react"

export function ProductSidebar() {
    return (
        <>
            <div className="md:hidden mb-6">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="w-full">
                            <Filter className="mr-2 h-4 w-4"/> Filters
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                        <div className="py-4">
                            <ProductFilters/>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            <aside className="hidden md:block w-64 shrink-0">
                <div className="sticky top-24">
                    <ProductFilters/>
                </div>
            </aside>
        </>
    )
}
