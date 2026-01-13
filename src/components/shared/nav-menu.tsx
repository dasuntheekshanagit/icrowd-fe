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
    title: "Earbuds",
    href: "/category/earbuds",
    description: "Wireless and wired earbuds for immersive audio.",
  },
  {
    title: "Powerbanks",
    href: "/category/powerbanks",
    description: "Portable power for your devices on the go.",
  },
  {
    title: "Headphones",
    href: "/category/headphones",
    description: "Over-ear and on-ear headphones for superior sound.",
  },
  {
    title: "Charging Adapters & Cables",
    href: "/category/charging",
    description: "Fast chargers and durable cables for all devices.",
  },
  {
    title: "Smart Watches",
    href: "/category/smart-watches",
    description: "Wearable technology to track your health and notifications.",
  },
  {
    title: "Bluetooth Speakers",
    href: "/category/bluetooth-speakers",
    description: "Portable speakers for music anywhere.",
  },
  {
    title: "Mobile Gimbals",
    href: "/category/mobile-gimbals",
    description: "Stabilizers for smooth mobile videography.",
  },
  {
    title: "Wireless Mics",
    href: "/category/wireless-mics",
    description: "Microphones for clear audio recording.",
  },
  {
    title: "Drones",
    href: "/category/drones",
    description: "Capture aerial footage with high-quality drones.",
  },
  {
    title: "HUBS",
    href: "/category/hubs",
    description: "Expand your connectivity with USB hubs.",
  },
  {
    title: "Phone Cases",
    href: "/category/phone-cases",
    description: "Protective and stylish cases for your phone.",
  },
  {
    title: "Studio Items",
    href: "/category/studio-items",
    description: "Equipment for professional studio setups.",
  },
  {
    title: "Pouches",
    href: "/category/pouches",
    description: "Carrying pouches for your gadgets and accessories.",
  },
  {
    title: "iPad Pencil",
    href: "/category/ipad-pencil",
    description: "Stylus pens for iPad creativity and productivity.",
  },
  {
    title: "iPad Covers",
    href: "/category/ipad-covers",
    description: "Protective covers and cases for iPads.",
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
