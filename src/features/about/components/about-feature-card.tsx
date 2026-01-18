import {Card, CardContent} from "@/components/ui/card";

interface FeatureCardProps {
    title: string;
    description: string;
    className?: string;
}

export const FeatureCard = ({title, description, className}: FeatureCardProps)=> {
    return (
        <Card
            className={`text-center hover:shadow-md transition-shadow ${className ?? ""}`}
        >
            <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}
