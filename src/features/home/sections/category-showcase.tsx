import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const categories = [
  {
    title: "Earbuds",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2832&auto=format&fit=crop",
    href: "/category/earbuds",
  },
  {
    title: "Powerbanks",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=2940&auto=format&fit=crop",
    href: "/category/powerbanks",
  },
  {
    title: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2940&auto=format&fit=crop",
    href: "/category/headphones",
  },
  {
    title: "Charging Adapters & Cables",
    image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=3072&auto=format&fit=crop",
    href: "/category/charging",
  },
  {
    title: "Smart Watches",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2727&auto=format&fit=crop",
    href: "/category/smart-watches",
  },
  {
    title: "Bluetooth Speakers",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2836&auto=format&fit=crop",
    href: "/category/bluetooth-speakers",
  },
  {
    title: "Mobile Gimbals",
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2940&auto=format&fit=crop",
    href: "/category/mobile-gimbals",
  },
  {
    title: "Wireless Mics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2832&auto=format&fit=crop",
    href: "/category/wireless-mics",
  },
  {
    title: "Drones",
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2940&auto=format&fit=crop",
    href: "/category/drones",
  },
  {
    title: "HUBS",
    image: "https://images.unsplash.com/photo-1618418381440-2729b3e1d980?q=80&w=2940&auto=format&fit=crop",
    href: "/category/hubs",
  },
  {
    title: "Phone Cases",
    image: "https://images.unsplash.com/photo-1603351154351-5cf99bc5f16d?q=80&w=2940&auto=format&fit=crop",
    href: "/category/phone-cases",
  },
  {
    title: "Studio Items",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2864&auto=format&fit=crop",
    href: "/category/studio-items",
  },
  {
    title: "Pouches",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=2804&auto=format&fit=crop",
    href: "/category/pouches",
  },
  {
    title: "iPad Pencil",
    image: "https://images.unsplash.com/photo-1544207764-9733ee63d8c4?q=80&w=2940&auto=format&fit=crop",
    href: "/category/ipad-pencil",
  },
  {
    title: "iPad Covers",
    image: "https://images.unsplash.com/photo-1544207764-9733ee63d8c4?q=80&w=2940&auto=format&fit=crop",
    href: "/category/ipad-covers",
  },
]

export function CategoryShowcase() {
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
