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
import { Loader2, X, Plus } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

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
    images: [] as string[],
    category: "",
    brand: "",
    description: "",
    stock: "",
    featured: false,
    discountedPrice: "",
    discountVariant: "",
    offerEndsAt: "",
    features: [] as string[],
  })
  const [categories, setCategories] = useState<any[]>([])
  const [brands, setBrands] = useState<any[]>([])
  const [mainImageFile, setMainImageFile] = useState<File | null>(null)
  const [additionalFiles, setAdditionalFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [featureInput, setFeatureInput] = useState("")

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        image: product.image || "",
        images: product.images || [],
        category: product.category || "",
        brand: product.brand || "",
        description: product.description || "",
        stock: product.stock || "",
        featured: product.featured || false,
        discountedPrice: product.discountedPrice || "",
        discountVariant: product.discountVariant || "",
        offerEndsAt: product.offerEndsAt || "",
        features: product.features || [],
      })
    } else {
      setFormData({
        name: "",
        price: "",
        image: "",
        images: [],
        category: "",
        brand: "",
        description: "",
        stock: "",
        featured: false,
        discountedPrice: "",
        discountVariant: "",
        offerEndsAt: "",
        features: [],
      })
    }
    setMainImageFile(null)
    setAdditionalFiles([])
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

  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMainImageFile(e.target.files[0])
    }
  }

  const handleAdditionalImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setAdditionalFiles(prev => [...prev, ...files])
    }
  }

  const removeAdditionalFile = (index: number) => {
    setAdditionalFiles(prev => prev.filter((_, i) => i !== index))
  }

  const removeExistingAdditionalImage = (index: number) => {
    setFormData(prev => ({
        ...prev,
        images: prev.images.filter((_, i) => i !== index)
    }))
  }

  const addFeature = () => {
    if (featureInput.trim()) {
        setFormData(prev => ({
            ...prev,
            features: [...prev.features, featureInput.trim()]
        }))
        setFeatureInput("")
    }
  }

  const removeFeature = (index: number) => {
    setFormData(prev => ({
        ...prev,
        features: prev.features.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)
    try {
        let mainImageUrl = formData.image
        if (mainImageFile) {
            mainImageUrl = await convertFileToBase64(mainImageFile)
        }

        const newAdditionalImages = await Promise.all(
            additionalFiles.map(file => convertFileToBase64(file))
        )

        const finalImages = [...formData.images, ...newAdditionalImages]

        onSave({ 
            ...product, 
            ...formData, 
            image: mainImageUrl,
            images: finalImages,
            price: Number(formData.price),
            stock: Number(formData.stock),
            discountedPrice: formData.discountedPrice ? Number(formData.discountedPrice) : undefined,
        })
        onOpenChange(false)
    } catch (error) {
        console.error("Error processing file:", error)
    } finally {
        setUploading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{product ? "Edit Product" : "Add Product"}</DialogTitle>
          <DialogDescription>
            {product ? "Make changes to the product here." : "Add a new product to your catalog."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
              </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select 
                    value={formData.category} 
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((c) => (
                        <SelectItem key={c.title} value={c.title}>{c.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="brand">Brand</Label>
                <Select 
                    value={formData.brand} 
                    onValueChange={(value) => setFormData({ ...formData, brand: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map((b) => (
                        <SelectItem key={b.name} value={b.name}>{b.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
          </div>

          <div className="grid gap-2">
            <Label>Main Image</Label>
            <Input
                type="file"
                onChange={handleMainImageChange}
                accept="image/*"
            />
            {(formData.image || mainImageFile) && (
                <div className="mt-2">
                    <p className="text-sm text-gray-500 mb-1">Preview:</p>
                    <img 
                        src={mainImageFile ? URL.createObjectURL(mainImageFile) : formData.image} 
                        alt="Main Preview" 
                        className="h-32 object-contain border rounded"
                    />
                </div>
            )}
          </div>

          <div className="grid gap-2">
            <Label>Additional Images</Label>
            <Input
                type="file"
                multiple
                onChange={handleAdditionalImagesChange}
                accept="image/*"
            />
            <div className="flex flex-wrap gap-2 mt-2">
                {formData.images.map((img, index) => (
                    <div key={`existing-${index}`} className="relative group">
                        <img src={img} alt={`Existing ${index}`} className="h-20 w-20 object-cover border rounded" />
                        <button 
                            type="button"
                            onClick={() => removeExistingAdditionalImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </div>
                ))}
                {additionalFiles.map((file, index) => (
                    <div key={`new-${index}`} className="relative group">
                        <img src={URL.createObjectURL(file)} alt={`New ${index}`} className="h-20 w-20 object-cover border rounded" />
                        <button 
                            type="button"
                            onClick={() => removeAdditionalFile(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </div>
                ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="stock">Stock</Label>
                <Input
                  id="stock"
                  type="number"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                />
              </div>
              <div className="flex items-center space-x-2 mt-8">
                <Checkbox 
                    id="featured" 
                    checked={formData.featured}
                    onCheckedChange={(checked) => setFormData({ ...formData, featured: checked as boolean })}
                />
                <Label htmlFor="featured">Featured Product</Label>
              </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="discountedPrice">Discounted Price</Label>
                <Input
                  id="discountedPrice"
                  type="number"
                  value={formData.discountedPrice}
                  onChange={(e) => setFormData({ ...formData, discountedPrice: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="discountVariant">Discount Variant</Label>
                <Select 
                    value={formData.discountVariant} 
                    onValueChange={(value) => setFormData({ ...formData, discountVariant: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select variant" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sale">Sale</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="hot">Hot</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="offerEndsAt">Offer Ends At</Label>
                <Input
                  id="offerEndsAt"
                  type="date"
                  value={formData.offerEndsAt}
                  onChange={(e) => setFormData({ ...formData, offerEndsAt: e.target.value })}
                />
              </div>
          </div>

          <div className="grid gap-2">
            <Label>Features</Label>
            <div className="flex gap-2">
                <Input 
                    value={featureInput}
                    onChange={(e) => setFeatureInput(e.target.value)}
                    placeholder="Add a feature"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            addFeature();
                        }
                    }}
                />
                <Button type="button" onClick={addFeature} size="icon">
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
            <ul className="list-disc pl-5 space-y-1">
                {formData.features.map((feature, index) => (
                    <li key={index} className="text-sm flex justify-between items-center group">
                        <span>{feature}</span>
                        <button 
                            type="button" 
                            onClick={() => removeFeature(index)}
                            className="text-red-500 opacity-0 group-hover:opacity-100"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </li>
                ))}
            </ul>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="min-h-[100px]"
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
