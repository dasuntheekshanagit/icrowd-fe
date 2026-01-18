import {ProductCard} from "@/components/shared/product-card"
import {Skeleton} from "@/components/ui/skeleton"
import type {Product} from "@/types";
import {Filter, Search} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ProductFilters} from "@/features/products/components/product-filters.tsx";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

interface ProductGridProps {
    products: Product[]
    loading?: boolean
}

export function ProductGrid({products, loading = false}: ProductGridProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");

    useEffect(() => {
        setSearchQuery(searchParams.get("search") || "");
    }, [searchParams]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        
        // Debounce could be added here, but for now direct update
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set("search", value);
        } else {
            params.delete("search");
        }
        setSearchParams(params);
    };

    return (
        <div className="flex-1">
            <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"/>
                    <Input
                        type="search"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="pl-12 h-12 rounded-full"
                    />
                </div>
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                                <Filter className="h-5 w-5"/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                            <div className="py-4">
                                <h3 className="font-semibold font-display text-lg mb-6">Filters</h3>
                                <ProductFilters/>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {loading
                    ? Array.from({length: 8}).map((_, i) => (
                        <div key={i} className="flex flex-col space-y-3">
                            <Skeleton className="h-[160px] sm:h-[200px] w-full rounded-xl"/>
                            <div className="space-y-2">
                                <Skeleton className="h-3 sm:h-4 w-3/4"/>
                                <Skeleton className="h-3 sm:h-4 w-1/2"/>
                            </div>
                        </div>
                    ))
                    : products.map((product) => (
                        <div key={product.id} className="h-full">
                            <ProductCard
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
                        </div>
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
