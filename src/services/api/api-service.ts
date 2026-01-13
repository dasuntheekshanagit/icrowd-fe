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
        price: "$79.99",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2788&auto=format&fit=crop",
        category: "Audio"
    },
    {
        id: 2,
        name: "DJI Mini 3 Pro",
        price: "$759.00",
        image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2940&auto=format&fit=crop",
        category: "Photography"
    },
    {
        id: 3,
        name: "Samsung Galaxy S24 Ultra",
        price: "$1299.99",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2941&auto=format&fit=crop",
        category: "Phones"
    },
    {
        id: 4,
        name: "JBL Flip 6",
        price: "$129.95",
        image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=2864&auto=format&fit=crop",
        category: "Audio"
    },
    {
        id: 5,
        name: "UGREEN Nexode 100W",
        price: "$74.99",
        image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=3072&auto=format&fit=crop",
        category: "Power & Charging"
    },
    {
        id: 6,
        name: "Apple Watch Series 9",
        price: "$399.00",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2864&auto=format&fit=crop",
        category: "Smart Wearables"
    },
    {
        id: 7,
        name: "Sony WH-1000XM5",
        price: "$348.00",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2788&auto=format&fit=crop",
        category: "Audio"
    },
    {
        id: 8,
        name: "Baseus Power Bank 65W",
        price: "$59.99",
        image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=3072&auto=format&fit=crop",
        category: "Power & Charging"
    },
    {
        id: 9,
        name: "iPhone 15 Pro Max",
        price: "$1199.00",
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=2940&auto=format&fit=crop",
        category: "Phones"
    },
    {
        id: 10,
        name: "GoPro Hero 12",
        price: "$399.99",
        image: "https://images.unsplash.com/photo-1564466021183-a4268fce765e?q=80&w=2787&auto=format&fit=crop",
        category: "Photography"
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
        return products;
    }
}