import {motion} from "framer-motion";
import {ProductCard} from "@/components/shared/product-card.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import type {Product} from "@/types";

interface ProductsGridProps {
    products: Product[];
    loading: boolean;
}

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0},
};

export const ProductsGrid = ({products, loading}: ProductsGridProps) => {

    const skeletonCount = 5;

    if (loading) {
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
                {Array.from({length: skeletonCount}).map((_, i) => (
                    <div key={i} className="flex flex-col space-y-3">
                        <Skeleton className="h-[160px] sm:h-[200px] w-full rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-3 sm:h-4 w-3/4"/>
                            <Skeleton className="h-3 sm:h-4 w-1/2"/>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6"
        >
            {products.map((product) => (
                <motion.div key={product.id} variants={item} className="h-full">
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
                </motion.div>
            ))}
        </motion.div>
    );
}
