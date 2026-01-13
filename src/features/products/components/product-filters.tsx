import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const categories = [
  "Earbuds",
  "Powerbanks",
  "Headphones",
  "Charging Adapters & Cables",
  "Smart Watches",
  "Bluetooth Speakers",
  "Mobile Gimbals",
  "Wireless Mics",
  "Drones",
  "HUBS",
  "Phone Cases",
  "Studio Items",
  "Pouches",
  "iPad Pencil",
  "iPad Covers",
]

const brands = [
  "Anker",
  "UGREEN",
  "DJI",
  "JBL",
  "SONY",
  "BASEUS",
  "AppleCare / GNEXT",
  "Samsung",
  "WIWU",
  "MI",
  "Haylou",
  "Hollyland",
  "ASPOR",
]

export function ProductFilters() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get("search") || "")
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.getAll("category")
  )
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    searchParams.getAll("brand")
  )

  useEffect(() => {
    const category = searchParams.get("category")
    if (category) {
      // Handle single category from URL (e.g. from nav menu)
      // If it's a slug, we might need to map it back to the full name if they differ significantly
      // For now assuming simple mapping or direct match
      const matchedCategory = categories.find(c => c.toLowerCase().replace(/ /g, "-") === category.toLowerCase())
      if (matchedCategory) {
          setSelectedCategories([matchedCategory])
      }
    }
    
    const brand = searchParams.get("brand")
    if (brand) {
        const matchedBrand = brands.find(b => b.toLowerCase().replace(/ /g, "-").replace(/\//g, "") === brand.toLowerCase())
        if (matchedBrand) {
            setSelectedBrands([matchedBrand])
        }
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    updateParams({ search })
  }

  const updateParams = (newParams: Record<string, any>) => {
    const params = new URLSearchParams(searchParams)
    
    if (newParams.search !== undefined) {
      if (newParams.search) params.set("search", newParams.search)
      else params.delete("search")
    }

    // Handle other updates if needed, but for checkboxes we usually update state then sync to URL
    // For simplicity in this demo, we'll just update the URL when filters change
    setSearchParams(params)
  }
  
  // Sync state to URL params
  useEffect(() => {
      const params = new URLSearchParams(searchParams)
      
      params.delete("category")
      selectedCategories.forEach(c => params.append("category", c))
      
      params.delete("brand")
      selectedBrands.forEach(b => params.append("brand", b))
      
      // Debounce price update or add apply button for price
      
      setSearchParams(params)
  }, [selectedCategories, selectedBrands])


  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-4">Search</h3>
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <Slider
          defaultValue={[0, 2000]}
          max={2000}
          step={10}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <Label htmlFor={`category-${category}`}>{category}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Brands</h3>
        <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <Label htmlFor={`brand-${brand}`}>{brand}</Label>
            </div>
          ))}
        </div>
      </div>
      
      <Button 
        variant="outline" 
        className="w-full"
        onClick={() => {
            setSelectedCategories([])
            setSelectedBrands([])
            setPriceRange([0, 2000])
            setSearch("")
            setSearchParams(new URLSearchParams())
        }}
      >
          Reset Filters
      </Button>
    </div>
  )
}
