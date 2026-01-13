import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { apiService } from "@/services/api/api-service"
import { useEffect, useState } from "react"

export function CategoryShowcase() {
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await apiService.getCategoryList()
      setCategories(data)
    }
    fetchCategories()
  }, [])

  return (
    <section className="py-12 container mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Shop by Category</h2>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {categories.map((category) => (
            <CarouselItem key={category.title} className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
              <a href={category.href} className="group block h-full">
                <Card className="h-full overflow-hidden border-none shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative aspect-square rounded-xl">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                  <CardContent className="relative h-full flex items-center justify-center p-2 text-center z-10">
                    <h3 className="font-bold text-white text-xs sm:text-sm md:text-base drop-shadow-md leading-tight break-words w-full px-1">{category.title}</h3>
                  </CardContent>
                </Card>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-12" />
        <CarouselNext className="hidden sm:flex -right-12" />
      </Carousel>
    </section>
  )
}
