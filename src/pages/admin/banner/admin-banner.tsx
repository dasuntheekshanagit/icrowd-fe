import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { apiService } from "@/services/api/api-service"
import { convertFileToBase64 } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

export default function AdminBanner() {
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        enabled: false
    })
    const [file, setFile] = useState<File | null>(null)

    useEffect(() => {
        const fetchBanner = async () => {
            setLoading(true)
            try {
                const data = await apiService.getPromotionalBanner()
                if (data) {
                    setFormData({
                        title: data.title || "",
                        description: data.description || "",
                        image: data.image || "",
                        enabled: data.enabled || false
                    })
                }
            } catch (error) {
                console.error("Failed to fetch banner settings", error)
            } finally {
                setLoading(false)
            }
        }
        fetchBanner()
    }, [])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)
        try {
            let imageUrl = formData.image
            if (file) {
                imageUrl = await convertFileToBase64(file)
            }
            
            await apiService.updatePromotionalBanner({ ...formData, image: imageUrl })
            alert("Banner settings updated successfully!")
        } catch (error) {
            console.error("Error saving banner settings:", error)
            alert("Failed to update banner settings.")
        } finally {
            setSaving(false)
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Manage Promotional Banner</h1>
            
            <Card>
                <CardHeader>
                    <CardTitle>Banner Settings</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <Switch 
                                id="enabled" 
                                checked={formData.enabled}
                                onCheckedChange={(checked) => setFormData({...formData, enabled: checked})}
                            />
                            <Label htmlFor="enabled">Enable Promotional Banner</Label>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                placeholder="e.g., New Year Sale!"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="e.g., Get up to 50% off..."
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="image">Image</Label>
                            <Input
                                id="image"
                                type="file"
                                onChange={handleFileChange}
                            />
                            {formData.image && !file && (
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500 mb-2">Current Image:</p>
                                    <img 
                                        src={formData.image} 
                                        alt="Current Banner" 
                                        className="h-32 object-cover rounded-md border"
                                    />
                                </div>
                            )}
                        </div>

                        <Button type="submit" disabled={saving}>
                            {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {saving ? "Saving..." : "Save Settings"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
