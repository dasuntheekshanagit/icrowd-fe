import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import * as React from "react";
import type { ComponentProps } from "react";

const brands = [
  "Anker",
  "UGREEN",
  "DJI",
  "JBL",
  "SONY",
  "BASEUS",
  "AppleCare / GNEXT",
  "Samsung",
  "WIWU",
  "MI",
  "Haylou",
  "Hollyland",
  "ASPOR",
];

const categories = [
  {
    title: "Audio",
    href: "/category/audio",
    description: "Headphones, Earbuds, Speakers, and more.",
  },
  {
    title: "Power & Charging",
    href: "/category/power",
    description: "Power banks, Chargers, Cables, and Adapters.",
  },
  {
    title: "Photography",
    href: "/category/photography",
    description: "Gimbals, Tripods, and Camera accessories.",
  },
  {
    title: "Cases & Protection",
    href: "/category/protection",
    description: "Phone cases, Screen protectors, and Sleeves.",
  },
  {
    title: "Smart Wearables",
    href: "/category/wearables",
    description: "Smartwatches, Fitness trackers, and Bands.",
  },
  {
    title: "Phones",
    href: "/category/phones",
    description: "Latest smartphones from top brands.",
  },
];

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
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
              <ListItem key={brand} title={brand} href={`/brand/${brand.toLowerCase().replace(/ /g, "-")}`}>
                Explore {brand} products
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
      
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <a href="/contact">Contact</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
