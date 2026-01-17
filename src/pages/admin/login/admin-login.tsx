import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { Navigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

export default function AdminLogin() {
  const { user, isAdmin, loading, login } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (user && isAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Admin Login</h1>
        <div className="space-y-4">
          <p className="text-center text-gray-600">
            Please sign in with your Google account to access the admin dashboard.
          </p>
          <Button onClick={login} className="w-full">
            Sign in with Google
          </Button>
          {user && !isAdmin && (
            <p className="text-center text-sm text-red-500">
              Access denied. Your account is not authorized as an admin.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
