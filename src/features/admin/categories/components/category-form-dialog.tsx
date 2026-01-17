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
import { useState, useEffect } from "react"
import { convertFileToBase64 } from "@/lib/utils"

interface CategoryFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  category?: any
  onSave: (category: any) => void
}

export function CategoryFormDialog({ open, onOpenChange, category, onSave }: CategoryFormDialogProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    href: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (category) {
      setFormData({
        title: category.title || "",
        description: category.description || "",
        image: category.image || "",
        href: category.href || "",
      })
    } else {
      setFormData({
        title: "",
        description: "",
        image: "",
        href: "",
      })
    }
    setFile(null)
  }, [category, open])

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
        onSave({ ...category, ...formData, image: imageUrl })
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
          <DialogTitle>{category ? "Edit Category" : "Add Category"}</DialogTitle>
          <DialogDescription>
            {category ? "Make changes to the category here." : "Add a new category to your store."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="href" className="text-right">
              Slug (href)
            </Label>
            <Input
              id="href"
              value={formData.href}
              onChange={(e) => setFormData({ ...formData, href: e.target.value })}
              className="col-span-3"
            />
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
                {uploading ? "Processing..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
