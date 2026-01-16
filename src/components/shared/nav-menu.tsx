import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {cn} from "@/lib/utils";
import {apiService} from "@/services/api/api-service";
import type {ComponentProps} from "react";
import * as React from "react";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => {
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
        <NavigationMenu {...props}>
            <NavigationMenuList
                className="space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <a href="/">Home</a>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Shop by Brand</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
                            {brands.map((brand) => (
                                <ListItem key={brand.name} title={brand.name}
                                          href={`/brand/${brand.name.toLowerCase().replace(/ /g, "-").replace(/\//g, "")}`}>
                                    Explore {brand.name} products
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[800px]">
                            {categories.map((category) => (
                                <ListItem
                                    key={category.title}
                                    title={category.title}
                                    href={category.href}
                                >
                                    {category.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <a href="/about">About Us</a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
