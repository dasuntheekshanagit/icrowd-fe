import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState, useEffect } from "react"
import { apiService } from "@/services/api/api-service"
import { convertFileToBase64 } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface ProductFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product?: any
  onSave: (product: any) => void
}

export function ProductFormDialog({ open, onOpenChange, product, onSave }: ProductFormDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    brand: "",
    description: "",
    stock: "",
  })
  const [categories, setCategories] = useState<any[]>([])
  const [brands, setBrands] = useState<any[]>([])
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        image: product.image || "",
        category: product.category || "",
        brand: product.brand || "",
        description: product.description || "",
        stock: product.stock || "",
      })
    } else {
      setFormData({
        name: "",
        price: "",
        image: "",
        category: "",
        brand: "",
        description: "",
        stock: "",
      })
    }
    setFile(null)
  }, [product, open])

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await apiService.getCategoryList()
      const brandsData = await apiService.getBrandList()
      setCategories(categoriesData)
      setBrands(brandsData)
    }
    fetchData()
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)
    try {
        let imageUrl = formData.image
        if (file) {
            imageUrl = await convertFileToBase64(file)
        }
        onSave({ ...product, ...formData, image: imageUrl })
        onOpenChange(false)
    } catch (error) {
        console.error("Error processing file:", error)
    } finally {
        setUploading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{product ? "Edit Product" : "Add Product"}</DialogTitle>
          <DialogDescription>
            {product ? "Make changes to the product here." : "Add a new product to your catalog."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              id="price"
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Select 
                value={formData.category} 
                onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                    <SelectItem key={c.title} value={c.title}>{c.title}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="brand" className="text-right">
              Brand
            </Label>
            <Select 
                value={formData.brand} 
                onValueChange={(value) => setFormData({ ...formData, brand: value })}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a brand" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((b) => (
                    <SelectItem key={b.name} value={b.name}>{b.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Image
            </Label>
            <div className="col-span-3">
                <Input
                    id="image"
                    type="file"
                    onChange={handleFileChange}
                    className="mb-2"
                />
                {formData.image && !file && (
                    <div className="text-sm text-gray-500">
                        {formData.image.startsWith('data:') ? 'Current image: [Base64 Image]' : `Current image: ${formData.image}`}
                    </div>
                )}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stock" className="text-right">
              Stock
            </Label>
            <Input
              id="stock"
              type="number"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={uploading}>
                {uploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {uploading ? "Processing..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
