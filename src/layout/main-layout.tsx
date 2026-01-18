import {Footer} from "@/components/shared/footer/footer"
import {Outlet} from "react-router-dom"
import {Navbar} from "@/components/shared/nav-bar/navbar";

export const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-1 pt-16 md:pt-20">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
