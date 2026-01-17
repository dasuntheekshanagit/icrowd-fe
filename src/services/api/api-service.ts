import { db } from "@/config/firebase";
import type { Brand, Category, Product, Slide } from "@/types";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, limit, getDoc, setDoc } from "firebase/firestore";

const BRANDS_COLLECTION = "brands";
const CATEGORIES_COLLECTION = "categories";
const PRODUCTS_COLLECTION = "products";
const SLIDES_COLLECTION = "slides";
const ADMINS_COLLECTION = "admins";
const SETTINGS_COLLECTION = "settings";
const BANNER_DOC_ID = "promotional_banner";

export const apiService = {
    // Admins
    checkIsAdmin: async (email: string): Promise<boolean> => {
        const q = query(collection(db, ADMINS_COLLECTION), where("email", "==", email));
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
    },

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
        const querySnapshot = await getDocs(collection(db, SLIDES_COLLECTION));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Slide));
    },
    addHeroSlide: async (slide: Omit<Slide, 'id'>): Promise<Slide> => {
        const docRef = await addDoc(collection(db, SLIDES_COLLECTION), slide);
        return { id: docRef.id, ...slide };
    },
    updateHeroSlide: async (id: string, slide: Partial<Slide>): Promise<Slide> => {
        const slideRef = doc(db, SLIDES_COLLECTION, id);
        await updateDoc(slideRef, slide);
        return { id, ...slide } as Slide;
    },
    deleteHeroSlide: async (id: string): Promise<void> => {
        await deleteDoc(doc(db, SLIDES_COLLECTION, id));
    },

    // Promotional Banner
    getPromotionalBanner: async (): Promise<any> => {
        const docRef = doc(db, SETTINGS_COLLECTION, BANNER_DOC_ID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        }
        return null;
    },
    updatePromotionalBanner: async (bannerData: any): Promise<void> => {
        const docRef = doc(db, SETTINGS_COLLECTION, BANNER_DOC_ID);
        // Add a timestamp to force re-render/re-fetch on client if needed, 
        // or simply to track when it was last updated.
        await setDoc(docRef, { ...bannerData, updatedAt: Date.now() }, { merge: true });
    }
}
