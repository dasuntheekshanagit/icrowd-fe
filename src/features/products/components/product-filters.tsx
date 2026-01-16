import {Button} from "@/components/ui/button"
import {Checkbox} from "@/components/ui/checkbox"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Slider} from "@/components/ui/slider"
import {apiService} from "@/services/api/api-service"
import {Search} from "lucide-react"
import {useEffect, useState} from "react"
import {useSearchParams} from "react-router-dom"

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
    const [categories, setCategories] = useState<any[]>([])
    const [brands, setBrands] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const categoriesData = await apiService.getCategoryList()
            setCategories(categoriesData)
            const brandsData = await apiService.getBrandList()
            setBrands(brandsData)
        }
        fetchData()
    }, [])

    useEffect(() => {
        const category = searchParams.get("category")
        if (category && categories.length > 0) {
            const matchedCategory = categories.find(c => c.title.toLowerCase().replace(/ /g, "-") === category.toLowerCase())
            if (matchedCategory) {
                setSelectedCategories([matchedCategory.title])
            }
        }

        const brand = searchParams.get("brand")
        if (brand && brands.length > 0) {
            const matchedBrand = brands.find(b => b.name.toLowerCase().replace(/ /g, "-").replace(/\//g, "") === brand.toLowerCase())
            if (matchedBrand) {
                setSelectedBrands([matchedBrand.name])
            }
        }
    }, [categories, brands]) // Run when data is loaded

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        updateParams({search})
    }

    const updateParams = (newParams: Record<string, any>) => {
        const params = new URLSearchParams(searchParams)

        if (newParams.search !== undefined) {
            if (newParams.search) params.set("search", newParams.search)
            else params.delete("search")
        }

        setSearchParams(params)
    }

    useEffect(() => {
        const params = new URLSearchParams(searchParams)

        params.delete("category")
        selectedCategories.forEach(c => params.append("category", c))

        params.delete("brand")
        selectedBrands.forEach(b => params.append("brand", b))

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
                        <Search className="h-4 w-4"/>
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
                    <span>LKR {priceRange[0]}</span>
                    <span>LKR {priceRange[1]}</span>
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                    {categories.map((category) => (
                        <div key={category.title} className="flex items-center space-x-2">
                            <Checkbox
                                id={`category-${category.title}`}
                                checked={selectedCategories.includes(category.title)}
                                onCheckedChange={() => toggleCategory(category.title)}
                            />
                            <Label htmlFor={`category-${category.title}`}>{category.title}</Label>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-4">Brands</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                    {brands.map((brand) => (
                        <div key={brand.name} className="flex items-center space-x-2">
                            <Checkbox
                                id={`brand-${brand.name}`}
                                checked={selectedBrands.includes(brand.name)}
                                onCheckedChange={() => toggleBrand(brand.name)}
                            />
                            <Label htmlFor={`brand-${brand.name}`}>{brand.name}</Label>
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
