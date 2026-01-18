import {Button} from "@/components/ui/button"
import {apiService} from "@/services/api/api-service"
import {ArrowRight} from "lucide-react"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {ProductsGrid} from "@/features/home/components/products-grid"
import type {Product} from "@/types";

export const MoreProducts = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await apiService.getMoreProducts()
            setProducts(data)
            setLoading(false)
        }
        fetchProducts()
    }, [])

    return (
        <section className="py-12 bg-secondary/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
                    <h2 className="text-2xl font-bold">More to Explore</h2>
                    <Button variant="link" className="gap-1 p-0 h-auto sm:h-10 sm:p-4" asChild>
                        <Link to="/products">
                            View All Products <ArrowRight className="w-4 h-4"/>
                        </Link>
                    </Button>
                </div>

                <ProductsGrid products={products} loading={loading}/>

                <div className="mt-10 text-center">
                    <Button size="lg" className="rounded-full px-8 w-full sm:w-auto" asChild>
                        <Link to="/products">
                            Browse All Products
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
