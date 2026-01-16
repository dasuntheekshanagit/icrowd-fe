const brands = [
    {name: "Anker", logo: "/product_logo/Anker.svg"},
    {name: "UGREEN", logo: "/product_logo/Ugreen.svg"},
    {name: "DJI", logo: "/product_logo/DJI.svg"},
    {name: "JBL", logo: "/product_logo/JBL.svg"},
    {name: "SONY", logo: "/product_logo/Sony.svg"},
    {name: "BASEUS", logo: "/product_logo/Baseus.svg"},
    {name: "AppleCare / GNEXT", logo: "/product_logo/AppleCare.svg"},
    {name: "Samsung", logo: "/product_logo/Samsung.svg"},
    {name: "WIWU", logo: "/product_logo/WIWU.svg"},
    {name: "Xiaomi", logo: "/product_logo/Xiaomi.svg"},
    {name: "Haylou", logo: "/product_logo/Haylou.svg"},
    {name: "Hollyland", logo: "/product_logo/Hollyland.svg"},
    {name: "ASPOR", logo: "/product_logo/Aspor.svg"},
];

const categories = [
    {
        title: "Earbuds",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2832&auto=format&fit=crop",
        description: "Wireless and wired earbuds for immersive audio.",
    },
    {
        title: "Powerbanks",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=2940&auto=format&fit=crop",
        description: "Portable power for your devices on the go.",
    },
    {
        title: "Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2940&auto=format&fit=crop",
        description: "Over-ear and on-ear headphones for superior sound.",
    },
    {
        title: "Charging Adapters & Cables",
        image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=3072&auto=format&fit=crop",
        description: "Fast chargers and durable cables for all devices.",
    },
    {
        title: "Smart Watches",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2727&auto=format&fit=crop",
        description: "Wearable technology to track your health and notifications.",
    },
    {
        title: "Bluetooth Speakers",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2836&auto=format&fit=crop",
        description: "Portable speakers for music anywhere.",
    },
    {
        title: "Mobile Gimbals",
        image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2940&auto=format&fit=crop",
        description: "Stabilizers for smooth mobile videography.",
    },
    {
        title: "Wireless Mics",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2832&auto=format&fit=crop",
        description: "Microphones for clear audio recording.",
    },
    {
        title: "Drones",
        image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2940&auto=format&fit=crop",
        description: "Capture aerial footage with high-quality drones.",
    },
    {
        title: "HUBS",
        image: "https://images.unsplash.com/photo-1618418381440-2729b3e1d980?q=80&w=2940&auto=format&fit=crop",
        description: "Expand your connectivity with USB hubs.",
    },
    {
        title: "Phone Cases",
        image: "https://images.unsplash.com/photo-1603351154351-5cf99bc5f16d?q=80&w=2940&auto=format&fit=crop",
        description: "Protective and stylish cases for your phone.",
    },
    {
        title: "Studio Items",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2864&auto=format&fit=crop",
        description: "Equipment for professional studio setups.",
    },
    {
        title: "Pouches",
        image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=2804&auto=format&fit=crop",
        description: "Carrying pouches for your gadgets and accessories.",
    },
    {
        title: "iPad Pencil",
        image: "https://images.unsplash.com/photo-1544207764-9733ee63d8c4?q=80&w=2940&auto=format&fit=crop",
        description: "Stylus pens for iPad creativity and productivity.",
    },
    {
        title: "iPad Covers",
        image: "https://images.unsplash.com/photo-1544207764-9733ee63d8c4?q=80&w=2940&auto=format&fit=crop",
        description: "Protective covers and cases for iPads.",
    },
];

