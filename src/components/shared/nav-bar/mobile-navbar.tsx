import {ChevronRight} from "lucide-react";
import {Link, useLocation} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import {cn} from "@/lib/utils.ts";
import {ContactButton} from "@/components/shared/nav-bar/contact-button";
import {MobileNavSection} from "@/components/shared/nav-bar/mobile-nav-section";
import type {Brand, Category} from "@/types";

interface MobileNavbarProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
    openSections: string[];
    toggleSection: (section: string) => void;
    brands: Brand[];
    categories: Category[];
}

export const MobileNavbar = ({
                                 isMobileMenuOpen,
                                 setIsMobileMenuOpen,
                                 openSections,
                                 toggleSection,
                                 brands,
                                 categories
                             }: MobileNavbarProps) => {
    const location = useLocation();

    return (
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="fixed inset-0 z-50 md:hidden"
                >
                    <div
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <motion.div
                        initial={{x: "100%"}}
                        animate={{x: 0}}
                        exit={{x: "100%"}}
                        transition={{type: "spring", damping: 25, stiffness: 300}}
                        className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-card shadow-xl overflow-y-auto"
                    >
                        <div className="flex flex-col p-6 pt-20">
                            {/* Home Link */}
                            <Link
                                to="/"
                                className={cn(
                                    "flex items-center justify-between py-4 text-lg font-medium border-b border-border/50",
                                    location.pathname === "/" ? "text-accent" : "text-foreground"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                                <ChevronRight className="w-5 h-5 text-muted-foreground"/>
                            </Link>

                            <MobileNavSection
                                title="Shop by Brand"
                                isOpen={openSections.includes('brands')}
                                onToggle={() => toggleSection('brands')}
                            >
                                {brands.map((brand) => (
                                    <Link
                                        key={brand.id}
                                        to={`/products?brand=${brand.name.toLowerCase().replace(/ /g, "-")}`}
                                        className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {brand.name}
                                    </Link>
                                ))}
                            </MobileNavSection>

                            <MobileNavSection
                                title="Categories"
                                isOpen={openSections.includes('categories')}
                                onToggle={() => toggleSection('categories')}
                            >
                                {categories.map((category) => (
                                    <Link
                                        key={category.id}
                                        to={`/products?category=${category.title.toLowerCase().replace(/ /g, "-")}`}
                                        className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {category.title}
                                    </Link>
                                ))}
                            </MobileNavSection>

                            {/* About Link */}
                            <Link
                                to="/about"
                                className={cn(
                                    "flex items-center justify-between py-4 text-lg font-medium border-b border-border/50",
                                    location.pathname === "/about" ? "text-accent" : "text-foreground"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About Us
                                <ChevronRight className="w-5 h-5 text-muted-foreground"/>
                            </Link>

                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.3}}
                                className="mt-8"
                            >
                                <ContactButton className="w-full h-12" showIcon={false}/>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
