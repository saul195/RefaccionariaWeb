import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../Styles/Login.css';

function Login() {
    const navigate = useNavigate(); // Para redirigir al usuario si entra con éxito
    const [error, setError] = useState(""); // Para manejar mensajes de error dinámicos

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Limpiamos errores previos

        // 1. Capturamos los datos del formulario
        const formData = new FormData(e.target);
        const data = {
            email: formData.get('username'), // Mapeamos 'username' al campo 'email' que espera el PHP
            password: formData.get('password')
        };

        try {
            // 2. Petición al Backend en XAMPP
            const response = await fetch('http://localhost/BackendPHP/login.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                alert(`¡Bienvenido, ${result.usuario.nombre}! 🔧`);
                
                // 3. Guardamos la sesión (opcional pero recomendado)
                localStorage.setItem('session_user', JSON.stringify(result.usuario));

                // 4. Redirigimos (Cámbialo a tu ruta de inicio/dashboard)
                navigate('/Orders'); 
            } else {
                // Si el PHP dice que las credenciales no existen o la clave está mal
                setError(result.message);
            }
        } catch (err) {
            console.error("Error de conexión:", err);
            setError("No se pudo conectar con el servidor.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-sidebar">
                <div className="overlay"></div>
                <div className="sidebar-content">
                    <div className="logo">
                        <span className="wrench-icon">🔧</span>
                        <h1>AutoParts</h1>
                    </div>
                    <p>Tu proveedor confiable de refacciones automotrices para talleres y clientes profesionales.</p>
                </div>
            </div>

            <div className="login-form-container">
                <div className="login-form-box">
                    <h2>Iniciar Sesión</h2>
                    <p className="subtitle">Accede a tu cuenta de refaccionaria</p>

                    <form id="loginForm" onSubmit={handleLogin}>
                        <div className="input-group">
                            <label htmlFor="username">Email o Número de Cliente</label>
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                placeholder="ejemplo@correo.com" 
                                required 
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Contraseña</label>
                            <div className="password-wrapper">
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    placeholder="••••••••" 
                                    required 
                                    maxLength="30" 
                                />
                            </div>
                        </div>

                        {/* MENSAJE DE ERROR DINÁMICO */}
                        {error && (
                            <div style={{ color: 'rgb(227, 24, 55)', fontSize: '14px', marginBottom: '15px', fontWeight: '500' }}>
                                ⚠️ {error}
                            </div>
                        )}

                        <button type="submit" className="btn-primary">
                            <span className="car-icon">🚗</span> Iniciar Sesión
                        </button>
                    </form>

                    <div className="divider">
                        <span>¿Nuevo cliente?</span>
                    </div>

                    <Link to="/registro" id="btn-registro" className="btn-secondary">
                        Crear Cuenta
                    </Link>

                    <p className="footer-text">Para talleres mecánicos y compradores profesionales</p>
                </div>
            </div>
        </div>
    );
}

export default Login;