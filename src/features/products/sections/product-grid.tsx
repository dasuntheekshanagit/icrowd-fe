import { ProductCard } from "@/components/shared/product-card"

interface ProductGridProps {
  products: any[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
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
      {products.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
              No products found matching your criteria.
          </div>
      )}
    </div>
  )
}
