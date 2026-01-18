import {Button} from "@/components/ui/button";
import {Menu, Search, X} from "lucide-react";
import {ContactButton} from "@/components/shared/nav-bar/contact-button.tsx";

interface RightActionProps {
    isSearchOpen: boolean;
    setIsSearchOpen: (isOpen: boolean) => void;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export const RightAction = ({
                                isSearchOpen,
                                setIsSearchOpen,
                                isMobileMenuOpen,
                                setIsMobileMenuOpen
                            }: RightActionProps) => {
    return (
        <div className="flex items-center gap-2">
            {/* Search Toggle */}
            <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
                <Search className="w-5 h-5"/>
            </Button>

            {/* Contact Button */}
            <ContactButton className="hidden sm:flex"/>

            {/* Mobile Menu Toggle */}
            <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
            </Button>
        </div>
    );
}
