import { MainLayout } from "@/layout/main-layout"
import About from "@/pages/about"
import Home from "@/pages/home"
import ProductDetails from "@/pages/product-details"
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
    ],
  },
])
