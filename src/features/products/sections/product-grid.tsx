import {ProductCard} from "@/components/shared/product-card"
import {Skeleton} from "@/components/ui/skeleton"
import type {Product} from "@/types";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";

interface ProductGridProps {
    products: Product[]
    loading?: boolean
}

export function ProductGrid({products, loading = false}: ProductGridProps) {
    return (
        <div className="flex-1">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"/>
                    <Input
                        type="search"
                        placeholder="Search products..."
                        value={''}
                        onChange={(e) => {
                        }}
                        className="pl-12 h-12 rounded-full"
                    />
                </div>
            </div>

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
                <div className="text-center py-16">
                    <p className="text-muted-foreground">No products found matching your criteria.</p>
                </div>
            )}
        </div>
    )
}
