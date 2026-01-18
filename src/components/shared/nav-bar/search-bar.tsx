import {AnimatePresence, motion} from "framer-motion";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";

interface SearchBarProps {
    isSearchOpen: boolean;
}

export const SearchBar = ({isSearchOpen}: SearchBarProps) => {
    return (
        <>
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.2}}
                        className="border-t border-border/50 overflow-hidden"
                    >
                        <div className="container mx-auto py-4">
                            <div className="relative max-w-xl mx-auto">
                                <Search
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"/>
                                <Input
                                    type="search"
                                    placeholder="Search products, brands, categories..."
                                    className="w-full pl-12 pr-4 h-12 rounded-full border-muted bg-muted/50 focus:bg-background"
                                    autoFocus
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
