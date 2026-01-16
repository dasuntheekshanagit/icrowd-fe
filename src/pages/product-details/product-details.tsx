import { ProductDetailsInfo } from "@/features/products/sections/product-details-info"
import { ProductImageGallery } from "@/features/products/sections/product-image-gallery"
import { apiService } from "@/services/api/api-service"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      const products = await apiService.getAllProducts()
      const foundProduct = products.find((p: any) => p.id === Number(id))
      
      if (foundProduct) {
          setProduct({
              ...foundProduct,
              description: foundProduct.description || "High-resolution audio with active noise cancelling. Enjoy crystal clear sound and deep bass with these premium headphones.",
              features: foundProduct.features || [
                  "Active Noise Cancelling",
                  "Hi-Res Audio",
                  "40-Hour Playtime",
                  "Fast Charging",
                  "Multi-Point Connection"
              ],
              rating: 4.5,
              reviews: 128,
              images: [
                  foundProduct.image,
                  foundProduct.image,
                  foundProduct.image,
                  foundProduct.image
              ]
          })
      }
      setLoading(false)
    }
    
    if (id) {
        fetchProduct()
    }
  }, [id])

  if (loading) {
      return <div className="container mx-auto px-4 py-12 text-center">Loading...</div>
  }

  if (!product) {
      return <div className="container mx-auto px-4 py-12 text-center">Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <ProductImageGallery images={product.images} name={product.name} />
        <ProductDetailsInfo product={product} />
      </div>
    </div>
  )
}
