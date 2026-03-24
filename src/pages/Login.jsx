import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login(params) {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  /*  const [username, setUsername] = useState("")
    const [password, setPassword] = useState("") */
  /* 
    {
        username:"",
        password:"Manuel"  
    }
*/
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const success = login(form.username, form.password);
    if (success) {
      alert("Inicio de sesión correcto");
      navigate("/profile");
    } else {
      alert("Credenciales incorrectas");
    }
  }

  return (
    <>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </>
  );
}

export default Login;
