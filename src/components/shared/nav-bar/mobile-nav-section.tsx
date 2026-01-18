import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils.ts";
import type {ReactNode} from "react";

interface MobileNavSectionProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: ReactNode;
}

export const MobileNavSection = ({title, isOpen, onToggle, children}: MobileNavSectionProps) => {
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={onToggle}
        >
            <CollapsibleTrigger
                className="flex items-center justify-between w-full py-4 text-lg font-medium border-b border-border/50 text-foreground">
                {title}
                <ChevronDown className={cn(
                    "w-5 h-5 text-muted-foreground transition-transform",
                    isOpen && "rotate-180"
                )}/>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-2 py-2">
                {children}
            </CollapsibleContent>
        </Collapsible>
    );
}
