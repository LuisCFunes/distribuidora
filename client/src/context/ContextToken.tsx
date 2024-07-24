import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface AuthContextValue {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => {
    const token = localStorage.getItem("token");
    const expirationTime = localStorage.getItem("tokenExpiration");

    if (token && expirationTime) {
      if (Date.now() < Number(expirationTime)) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return token;
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
      }
    }
    return null;
  });

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const expirationTime = Date.now() + 60 * 60 * 1000; // 1 hora en milisegundos
      localStorage.setItem("token", token);
      localStorage.setItem("tokenExpiration", expirationTime.toString());
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;