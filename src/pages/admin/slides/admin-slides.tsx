import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { apiService } from "@/services/api/api-service"
import { convertFileToBase64 } from "@/lib/utils"
import { Loader2, Plus, Trash2, Edit } from "lucide-react"
import { useEffect, useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

export default function AdminSlides() {
    const [slides, setSlides] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [selectedSlide, setSelectedSlide] = useState<any>(null)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
    })
    const [file, setFile] = useState<File | null>(null)
    const [uploading, setUploading] = useState(false)

    const fetchSlides = async () => {
        setLoading(true)
        try {
            const data = await apiService.getHeroSlides()
            setSlides(data)
        } catch (error) {
            console.error("Failed to fetch slides", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchSlides()
    }, [])

    const handleAdd = () => {
        setSelectedSlide(null)
        setFormData({ title: "", description: "", image: "" })
        setFile(null)
        setIsDialogOpen(true)
    }

    const handleEdit = (slide: any) => {
        setSelectedSlide(slide)
        setFormData({
            title: slide.title || "",
            description: slide.description || "",
            image: slide.image || "",
        })
        setFile(null)
        setIsDialogOpen(true)
    }

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this slide?")) {
            await apiService.deleteHeroSlide(id)
            fetchSlides()
        }
    }

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
            
            const slideData = { ...formData, image: imageUrl }

            if (selectedSlide) {
                await apiService.updateHeroSlide(selectedSlide.id, slideData)
            } else {
                await apiService.addHeroSlide(slideData)
            }
            setIsDialogOpen(false)
            fetchSlides()
        } catch (error) {
            console.error("Error saving slide:", error)
        } finally {
            setUploading(false)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Manage Hero Slides</h1>
                <Button onClick={handleAdd}>
                    <Plus className="mr-2 h-4 w-4" /> Add Slide
                </Button>
            </div>

            {loading ? (
                <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin" />
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {slides.map((slide) => (
                        <Card key={slide.id} className="overflow-hidden">
                            <div className="aspect-video w-full relative">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-lg">{slide.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500 mb-4">{slide.description}</p>
                                <div className="flex justify-end gap-2">
                                    <Button variant="outline" size="sm" onClick={() => handleEdit(slide)}>
                                        <Edit className="h-4 w-4 mr-1" /> Edit
                                    </Button>
                                    <Button variant="destructive" size="sm" onClick={() => handleDelete(slide.id)}>
                                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{selectedSlide ? "Edit Slide" : "Add Slide"}</DialogTitle>
                        <DialogDescription>
                            {selectedSlide ? "Make changes to the slide here." : "Add a new slide to the hero carousel."}
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
                                {uploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {uploading ? "Processing..." : "Save changes"}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
