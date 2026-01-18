import {Logo} from "@/components/shared/nav-bar/logo";
import {NavMenu} from "@/components/shared/nav-bar/nav-menu";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils.ts";
import {RightAction} from "@/components/shared/nav-bar/right-action";
import {SearchBar} from "@/components/shared/nav-bar/search-bar";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {MobileNavbar} from "@/components/shared/nav-bar/mobile-navbar";
import {apiService} from "@/services/api/api-service.ts";
import type {Brand, Category} from "@/types";

export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [openSections, setOpenSections] = useState<string[]>([]);
    const [brands, setBrands] = useState<Brand[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    }, [location.pathname, isMobileMenuOpen]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const brandsData = await apiService.getBrandList();
                const categoriesData = await apiService.getCategoryList();
                setBrands(brandsData);
                setCategories(categoriesData);
            } catch (error) {
                console.error("Failed to fetch nav data", error);
            }
        };
        void fetchData();
    }, []);

    const toggleSection = (section: string) => {
        setOpenSections(prev =>
            prev.includes(section)
                ? prev.filter(s => s !== section)
                : [...prev, section]
        );
    };

    return (
        <>
            <motion.nav
                initial={{y: -100}}
                animate={{y: 0}}
                transition={{duration: 0.5, ease: "easeOut"}}
                className={cn(
                    "fixed top-0 inset-x-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "glass shadow-elegant"
                        : "bg-transparent"
                )}
            >
                <div className="container mx-auto">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <Logo/>

                        {/* Desktop Menu */}
                        <NavMenu
                            className="hidden md:flex"
                            brands={brands}
                            categories={categories}
                        />

                        <RightAction
                            isSearchOpen={isSearchOpen}
                            setIsSearchOpen={setIsSearchOpen}
                            isMobileMenuOpen={isMobileMenuOpen}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                        />
                    </div>
                </div>

                <SearchBar isSearchOpen={isSearchOpen}/>
            </motion.nav>

            <MobileNavbar
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                openSections={openSections}
                toggleSection={toggleSection}
                brands={brands}
                categories={categories}
            />
        </>
    );
};
