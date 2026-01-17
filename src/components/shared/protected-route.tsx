import { useAuth } from "@/contexts/auth-context";
import { Navigate, Outlet } from "react-router-dom";
import { Loader2 } from "lucide-react";

export function ProtectedRoute() {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}
