import type {LucideIcon} from "lucide-react";

interface ValueCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const ValueCard = ({icon: Icon, title, description}: ValueCardProps) => {
    return (
        <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-accent"/>
            </div>
            <h3 className="font-semibold font-display text-lg mb-2">
                {title}
            </h3>
            <p className="text-sm text-muted-foreground">
                {description}
            </p>
        </div>
    );
}
