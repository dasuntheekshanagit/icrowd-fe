import { ProductCard } from "@/features/products/components/product-card"
import { ProductFilters } from "@/features/products/components/product-filters"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

// Mock data - replace with actual data fetching later
const allProducts = [
  {
    id: 1,
    name: "Anker Soundcore Life Q30",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2788&auto=format&fit=crop",
    category: "Headphones",
    brand: "Anker"
  },
  {
    id: 2,
    name: "DJI Mini 3 Pro",
    price: "$759.00",
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2940&auto=format&fit=crop",
    category: "Drones",
    brand: "DJI"
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: "$1299.99",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2941&auto=format&fit=crop",
    category: "Phones",
    brand: "Samsung"
  },
  {
    id: 4,
    name: "JBL Flip 6",
    price: "$129.95",
    image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=2864&auto=format&fit=crop",
    category: "Bluetooth Speakers",
    brand: "JBL"
  },
  {
    id: 5,
    name: "UGREEN Nexode 100W",
    price: "$74.99",
    image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=3072&auto=format&fit=crop",
    category: "Charging Adapters & Cables",
    brand: "UGREEN"
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    price: "$399.00",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2864&auto=format&fit=crop",
    category: "Smart Watches",
    brand: "AppleCare / GNEXT"
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    price: "$348.00",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2788&auto=format&fit=crop",
    category: "Headphones",
    brand: "SONY"
  },
  {
    id: 8,
    name: "Baseus Power Bank 65W",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=3072&auto=format&fit=crop",
    category: "Powerbanks",
    brand: "BASEUS"
  },
  {
    id: 9,
    name: "iPhone 15 Pro Max",
    price: "$1199.00",
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=2940&auto=format&fit=crop",
    category: "Phones",
    brand: "AppleCare / GNEXT"
  },
  {
    id: 10,
    name: "GoPro Hero 12",
    price: "$399.99",
    image: "https://images.unsplash.com/photo-1564466021183-a4268fce765e?q=80&w=2787&auto=format&fit=crop",
    category: "Photography",
    brand: "GoPro" // Note: GoPro wasn't in the main brand list but kept for data consistency
  },
  {
    id: 11,
    name: "Hollyland Lark M1",
    price: "$149.00",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2832&auto=format&fit=crop",
    category: "Wireless Mics",
    brand: "Hollyland"
  },
  {
    id: 12,
    name: "Haylou Solar Plus",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2727&auto=format&fit=crop",
    category: "Smart Watches",
    brand: "Haylou"
  },
  {
    id: 13,
    name: "Aspor A323 Power Bank",
    price: "$25.00",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=2940&auto=format&fit=crop",
    category: "Powerbanks",
    brand: "ASPOR"
  },
  {
    id: 14,
    name: "Samsung Galaxy Buds2 Pro",
    price: "$229.99",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2941&auto=format&fit=crop",
    category: "Earbuds",
    brand: "Samsung"
  },
  {
    id: 15,
    name: "Apple AirTag",
    price: "$29.00",
    image: "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=2940&auto=format&fit=crop",
    category: "Accessories", // Note: Accessories wasn't in the main list
    brand: "AppleCare / GNEXT"
  }
]

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Sheet */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" /> Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <div className="py-4">
                <ProductFilters />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-24">
            <ProductFilters />
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
