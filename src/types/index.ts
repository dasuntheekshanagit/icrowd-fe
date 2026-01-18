export interface Brand {
  id?: string;
  name: string;
  logo: string;
}

export interface Category {
  id?: string;
  title: string;
  image: string;
  href: string;
  description?: string;
}

export interface Product {
  id?: string | number;
  name: string;
  price: number;
  image: string; // Main image
  images?: string[]; // Additional images
  category: string;
  brand: string;
  description?: string;
  features?: string[];
  rating?: number;
  reviews?: number;
  stock?: number;
  featured?: boolean;
  discountedPrice?: number;
  discountVariant?: "sale" | "new" | "hot";
  offerEndsAt?: string;
}

export interface Slide {
  id?: string | number;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
}

// TODO:
export interface Banner{

}