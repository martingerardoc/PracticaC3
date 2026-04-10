import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const { login } = useContext(UserContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Completa los campos");
      return;
    }

    const success = login(form.email, form.password);

    if (!success) {
      alert("Error al iniciar sesión");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Iniciar sesión
        </h2>
        <p>Correo: martin@example.com</p>
        <p>Contraseña: 123456</p>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
