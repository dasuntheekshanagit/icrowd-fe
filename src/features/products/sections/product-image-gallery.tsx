import { Card } from "@/components/ui/card"
import { useState } from "react"

interface ProductImageGalleryProps {
  images: string[]
  name: string
}

export function ProductImageGallery({ images, name }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="space-y-4">
      <Card className="overflow-hidden border-none shadow-none bg-secondary/10">
        <div className="aspect-square relative">
          <img 
            src={selectedImage} 
            alt={name} 
            className="object-cover w-full h-full"
          />
        </div>
      </Card>
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, i) => (
          <Card 
            key={i} 
            className={`overflow-hidden cursor-pointer hover:ring-2 ring-primary transition-all ${selectedImage === img ? 'ring-2' : ''}`}
            onClick={() => setSelectedImage(img)}
          >
            <div className="aspect-square relative">
              <img 
                src={img} 
                alt={`${name} view ${i + 1}`} 
                className="object-cover w-full h-full"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
