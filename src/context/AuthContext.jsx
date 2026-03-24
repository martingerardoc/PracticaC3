import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(username, password) {
    /* Verificación en el Backend */
    let credentials = {
      username: "admin",
      password: "Hola1234",
    };
    /* Fin de Verificación */
    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      setUser({ username: "admin" });
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
