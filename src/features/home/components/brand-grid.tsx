import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import type {Brand} from "@/types";
import {apiService} from "@/services/api/api-service.ts";

function slugifyBrand(name: string) {
    return name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/\//g, "");
}

export const BrandGrid = () => {
    const [brands, setBrands] = useState<Brand[]>([]);

    useEffect(() => {
        const fetchBrands = async () => {
            const data = await apiService.getBrandList();
            setBrands(data);
        };
        fetchBrands();
    }, []);
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12">
            {brands.map((brand, index) => (
                <motion.div
                    key={brand.id || brand.name}
                    initial={{opacity: 0, scale: 0.9}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{delay: index * 0.1}}
                >
                    <Link
                        to={`/products?brand=${slugifyBrand(brand.name)}`}
                        className="group flex items-center justify-center w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 rounded-xl bg-card border border-border hover:border-accent hover:shadow-elegant transition-all duration-300 p-2 sm:p-4"
                    >
                        {brand.logo ? (
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="max-h-8 sm:max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                        ) : (
                            <span
                                className="font-display font-bold text-sm sm:text-xl text-muted-foreground group-hover:text-accent transition-colors">
                    {brand.name}
                  </span>
                        )}
                    </Link>
                </motion.div>
            ))}
        </div>
    )
}
