import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Dashboard() {
    const { user, theme, toggleTheme, setUser, logout } = useContext(UserContext);


    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    // estilos reutilizables
    const cardStyle =
        theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-white text-black";

    const inputStyle =
        theme === "dark"
            ? "bg-gray-700 text-white border-gray-600"
            : "bg-white text-black";

    return (
        <div
            className={`${theme === "dark"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-black"
                } min-h-screen pb-20`}
        >
            {/* HEADER */}

            <div className="p-4 flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold">
                        Hola de nuevo, {user.name}
                    </h1>
                    <p className="text-sm opacity-70">
                        Manage your account settings and preferences here.
                    </p>
                </div>

                <button
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Cerrar sesión
                </button>
            </div>

           

            {/* CONTENIDO */}
            <div className="p-4 grid gap-4 md:grid-cols-2">

                {/* PROFILE SETTINGS */}
                <div className={`p-4 rounded-xl shadow ${cardStyle}`}>
                    <div className="flex items-center gap-2 mb-4">
                        <span>👤</span>
                        <h2 className="font-semibold">Profile Settings</h2>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <img
                            src={user.avatar}
                            className="w-12 h-12 rounded-full"
                            alt="avatar"
                        />
                        <span>{user.name}</span>
                    </div>

                    <input
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className={`w-full mb-2 p-2 border rounded ${inputStyle}`}
                        placeholder="Full Name"
                    />

                    <input
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className={`w-full mb-3 p-2 border rounded ${inputStyle}`}
                        placeholder="Email Address"
                    />

                    <button className="w-full bg-blue-600 text-white p-2 rounded">
                        Save Changes
                    </button>
                </div>

                {/* APP PREFERENCES */}
                <div className={`p-4 rounded-xl shadow ${cardStyle}`}>
                    <div className="flex items-center gap-2 mb-4">
                        <span>⚙️</span>
                        <h2 className="font-semibold">App Preferences</h2>
                    </div>

                    <p className="text-sm mb-2">Appearance</p>

                    <div className="flex gap-2">
                        <button
                            onClick={() => toggleTheme("light")}
                            className={`px-4 py-2 rounded ${theme === "light"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-300 text-black"
                                }`}
                        >
                            Light
                        </button>

                        <button
                            onClick={() => toggleTheme("dark")}
                            className={`px-4 py-2 rounded ${theme === "dark"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-300 text-black"
                                }`}
                        >
                            Dark
                        </button>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="text-center text-sm py-4 opacity-70">
                © 2026 SaaS Dashboard By Martin
            </div>

            {/* NAVBAR MOBILE */}
            <div className="fixed bottom-0 left-0 w-full bg-white shadow md:hidden flex justify-around p-3">
                <span>🏠</span>
                <span>📊</span>
                <span>⚙️</span>
                <span>👤</span>
            </div>
        </div>
    );
}

export default Dashboard;