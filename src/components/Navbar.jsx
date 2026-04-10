import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { user, logout, toggleTheme, setUser } = useContext(UserContext);

  function changeName(e) {
    setUser({ ...user, name: e.target.value });
  }

  return (
    <div className="p-4 bg-white shadow">
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={user.avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <span>{user.name}</span>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Cerrar sesión
        </button>
      </div>

     
      <div className="mt-4 flex gap-2">
        <button
          onClick={toggleTheme}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Cambiar tema
        </button>

        <input
          type="text"
          value={user.name}
          onChange={changeName}
          className="border p-2 rounded"
        />
      </div>
    </div>
  );
}

export default Navbar;