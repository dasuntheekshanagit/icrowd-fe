import { MainLayout } from "@/layout/main-layout"
import About from "@/pages/about/about.tsx"
import AdminBrands from "@/pages/admin/brands/admin-brands"
import AdminCategories from "@/pages/admin/categories/admin-categories"
import AdminProducts from "@/pages/admin/products/admin-products"
import Home from "@/pages/home/home.tsx"
import ProductDetails from "@/pages/product-details/product-details.tsx"
import Products from "@/pages/products/products"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/category/:category",
        element: <Products />,
      },
      {
        path: "/brand/:brand",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      // Admin Routes (Unprotected for now)
      {
        path: "/admin/products",
        element: <AdminProducts />,
      },
      {
        path: "/admin/categories",
        element: <AdminCategories />,
      },
      {
        path: "/admin/brands",
        element: <AdminBrands />,
      },
    ],
  },
])
