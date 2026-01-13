import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

interface Product {
  id: number
  name: string
  price: string
  image: string
  category: string
  brand: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="block h-full">
      <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
        <div className="aspect-square relative bg-secondary/20">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader className="p-3 pb-0">
          <CardTitle className="text-sm font-medium line-clamp-2 h-10" title={product.name}>
            {product.name}
          </CardTitle>
          <p className="text-xs text-muted-foreground">{product.category}</p>
        </CardHeader>
        <CardFooter className="p-3 pt-2 mt-auto flex flex-col items-start gap-2">
          <span className="font-bold text-sm">{product.price}</span>
          <Button size="sm" className="w-full h-8 text-xs" onClick={(e) => {
            e.preventDefault()
            // Add to cart logic here
          }}>
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
