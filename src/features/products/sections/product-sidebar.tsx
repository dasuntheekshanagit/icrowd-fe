import {ProductFilters} from "@/features/products/components/product-filters"

export function ProductSidebar() {
    return (
        <>
            <aside className="hidden md:block w-64 flex-shrink-0">
                <div className="sticky top-24 bg-card rounded-2xl p-6 shadow-elegant">
                    <h3 className="font-semibold font-display text-lg mb-6">Filters</h3>
                    <ProductFilters/>
                </div>
            </aside>
        </>
    )
}
