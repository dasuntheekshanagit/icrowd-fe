import { Card, CardContent } from "@/components/ui/card";

interface InfoCardProps {
    title: string;
    description: string;
    className?: string;
}

export function InfoCard({ title, description, className }: InfoCardProps) {
    return (
        <Card className={`border-none ${className}`}>
            <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}