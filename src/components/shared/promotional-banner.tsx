import {Button} from "@/components/ui/button"
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import {X} from "lucide-react"
import {useEffect, useState} from "react"

export function PromotionalBanner() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            const hasSeenBanner = sessionStorage.getItem("hasSeenPromoBanner")
            if (!hasSeenBanner) {
                setIsOpen(true)
                sessionStorage.setItem("hasSeenPromoBanner", "true")
            }
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-transparent border-none shadow-none">
                <div className="relative bg-background rounded-lg overflow-hidden shadow-xl">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute right-2 top-2 z-10 p-1 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
                    >
                        <X className="h-4 w-4"/>
                    </button>

                    <div className="relative h-64 w-full">
                        <img
                            src="/hero/1.png"
                            alt="Special Offer"
                            className="object-cover w-full h-full"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                            <DialogHeader className="text-left mb-2">
                                <DialogTitle className="text-2xl font-bold text-white">New Year Sale!</DialogTitle>
                            </DialogHeader>
                            <p className="mb-4 text-white/90">Get up to 50% off on selected items. Limited time
                                offer.</p>
                            <Button className="w-full bg-white text-black hover:bg-white/90"
                                    onClick={() => setIsOpen(false)}>
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
