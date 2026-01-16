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
  }, [brand, open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({ ...brand, ...formData })
    onOpenChange(false)
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
              Logo URL
            </Label>
            <Input
              id="logo"
              value={formData.logo}
              onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
