import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {

    //USER
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    // THEME
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme : "light";
    });

    // LOGIN
    function login(email, password) {
        if (email === "martin@example.com" && password === "123456") {
            const userData = {
                name: "Martin",
                email,
                role: "admin",
                avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHqVAFww8VYWA/profile-displayphoto-shrink_100_100/B4DZXzTurLHkAk-/0/1743543792883?e=1777507200&v=beta&t=i-WD-BvKSVjPp_duF4cMo1EU6p3YE7nkhRvMlXib9Mc",
            };

            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData)); // guardar

            return true;
        }
        return false;
    }

    // LOGOUT
    function logout() {
        setUser(null);
        localStorage.removeItem("user"); // borrar usuario
        // resetear theme
        setTheme("light");
        localStorage.setItem("theme", "light");
    }

    //  THEME
    function toggleTheme(value) {
        setTheme(value);
        localStorage.setItem("theme", value); // guardar theme
    }

    return (
        <UserContext.Provider
            value={{ user, setUser, login, logout, theme, toggleTheme }}
        >
            {children}
        </UserContext.Provider>
    );
}                                                                                         