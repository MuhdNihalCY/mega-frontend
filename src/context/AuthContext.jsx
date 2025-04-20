import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";
import { setApiAccessToken } from "../api/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Check if we have a refresh token before attempting refresh
        const refreshToken = localStorage.getItem('refreshToken') || 
                            document.cookie.includes('refreshToken=');
        
        if (!refreshToken) {
          setLoading(false);
          return;
        }

        const res = await api.post("/auth/refresh-token");
        const { accessToken: newAccessToken, user } = res.data;
        setApiAccessToken(newAccessToken);
        setAccessToken(newAccessToken);
        setUser(user);
      } catch (err) {
        console.error("Error refreshing token:", err);
        setUser(null);
        setAccessToken(null);
        setApiAccessToken(null);
        // Optionally clear stored tokens here if refresh failed
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (userName, password) => {
    const res = await api.post("/auth/login", { userName, password });
    const { accessToken: newAccessToken, user, refreshToken } = res.data;
    
    // Store refresh token securely (httpOnly cookie is better than localStorage)
    if (refreshToken) {
      localStorage.setItem('refreshToken', refreshToken);
      // Or set cookie if using cookies
    }
    
    setApiAccessToken(newAccessToken);
    setAccessToken(newAccessToken);
    setUser(user);
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } finally {
      // Clear all auth-related storage
      localStorage.removeItem('refreshToken');
      // Clear cookie if using cookies
      
      setApiAccessToken(null);
      setAccessToken(null);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}