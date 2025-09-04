import React, { useState } from "react";
import "../estilos/estilos.css";

function Home() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el login
        alert(`Usuario: ${user}\nContraseña: ${pass}`);
    };

    return (
        <div className="login-bg">
            <div className="login-card">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        required
                    />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Home;