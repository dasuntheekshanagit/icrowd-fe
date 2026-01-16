import {Button} from "@/components/ui/button"
import {Minus, Plus, ShoppingCart, Star} from "lucide-react"
import {useState} from "react"

interface ProductDetailsInfoProps {
    product: any
}

export function ProductDetailsInfo({product}: ProductDetailsInfoProps) {
    const [quantity, setQuantity] = useState(1)

    const incrementQuantity = () => setQuantity(q => q + 1)
    const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1))

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current"/>
                        <span className="ml-1 font-medium text-foreground">{product.rating || 4.5}</span>
                    </div>
                    <span className="text-muted-foreground">|</span>
                    <span className="text-muted-foreground">{product.reviews || 128} Reviews</span>
                    <span className="text-muted-foreground">|</span>
                    <span className="text-primary font-medium">{product.brand}</span>
                </div>

                <div className="flex items-baseline gap-3">
                    {product.discountedPrice ? (
                        <>
                            <p className="text-3xl font-bold text-primary">LKR {product.discountedPrice}</p>
                            <p className="text-xl text-muted-foreground line-through">LKR {product.price}</p>
                            <span
                                className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-full self-center">
                        SAVE {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%
                    </span>
                        </>
                    ) : (
                        <p className="text-3xl font-bold text-primary">${product.price}</p>
                    )}
                </div>
            </div>

            <div className="prose prose-sm text-muted-foreground">
                <p>{product.description || "No description available."}</p>
            </div>

            <div className="space-y-4">
                <h3 className="font-semibold">Key Features:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {(product.features || ["High quality", "Durable", "Premium design"]).map((feature: string, index: number) => (
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
                            <Minus className="w-4 h-4"/>
                        </Button>
                        <span className="w-12 text-center font-medium">{quantity}</span>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-none"
                            onClick={incrementQuantity}
                        >
                            <Plus className="w-4 h-4"/>
                        </Button>
                    </div>
                    {product.stock && (
                        <div className="text-sm text-muted-foreground">
                            Only <span className="text-orange-500 font-medium">{product.stock} items</span> left!
                        </div>
                    )}
                </div>

                <div className="flex gap-4">
                    <Button className="flex-1 h-12 text-base" size="lg">
                        <ShoppingCart className="w-5 h-5 mr-2"/>
                        Add to Cart
                    </Button>
                    <Button variant="outline" size="lg" className="h-12 px-8">
                        Buy Now
                    </Button>
                </div>
            </div>
        </div>
    )
}
