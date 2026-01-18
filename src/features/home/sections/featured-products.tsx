import {ProductsGrid} from "@/features/home/components/products-grid";
import {FeaturedSectionHeader} from "@/features/home/components/featured-section-header";
import {useEffect, useState} from "react";
import type {Product} from "@/types";
import {apiService} from "@/services/api/api-service.ts";

export const FeaturedProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await apiService.getFeaturedProducts();
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch featured products", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
                <FeaturedSectionHeader/>
                <ProductsGrid products={products} loading={loading} />
            </div>
        </section>
    );
}
