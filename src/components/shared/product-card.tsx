import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type DiscountVariant = "sale" | "new" | "hot";

interface ProductCardProps {
    id: string | number;
    name: string;
    image: string;
    category: string;
    brand?: string;
    price: number;
    discountedPrice?: number;
    discountVariant?: DiscountVariant;
    offerEndsAt?: string;
    stock?: number;
}

const ribbonStyles: Record<DiscountVariant, string> = {
    sale: "bg-destructive text-destructive-foreground",
    new: "bg-green-600 text-white",
    hot: "bg-orange-500 text-white",
};

function calculateDiscount(price: number, discounted?: number) {
    if (!discounted || discounted >= price) return null;
    return Math.round(((price - discounted) / price) * 100);
}

function getRemainingTime(end: string) {
    const diff = new Date(end).getTime() - Date.now();
    if (diff <= 0) return null;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    return `${hours}h ${minutes}m`;
}

export function ProductCard({id, name, image, category, brand, price, discountedPrice, discountVariant = "sale", offerEndsAt, stock}: ProductCardProps) {

    const discount = calculateDiscount(price, discountedPrice);
    const [timeLeft, setTimeLeft] = useState<string | null>(
        offerEndsAt ? getRemainingTime(offerEndsAt) : null
    );

    useEffect(() => {
        if (!offerEndsAt) return;
        const interval = setInterval(() => {
            setTimeLeft(getRemainingTime(offerEndsAt));
        }, 60_000);

        return () => clearInterval(interval);
    }, [offerEndsAt]);

    return (
        <Link to={`/product/${id}`} className="group block h-full">
            <Card className="relative overflow-hidden flex flex-col h-full bg-background hover:shadow-lg transition-shadow">

                {/*<button*/}
                {/*    className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition"*/}
                {/*    aria-label="Add to wishlist"*/}
                {/*>*/}
                {/*    <Heart className="w-5 h-5 text-muted-foreground hover:text-primary" />*/}
                {/*</button>*/}

                {discount && (
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className={`absolute top-2 left-2 z-20 text-xs font-semibold px-2 py-1 rounded ${ribbonStyles[discountVariant]}`}
                    >
                        -{discount}%
                    </motion.div>
                )}

                {!discount && discountVariant && discountVariant !== 'sale' && (
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className={`absolute top-2 left-2 z-20 text-xs font-semibold px-2 py-1 rounded ${ribbonStyles[discountVariant]}`}
                    >
                        {discountVariant.toUpperCase()}
                    </motion.div>
                )}

                {stock !== undefined && stock <= 5 && stock > 0 && (
                    <div className="absolute top-2 left-2 z-20 bg-black/70 text-white text-xs px-2 py-1 rounded mt-8">
                        Only {stock} left
                    </div>
                )}

                <div className="aspect-square bg-secondary/20 overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <CardHeader className="p-3 pb-0">
                    <CardTitle className="text-sm font-medium line-clamp-2 h-10">
                        {name}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{category}</span>
                        {brand && (
                            <>
                                <span>•</span>
                                <span className="font-medium text-foreground/80">{brand}</span>
                            </>
                        )}
                    </div>
                </CardHeader>

                <CardFooter className="p-3 pt-2 mt-auto flex flex-col items-start gap-1 w-full">

                    {discountedPrice ? (
                        <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-primary">
                LKR {discountedPrice.toFixed(2)}
              </span>
                            <span className="text-xs line-through text-muted-foreground">
                LKR {price.toFixed(2)}
              </span>
                        </div>
                    ) : (
                        <span className="font-bold text-sm">LKR {price.toFixed(2)}</span>
                    )}

                    {timeLeft && (
                        <span className="text-xs text-orange-600 font-medium">
              Ends in {timeLeft}
            </span>
                    )}

                    <Button size="sm" variant="outline" className="w-full h-8 text-xs mt-1">
                        View Details
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    );
}
