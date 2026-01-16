import {Card, CardContent} from "@/components/ui/card";
import {Link} from "react-router-dom";

interface BrandCardProps {
    name: string;
    logo: string;
}

function slugifyBrand(name: string) {
    return name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/\//g, "");
}

export function BrandCard({name, logo}: BrandCardProps) {
    return (
        <Link
            to={`/brand/${slugifyBrand(name)}`}
            className="group w-40 sm:w-48"
        >
            <Card
                className="h-24 flex items-center justify-center p-4 bg-background hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-0 flex items-center justify-center w-full h-full">
                    <img
                        src={logo}
                        alt={name}
                        loading="lazy"
                        className="max-h-12 max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                </CardContent>
            </Card>
        </Link>
    );
}
