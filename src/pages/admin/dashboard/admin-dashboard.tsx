// import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/auth-context";
import { Package, ShoppingBag, Tags, Image, Megaphone } from "lucide-react";
import { Link, Navigate } from "react-router-dom";

export default function AdminDashboard() {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user || !isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  const menuItems = [
    {
      title: "Products",
      icon: <Package className="h-8 w-8 mb-2" />,
      href: "/admin/products",
      description: "Manage your product catalog",
    },
    {
      title: "Categories",
      icon: <Tags className="h-8 w-8 mb-2" />,
      href: "/admin/categories",
      description: "Organize products into categories",
    },
    {
      title: "Brands",
      icon: <ShoppingBag className="h-8 w-8 mb-2" />,
      href: "/admin/brands",
      description: "Manage brand partners",
    },
    {
      title: "Hero Slides",
      icon: <Image className="h-8 w-8 mb-2" />,
      href: "/admin/slides",
      description: "Manage homepage hero carousel",
    },
    {
      title: "Promo Banner",
      icon: <Megaphone className="h-8 w-8 mb-2" />,
      href: "/admin/banner",
      description: "Manage promotional popup banner",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/*<header className="bg-white shadow">*/}
      {/*  <div className="container mx-auto px-4 py-6 flex justify-between items-center">*/}
      {/*    <div className="flex items-center gap-2">*/}
      {/*      <LayoutDashboard className="h-6 w-6" />*/}
      {/*      <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>*/}
      {/*    </div>*/}
      {/*    <div className="flex items-center gap-4">*/}
      {/*      <span className="text-sm text-gray-600">Welcome, {user.displayName}</span>*/}
      {/*      <Button variant="outline" size="sm" onClick={logout}>*/}
      {/*        <LogOut className="mr-2 h-4 w-4" /> Logout*/}
      {/*      </Button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</header>*/}

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <Link key={item.title} to={item.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center text-center">
                    {item.icon}
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-500">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
