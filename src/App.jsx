import { useContext } from "react";
import { UserProvider, UserContext } from "./context/UserContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function AppContent() {
  const { user, theme } = useContext(UserContext);

  //light si no hay usuario
  const currentTheme = user ? theme : "light";

  return (
    <div
      className={`${
        currentTheme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      } min-h-screen`}
    >
      {user ? <Dashboard /> : <Login />}
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
