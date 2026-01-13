import { MainLayout } from "@/layout/main-layout"
import About from "@/pages/about"
import Home from "@/pages/home"
import ProductDetails from "@/pages/product-details"
import Products from "@/pages/products/products"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category/:category" element={<Products />} />
          <Route path="/brand/:brand" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
