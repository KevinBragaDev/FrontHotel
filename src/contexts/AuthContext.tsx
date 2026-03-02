import { API_URL } from "@/constants/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type AuthContextProps = {
  token: string | null;
  isLoading: boolean;
  signIn: (email: string, senha: string) => Promise<void>;
  signUp: (
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    cpf: string
  ) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 🔹 Carregar token ao abrir o app
  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem("token");
        if (stored) setToken(stored);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  // ===============================
  // 🔹 LOGIN
  // ===============================
  async function signIn(email: string, senha: string) {
    try {
      const res = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const text = await res.text();
      console.log("Resposta bruta login:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = text; // token direto como string
      }

      if (!res.ok) {
        throw new Error(typeof data === "object" ? data?.erro : "Credenciais inválidas");
      }

      const tokenAPI: string = typeof data === "string" ? data : data.token;

      await AsyncStorage.setItem("token", tokenAPI);
      setToken(tokenAPI);
    } catch (error) {
      console.error("Erro no login:", error);
      throw error;
    }
  }

  // ===============================
  // 🔹 CADASTRO
  // ===============================
  async function signUp(
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    cpf: string
  ) {
    try {
      const res = await fetch(`${API_URL}/api/login/cadastro`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha, telefone, cpf }),
      });

      const text = await res.text();
      console.log("Resposta bruta cadastro:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = text; // token direto como string
      }

      if (!res.ok) {
        throw new Error(typeof data === "object" ? data?.erro : "Erro ao cadastrar usuário");
      }

      const tokenAPI: string = typeof data === "string" ? data : data.token;

      await AsyncStorage.setItem("token", tokenAPI);
      setToken(tokenAPI);
    } catch (error) {
      console.error("Erro no cadastro:", error);
      throw error;
    }
  }

  // ===============================
  // 🔹 LOGOUT
  // ===============================
  async function signOut() {
    await AsyncStorage.removeItem("token");
    setToken(null);
  }

  const value = useMemo(
    () => ({
      token,
      isLoading,
      signIn,
      signUp,
      signOut,
    }),
    [token, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth() deve ser usado dentro de AuthProvider");
  return ctx;
};

export default AuthProvider;