const slides = [
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

const products = [
    {
        id: 1,
        name: "Anker Soundcore Life Q30",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2788&auto=format&fit=crop",
        category: "Audio",
        brand: "Anker",
        featured: true,
        discountedPrice: 59.99,
        discountVariant: "sale",
        offerEndsAt: new Date(Date.now() + 86400000 * 2).toISOString(), // 2 days from now
        stock: 15
    },
    {
        id: 2,
        name: "DJI Mini 3 Pro",
        price: 759.00,
        image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2940&auto=format&fit=crop",
        category: "Photography",
        brand: "DJI",
        featured: true,
        stock: 3
    },
    {
        id: 3,
        name: "Samsung Galaxy S24 Ultra",
        price: 1299.99,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2941&auto=format&fit=crop",
        category: "Phones",
        brand: "Samsung",
        featured: true,
        discountVariant: "new"
    },
    {
        id: 4,
        name: "JBL Flip 6",
        price: 129.95,
        image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=2864&auto=format&fit=crop",
        category: "Audio",
        brand: "JBL",
        featured: true,
        discountedPrice: 99.95,
        discountVariant: "hot"
    },
    {
        id: 5,
        name: "UGREEN Nexode 100W",
        price: 74.99,
        image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=3072&auto=format&fit=crop",
        category: "Power & Charging",
        brand: "UGREEN",
        featured: true
    },
    {
        id: 6,
        name: "Apple Watch Series 9",
        price: 399.00,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2864&auto=format&fit=crop",
        category: "Smart Wearables",
        brand: "AppleCare / GNEXT",
        featured: true,
        stock: 2
    },
    {
        id: 7,
        name: "Sony WH-1000XM5",
        price: 348.00,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2788&auto=format&fit=crop",
        category: "Audio",
        brand: "SONY",
        featured: true
    },
    {
        id: 8,
        name: "Baseus Power Bank 65W",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=3072&auto=format&fit=crop",
        category: "Power & Charging",
        brand: "BASEUS",
        featured: true,
        discountedPrice: 49.99,
        discountVariant: "sale"
    },
    {
        id: 9,
        name: "iPhone 15 Pro Max",
        price: 1199.00,
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=2940&auto=format&fit=crop",
        category: "Phones",
        brand: "AppleCare / GNEXT",
        featured: true
    },
    {
        id: 10,
        name: "GoPro Hero 12",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1564466021183-a4268fce765e?q=80&w=2787&auto=format&fit=crop",
        category: "Photography",
        brand: "GoPro",
        featured: true
    },
    {
        id: 11,
        name: "Hollyland Lark M1",
        price: 149.00,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2832&auto=format&fit=crop",
        category: "Audio",
        brand: "Hollyland",
        featured: false,
        discountVariant: "new"
    },
    {
        id: 12,
        name: "Haylou Solar Plus",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2727&auto=format&fit=crop",
        category: "Smart Wearables",
        brand: "Haylou",
        featured: false
    },
    {
        id: 13,
        name: "Aspor A323 Power Bank",
        price: 25.00,
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=2940&auto=format&fit=crop",
        category: "Power & Charging",
        brand: "ASPOR",
        featured: false,
        stock: 4
    },
    {
        id: 14,
        name: "Samsung Galaxy Buds2 Pro",
        price: 229.99,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2941&auto=format&fit=crop",
        category: "Audio",
        brand: "Samsung",
        featured: false,
        discountedPrice: 199.99,
        discountVariant: "sale"
    },
    {
        id: 15,
        name: "Apple AirTag",
        price: 29.00,
        image: "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=2940&auto=format&fit=crop",
        category: "Accessories",
        brand: "AppleCare / GNEXT",
        featured: false
    }
];

export const apiService = {
    getBrandList: async () => {
        return brands;
    },
    getCategoryList: async () => {
        return categories;
    },
    getHeroSlides: async () => {
        return slides;
    },
    getFeaturedProducts: async () => {
        return products.filter(p => p.featured);
    },
    getMoreProducts: async () => {
        return products.filter(p => !p.featured).slice(0, 6);
    },
    getAllProducts: async () => {
        return products;
    }
}
