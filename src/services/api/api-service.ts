import { db } from "@/config/firebase";
import type { Brand, Category, Product, Slide } from "@/types";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, limit } from "firebase/firestore";

const BRANDS_COLLECTION = "brands";
const CATEGORIES_COLLECTION = "categories";
const PRODUCTS_COLLECTION = "products";
// const SLIDES_COLLECTION = "slides"; // Kept for future use

export const apiService = {
    // Brands
    getBrandList: async (): Promise<Brand[]> => {
        const querySnapshot = await getDocs(collection(db, BRANDS_COLLECTION));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Brand));
    },
    addBrand: async (brand: Omit<Brand, 'id'>): Promise<Brand> => {
        const docRef = await addDoc(collection(db, BRANDS_COLLECTION), brand);
        return { id: docRef.id, ...brand };
    },
    updateBrand: async (id: string, brand: Partial<Brand>): Promise<Brand> => {
        const brandRef = doc(db, BRANDS_COLLECTION, id);
        await updateDoc(brandRef, brand);
        return { id, ...brand } as Brand;
    },
    deleteBrand: async (id: string): Promise<void> => {
        await deleteDoc(doc(db, BRANDS_COLLECTION, id));
    },

    // Categories
    getCategoryList: async (): Promise<Category[]> => {
        const querySnapshot = await getDocs(collection(db, CATEGORIES_COLLECTION));
        return querySnapshot.docs.map(doc => {
            const data = doc.data();
            // Calculate href if not present, similar to brand logic
            const href = data.href || `/category/${data.title.toLowerCase().replace(/ /g, "-").replace(/\//g, "")}`;
            return { id: doc.id, ...data, href } as Category;
        });
    },
    addCategory: async (category: Omit<Category, 'id'>): Promise<Category> => {
        const docRef = await addDoc(collection(db, CATEGORIES_COLLECTION), category);
        return { id: docRef.id, ...category };
    },
    updateCategory: async (id: string, category: Partial<Category>): Promise<Category> => {
        const categoryRef = doc(db, CATEGORIES_COLLECTION, id);
        await updateDoc(categoryRef, category);
        return { id, ...category } as Category;
    },
    deleteCategory: async (id: string): Promise<void> => {
        await deleteDoc(doc(db, CATEGORIES_COLLECTION, id));
    },

    // Products
    getAllProducts: async (): Promise<Product[]> => {
        const querySnapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
    },
    addProduct: async (product: Omit<Product, 'id'>): Promise<Product> => {
        const docRef = await addDoc(collection(db, PRODUCTS_COLLECTION), product);
        return { id: docRef.id, ...product };
    },
    updateProduct: async (id: string, product: Partial<Product>): Promise<Product> => {
        const productRef = doc(db, PRODUCTS_COLLECTION, id);
        await updateDoc(productRef, product);
        return { id, ...product } as Product;
    },
    deleteProduct: async (id: string): Promise<void> => {
        await deleteDoc(doc(db, PRODUCTS_COLLECTION, id));
    },
    getFeaturedProducts: async (): Promise<Product[]> => {
        const q = query(collection(db, PRODUCTS_COLLECTION), where("featured", "==", true));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
    },
    getMoreProducts: async (): Promise<Product[]> => {
        const q = query(collection(db, PRODUCTS_COLLECTION), where("featured", "==", false), limit(6));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
    },

    // Slides (Hero)
    getHeroSlides: async (): Promise<Slide[]> => {
        return [
            {
                id: 1,
                title: "Massive Savings!",
                description: "Get up to 50% OFF on premium accessories. Limited time offer!",
                image: "/hero/1.png",
            },
            {
                id: 2,
                title: "Peace of Mind Guaranteed",
                description: "Enjoy 2 Years Warranty on selected products. Shop with confidence.",
                image: "/hero/2.png",
            },
            {
                id: 3,
                title: "New Arrivals Are Here",
                description: "Discover the latest tech gadgets and upgrade your lifestyle today.",
                image: "/hero/3.png",
            },
            {
                id: 4,
                title: "Exclusive Deals",
                description: "Unbeatable prices on top brands. Don't miss out!",
                image: "/hero/4.png",
            },
        ];
    }
}
