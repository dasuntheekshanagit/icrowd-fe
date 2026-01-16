import {ProductCard} from "@/components/shared/product-card"
import {Skeleton} from "@/components/ui/skeleton"

interface ProductGridProps {
    products: any[]
    loading?: boolean
}

export function ProductGrid({products, loading = false}: ProductGridProps) {
    return (
        <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {loading
                    ? Array.from({length: 8}).map((_, i) => (
                        <div key={i} className="flex flex-col space-y-3">
                            <Skeleton className="h-[200px] w-full rounded-xl"/>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]"/>
                                <Skeleton className="h-4 w-[200px]"/>
                            </div>
                        </div>
                    ))
                    : products.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            category={product.category}
                            brand={product.brand}
                            price={product.price}
                            discountedPrice={product.discountedPrice}
                            discountVariant={product.discountVariant}
                            offerEndsAt={product.offerEndsAt}
                            stock={product.stock}
                        />
                    ))}
            </div>
            {!loading && products.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                    No products found matching your criteria.
                </div>
            )}
        </div>
    )
}
