import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { LayoutDashboard, LogOut, Home } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const AdminLayout = () => {
    const { user, logout } = useAuth();
    const location = useLocation();
    const isDashboard = location.pathname === "/admin/dashboard";

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-white shadow sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link to="/admin/dashboard" className="flex items-center gap-2 text-gray-900 hover:text-gray-700">
                            <LayoutDashboard className="h-6 w-6" />
                            <h1 className="text-xl font-bold">Admin Dashboard</h1>
                        </Link>
                        {!isDashboard && (
                            <div className="hidden md:flex items-center gap-4 ml-8 text-sm font-medium text-gray-500">
                                <Link to="/admin/products" className="hover:text-gray-900">Products</Link>
                                <Link to="/admin/categories" className="hover:text-gray-900">Categories</Link>
                                <Link to="/admin/brands" className="hover:text-gray-900">Brands</Link>
                                <Link to="/admin/slides" className="hover:text-gray-900">Slides</Link>
                                <Link to="/admin/banner" className="hover:text-gray-900">Banner</Link>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/">
                            <Button variant="ghost" size="sm">
                                <Home className="mr-2 h-4 w-4" /> View Site
                            </Button>
                        </Link>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600 hidden sm:inline-block">
                                {user?.displayName}
                            </span>
                            <Button variant="outline" size="sm" onClick={logout}>
                                <LogOut className="mr-2 h-4 w-4" /> Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex-1 container mx-auto px-4 py-8">
                <Outlet />
            </main>
        </div>
    );
};
