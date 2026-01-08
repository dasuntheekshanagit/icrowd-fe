import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3 overflow-y-auto">
        <Logo />
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
                      key={brand}
                      href={`/brand/${brand.toLowerCase().replace(/ /g, "-")}`}
                      className="text-sm text-muted-foreground hover:text-foreground py-1"
                    >
                      {brand}
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
          <a href="/contact" className="text-sm font-medium hover:underline">
            Contact
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};
