import React, { useState } from 'react';
import "../styles/Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/login", { 
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (data.success) {
                setMensaje("Bienvenid@");
                localStorage.setItem("token", data.token);
            } else { 
                setMensaje("Error al ingresar: " + data.message);
                }
            } catch (error){
                console.error(error);
                setMensaje("Error en el servidor");
            }
    };
            
  return (
    <div className='loginContainer'>
      <form onSubmit={handleSubmit} className='loginForm'>
        <h2 className='loginTitle'>Iniciar Sesion</h2><br/>
        <input className='loginInput'
        type="email" 
        placeholder='Correo' 
        value={email}
        onChange={(e) => setEmail(e.target.value)} required/>
        <br />
        <input className='loginInput'
        type="password" 
        placeholder='Contraseña' 
        value={password}
        onChange={(e) => setPassword(e.target.value)} required/>
        <br />
        <button type="submit" className='loginButton'>Ingresar</button>
        
        {mensaje && <p className='loginMessage'>{mensaje}</p>}
      </form>
    </div>
  )
}

export default Login
