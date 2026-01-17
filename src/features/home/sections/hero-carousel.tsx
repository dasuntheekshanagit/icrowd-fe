import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {Card, CardContent} from "@/components/ui/card"
import {Carousel, type CarouselApi, CarouselContent, CarouselItem,} from "@/components/ui/carousel"
import {cn} from "@/lib/utils"
import {apiService} from "@/services/api/api-service"
import { Skeleton } from "@/components/ui/skeleton"

export function HeroCarousel() {
    const plugin = React.useRef(
        Autoplay({delay: 4000, stopOnInteraction: true})
    )
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const [slides, setSlides] = React.useState<any[]>([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const fetchSlides = async () => {
            try {
                const data = await apiService.getHeroSlides()
                setSlides(data)
            } catch (error) {
                console.error("Failed to fetch slides", error)
            } finally {
                setLoading(false)
            }
        }
        fetchSlides()
    }, [])

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api, slides]) // Re-run when slides are loaded

    if (loading) {
        return (
            <div className="w-full aspect-[3/2] md:aspect-[3/1] max-h-[600px]">
                <Skeleton className="w-full h-full" />
            </div>
        )
    }

    if (slides.length === 0) {
        return null
    }

    return (
        <div className="w-full relative">
            <Carousel
                setApi={setApi}
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {slides.map((slide) => (
                        <CarouselItem key={slide.id}>
                            <div className="p-0">
                                <Card className="border-0 shadow-none bg-transparent rounded-none">
                                    <CardContent
                                        className="flex aspect-[3/2] w-full items-center justify-center p-0 relative overflow-hidden rounded-none md:aspect-[3/1] lg:aspect-[3/1] xl:aspect-[3/1] 2xl:aspect-[3/1] max-h-[600px]">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="object-cover w-full h-full absolute inset-0"
                                        />
                                        <div
                                            className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white p-4">
                                            <h2 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg">
                                                {slide.title}
                                            </h2>
                                            <p className="text-sm md:text-xl max-w-2xl drop-shadow-md">{slide.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {Array.from({length: count}).map((_, index) => (
                    <button
                        key={index}
                        className={cn(
                            "h-2 w-2 rounded-full transition-all shadow-sm",
                            index + 1 === current ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"
                        )}
                        onClick={() => api?.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
