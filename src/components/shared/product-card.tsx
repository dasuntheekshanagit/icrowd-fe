import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

type DiscountVariant = "sale" | "new" | "hot";

interface ProductCardProps {
  id?: string | number;
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
  sale: "bg-coral text-coral-foreground",
  new: "bg-accent text-accent-foreground",
  hot: "bg-gold text-gold-foreground",
};

const ribbonLabels: Record<DiscountVariant, string> = {
  sale: "Sale",
  new: "New",
  hot: "Hot",
};

function formatPrice(price: number) {
  return `LKR ${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

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

export function ProductCard({
  id,
  name,
  image,
  category,
  brand,
  price,
  discountedPrice,
  discountVariant = "sale",
  offerEndsAt,
  stock,
}: ProductCardProps) {
  const [timeLeft, setTimeLeft] = useState<string | null>(
    offerEndsAt ? getRemainingTime(offerEndsAt) : null
  );
  const discount = calculateDiscount(price, discountedPrice);
  const isOutOfStock = stock === 0;

  useEffect(() => {
    if (!offerEndsAt) return;
    
    const updateTimer = () => {
      setTimeLeft(getRemainingTime(offerEndsAt));
    };
    
    // Initial update
    updateTimer();
    
    const interval = setInterval(updateTimer, 60000);
    return () => clearInterval(interval);
  }, [offerEndsAt]);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Link to={`/product/${id}`} className="block h-full">
        <Card className="group overflow-hidden border-0 shadow-elegant hover:shadow-lg transition-shadow duration-300 bg-card h-full flex flex-col">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-muted">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
              {discountVariant && (
                <Badge className={`${ribbonStyles[discountVariant]} font-semibold border-0`}>
                  {ribbonLabels[discountVariant]}
                </Badge>
              )}
              {discount && (
                <Badge variant="secondary" className="font-semibold border-0">
                  -{discount}%
                </Badge>
              )}
            </div>

            {/* Timer Badge */}
            {timeLeft && (
              <div className="absolute bottom-3 left-3 right-3 z-10">
                <div className="flex items-center gap-1.5 bg-coral text-coral-foreground px-3 py-1.5 rounded-full text-xs font-medium shadow-sm w-fit">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Ends in {timeLeft}</span>
                </div>
              </div>
            )}

            {/* Out of Stock Overlay */}
            {isOutOfStock && (
              <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-20">
                <span className="text-muted-foreground font-medium">Out of Stock</span>
              </div>
            )}
            
            {/* Low Stock Warning */}
            {!isOutOfStock && stock !== undefined && stock <= 5 && stock > 0 && (
                <div className="absolute top-3 right-3 z-10">
                    <Badge variant="destructive" className="font-semibold text-[10px] h-5 px-1.5">
                        Only {stock} left
                    </Badge>
                </div>
            )}
          </div>

          {/* Content */}
          <CardContent className="p-4 flex-grow">
            {brand && (
              <span className="text-xs text-accent font-medium uppercase tracking-wide block mb-1">
                {brand}
              </span>
            )}
            <h3 className="font-semibold line-clamp-2 text-sm group-hover:text-accent transition-colors min-h-[2.5rem]">
              {name}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">{category}</p>
          </CardContent>

          <CardFooter className="px-4 pb-4 pt-0 flex items-center justify-between mt-auto">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-foreground">
                  {formatPrice(discountedPrice || price)}
                </span>
                {discountedPrice && (
                  <span className="text-xs text-muted-foreground line-through">
                    {formatPrice(price)}
                  </span>
                )}
              </div>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
