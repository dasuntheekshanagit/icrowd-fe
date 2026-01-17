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
import { useState, useEffect } from "react"
import { convertFileToBase64 } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface BrandFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  brand?: any
  onSave: (brand: any) => void
}

export function BrandFormDialog({ open, onOpenChange, brand, onSave }: BrandFormDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    logo: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (brand) {
      setFormData({
        name: brand.name || "",
        logo: brand.logo || "",
      })
    } else {
      setFormData({
        name: "",
        logo: "",
      })
    }
    setFile(null)
  }, [brand, open])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)
    try {
        let logoUrl = formData.logo
        if (file) {
            logoUrl = await convertFileToBase64(file)
        }
        onSave({ ...brand, ...formData, logo: logoUrl })
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
          <DialogTitle>{brand ? "Edit Brand" : "Add Brand"}</DialogTitle>
          <DialogDescription>
            {brand ? "Make changes to the brand here." : "Add a new brand to your store."}
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
            <Label htmlFor="logo" className="text-right">
              Logo
            </Label>
            <div className="col-span-3">
                <Input
                    id="logo"
                    type="file"
                    onChange={handleFileChange}
                    className="mb-2"
                />
                {formData.logo && !file && (
                    <div className="text-sm text-gray-500">
                        {formData.logo.startsWith('data:') ? 'Current logo: [Base64 Image]' : `Current logo: ${formData.logo}`}
                    </div>
                )}
            </div>
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
