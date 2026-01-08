import { Footer } from "@/components/shared/footer"
import Navbar from "@/components/shared/navbar"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="pt-16 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
