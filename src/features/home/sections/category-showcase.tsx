import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    title: "Audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2930&auto=format&fit=crop",
    href: "/category/audio",
  },
  {
    title: "Power & Charging",
    image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=3072&auto=format&fit=crop",
    href: "/category/power",
  },
  {
    title: "Photography",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2864&auto=format&fit=crop",
    href: "/category/photography",
  },
  {
    title: "Phones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2960&auto=format&fit=crop",
    href: "/category/phones",
  },
  {
    title: "Smart Wearables",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2727&auto=format&fit=crop",
    href: "/category/wearables",
  },
  {
    title: "Cases & Protection",
    image: "https://images.unsplash.com/photo-1603351154351-5cf99bc5f16d?q=80&w=2940&auto=format&fit=crop",
    href: "/category/protection",
  },
]

export function CategoryShowcase() {
  return (
    <section className="py-12 container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <a key={category.title} href={category.href} className="group block h-full">
            <Card className="h-full overflow-hidden border-none shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative aspect-[4/5]">
              <img 
                src={category.image} 
                alt={category.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              <CardContent className="relative h-full flex items-center justify-center p-4 text-center z-10">
                <h3 className="font-bold text-white text-lg sm:text-xl drop-shadow-md">{category.title}</h3>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  )
}
