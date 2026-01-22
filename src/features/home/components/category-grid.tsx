import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {apiService} from "@/services/api/api-service.ts";

function slugifyCategory(name: string) {
    return name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/\//g, "");
}

export const CategoryGrid = () => {
    const [categories, setCategories] = useState<any[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await apiService.getCategoryList();
            setCategories(data);
        };
        fetchCategories();
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category, index) => (
                <motion.div
                    key={category.id || category.title}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{delay: index * 0.1}}
                    className="w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-0.8rem)] md:w-[calc(25%-0.8rem)] lg:w-[calc(16.666%-0.8rem)]"
                >
                    <Link
                        to={`/products?category=${slugifyCategory(category.title)}`}
                        className="group block h-full"
                    >
                        <div
                            className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-card shadow-elegant hover:shadow-lg transition-shadow">
                            <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"/>
                            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                                <h3 className="font-semibold font-display text-xs sm:text-sm group-hover:text-accent transition-colors truncate">
                                    {category.title}
                                </h3>
                                {/* Assuming count might not be available in the current API response,
                        we can conditionally render it or omit it if not present in the data type */}
                                {category.count !== undefined && (
                                    <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">
                                        {category.count} Products
                                    </p>
                                )}
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
