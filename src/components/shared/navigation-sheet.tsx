import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTitle, SheetTrigger,} from "@/components/ui/sheet";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import {Menu} from "lucide-react";
import {Logo} from "@/components/shared/logo";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion";
import {apiService} from "@/services/api/api-service";
import * as React from "react";

export const NavigationSheet = () => {
    const [brands, setBrands] = React.useState<any[]>([]);
    const [categories, setCategories] = React.useState<any[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const brandsData = await apiService.getBrandList();
            const categoriesData = await apiService.getCategoryList();
            setBrands(brandsData);
            setCategories(categoriesData);
        };
        fetchData();
    }, []);

    return (
        <Sheet>
            <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden>

            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent className="px-6 py-3 overflow-y-auto">
                <Logo/>
                <div className="mt-6 flex flex-col gap-4">
                    <a href="/" className="text-sm font-medium hover:underline">
                        Home
                    </a>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="brands" className="border-b-0">
                            <AccordionTrigger className="py-2 hover:no-underline">
                                Shop by Brand
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="grid grid-cols-2 gap-2 pl-2">
                                    {brands.map((brand) => (
                                        <a
                                            key={brand.name}
                                            href={`/brand/${brand.name.toLowerCase().replace(/ /g, "-").replace(/\//g, "")}`}
                                            className="text-sm text-muted-foreground hover:text-foreground py-1"
                                        >
                                            {brand.name}
                                        </a>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="categories" className="border-b-0">
                            <AccordionTrigger className="py-2 hover:no-underline">
                                Categories
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-2 pl-2">
                                    {categories.map((category) => (
                                        <a
                                            key={category.title}
                                            href={category.href}
                                            className="text-sm text-muted-foreground hover:text-foreground py-1"
                                        >
                                            {category.title}
                                        </a>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <a href="/about" className="text-sm font-medium hover:underline">
                        About Us
                    </a>
                </div>
            </SheetContent>
        </Sheet>
    );
};
