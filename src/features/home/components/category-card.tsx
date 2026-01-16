import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CategoryCardProps {
    title: string;
    image: string;
}

function slugifyCategory(name: string) {
    return name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/\//g, "");
}

export function CategoryCard({ title, image }: CategoryCardProps) {
    return (
        <Link to={`/category/${slugifyCategory(title)}`}
              className="group block h-full">
            <Card className="h-full overflow-hidden border-none shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative aspect-square rounded-xl">

                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

                <CardContent className="relative h-full flex items-center justify-center p-2 text-center z-10">
                    <h3 className="font-bold text-white text-xs sm:text-sm md:text-base drop-shadow-md leading-tight break-words w-full px-1">
                        {title}
                    </h3>
                </CardContent>
            </Card>
        </Link>
    );
}
