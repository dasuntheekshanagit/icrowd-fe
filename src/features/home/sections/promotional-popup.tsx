import {Button} from "@/components/ui/button"
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import {X} from "lucide-react"
import {useEffect, useState} from "react"
import {apiService} from "@/services/api/api-service.ts"

//TODO:
export const PromotionalPopup = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [bannerData, setBannerData] = useState<any>(null)

    useEffect(() => {
        const fetchBanner = async () => {
            const data = await apiService.getPromotionalBanner()
            if (data && data.enabled) {
                setBannerData(data)

                // Check if the user has seen THIS version of the banner
                const lastSeenTimestamp = sessionStorage.getItem("lastSeenBannerTimestamp")

                // If the banner has been updated since the user last saw it, or if they haven't seen it at all
                if (!lastSeenTimestamp || (data.updatedAt && parseInt(lastSeenTimestamp) < data.updatedAt)) {
                    const timer = setTimeout(() => {
                        setIsOpen(true)
                    }, 2000)
                    return () => clearTimeout(timer)
                }
            }
        }
        fetchBanner()
    }, [])

    const handleClose = () => {
        setIsOpen(false)
        if (bannerData && bannerData.updatedAt) {
            sessionStorage.setItem("lastSeenBannerTimestamp", bannerData.updatedAt.toString())
        } else {
            sessionStorage.setItem("lastSeenBannerTimestamp", Date.now().toString())
        }
    }

    if (!bannerData) return null

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
            <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-transparent border-none shadow-none">
                <div className="relative bg-background rounded-lg overflow-hidden shadow-xl">
                    <button
                        onClick={handleClose}
                        className="absolute right-2 top-2 z-10 p-1.5 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors" aria-label="Close"
                    >
                        <X className="h-4 w-4"/>
                    </button>

                    <div className="relative h-72 w-full">
                        <img
                            src={bannerData.image || "/hero/1.png"}
                            alt="Special Offer"
                            className="object-cover w-full h-full"
                        />
                        <div
                            className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                            <DialogHeader className="text-left mb-3">
                                <DialogTitle className="text-2xl font-bold text-white font-display">{bannerData.title}</DialogTitle>
                            </DialogHeader>
                            <p className="mb-4 text-white/90 text-sm">{bannerData.description}</p>
                            <Button className="w-full bg-white text-black hover:bg-white/90 font-semibold"
                                    onClick={handleClose}>
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
