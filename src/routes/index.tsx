import {MainLayout} from "@/layout/main-layout"
import {AdminLayout} from "@/layout/admin-layout"
import About from "@/pages/about/about"
import AdminBrands from "@/pages/admin/brands/admin-brands"
import AdminCategories from "@/pages/admin/categories/admin-categories"
import AdminProducts from "@/pages/admin/products/admin-products"
import AdminDashboard from "@/pages/admin/dashboard/admin-dashboard"
import AdminLogin from "@/pages/admin/login/admin-login"
import AdminSlides from "@/pages/admin/slides/admin-slides"
import AdminBanner from "@/pages/admin/banner/admin-banner"
import Home from "@/pages/home/home.tsx"
import ProductDetails from "@/pages/product-details/product-details"
import Products from "@/pages/products/products"
import {createBrowserRouter} from "react-router-dom"
import { ProtectedRoute } from "@/components/shared/protected-route"

export const router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/products",
                element: <Products/>,
            },
            {
                path: "/category/:category",
                element: <Products/>,
            },
            {
                path: "/brand/:brand",
                element: <Products/>,
            },
            {
                path: "/product/:id",
                element: <ProductDetails/>,
            },
        ],
    },
    {
        path: "/admin/login",
        element: <AdminLogin />,
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <AdminLayout />,
                children: [
                    {
                        path: "/admin/dashboard",
                        element: <AdminDashboard />,
                    },
                    {
                        path: "/admin/products",
                        element: <AdminProducts/>,
                    },
                    {
                        path: "/admin/categories",
                        element: <AdminCategories/>,
                    },
                    {
                        path: "/admin/brands",
                        element: <AdminBrands/>,
                    },
                    {
                        path: "/admin/slides",
                        element: <AdminSlides/>,
                    },
                    {
                        path: "/admin/banner",
                        element: <AdminBanner/>,
                    },
                ]
            }
        ]
    }
])
