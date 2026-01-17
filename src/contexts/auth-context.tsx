import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "@/config/firebase";
import { onAuthStateChanged, signInWithPopup, signOut, type User } from "firebase/auth";
import { apiService } from "@/services/api/api-service";

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser && currentUser.email) {
        // Only check admin status if we are on an admin route or if needed
        // For now, we check it on every auth change to keep state consistent
        // but the protection logic is handled in ProtectedRoute
        try {
            const adminStatus = await apiService.checkIsAdmin(currentUser.email);
            setIsAdmin(adminStatus);
        } catch (e) {
            console.error("Failed to check admin status", e);
            setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setIsAdmin(false);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
