import {Button} from "@/components/ui/button";
import {ShoppingBag} from "lucide-react";
import {cn} from "@/lib/utils";

interface ContactButtonProps {
    className?: string;
    showIcon?: boolean;
}

export const ContactButton = ({className, showIcon = true}: ContactButtonProps) => {
    return (
        <Button
            variant="default"
            className={cn(
                "rounded-full bg-gradient-accent hover:opacity-90 transition-opacity text-accent-foreground border-0",
                className
            )}
            onClick={() => window.open("https://wa.me/94714188143", "_blank")}
        >
            {showIcon && <ShoppingBag className="w-4 h-4 mr-2"/>}
            Contact Us
        </Button>
    );
}
