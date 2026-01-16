import { Button } from "@/components/ui/button.tsx"
import { Card } from "@/components/ui/card.tsx"
import { ArrowLeft, Minus, Plus, ShoppingCart, Star } from "lucide-react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"

// Mock data - in a real app this would come from an API
const allProducts = [
  {
    id: 1,
    name: "Anker Soundcore Life Q30",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2788&auto=format&fit=crop",
    category: "Headphones",
    brand: "Anker",
    description: "High-resolution audio with active noise cancelling. Enjoy crystal clear sound and deep bass with these premium headphones.",
    features: [
      "Active Noise Cancelling",
      "Hi-Res Audio",
      "40-Hour Playtime",
      "Fast Charging",
      "Multi-Point Connection"
    ],
    rating: 4.5,
    reviews: 128
  },
  // ... other products would be here, for now we'll just use this one or fallback
]

export default function ProductDetails() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  
  // Find product or use mock fallback if not found in the small list
  const product = allProducts.find(p => p.id === Number(id)) || {
    ...allProducts[0],
    id: Number(id),
    name: "Product Not Found (Mock)",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2940&auto=format&fit=crop"
  }

  const incrementQuantity = () => setQuantity(q => q + 1)
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1))

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <Card className="overflow-hidden border-none shadow-none bg-secondary/10">
            <div className="aspect-square relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="object-cover w-full h-full"
              />
            </div>
          </Card>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden cursor-pointer hover:ring-2 ring-primary transition-all">
                <div className="aspect-square relative">
                  <img 
                    src={product.image} 
                    alt={`${product.name} view ${i}`} 
                    className="object-cover w-full h-full"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="ml-1 font-medium text-foreground">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground">{product.reviews} Reviews</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-primary font-medium">{product.brand}</span>
            </div>
            <p className="text-2xl font-bold text-primary">{product.price}</p>
          </div>

          <div className="prose prose-sm text-muted-foreground">
            <p>{product.description}</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 rounded-none"
                  onClick={decrementQuantity}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 rounded-none"
                  onClick={incrementQuantity}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                Only <span className="text-orange-500 font-medium">12 items</span> left!
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1 h-12 text-base" size="lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
