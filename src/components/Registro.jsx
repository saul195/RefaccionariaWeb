import React from 'react';

function Registro() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Extraemos los datos del formulario de forma automática
    const form = e.target;
    const formData = new FormData(form);
    const dataToSend = Object.fromEntries(formData.entries());

   
      // 2. Hacemos la llamada al servidor de XAMPP
      const response = await fetch('http://localhost/BackendPHP/registro.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend), // Enviamos el objeto convertido a texto
      });

      // 3. Leemos la respuesta del PHP
      const result = await response.json();

      if (result.success) {
        alert("¡Registro exitoso en AutoParts! 🔧");
        form.reset(); // Limpiamos el formulario
      } else {
        alert("Hubo un error: " + result.message);
      }
    
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form-box">
          <h2>Crear Cuenta</h2>

          <form id="registroForm" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="nombre_completo">Nombre Completo</label>
              <input type="text" id="nombre_completo" name="nombre_completo" placeholder="Ej. Saul Lorenzo Olmos" required />
            </div>

            <div className="input-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" required />
            </div>

            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" placeholder="Mínimo 8 caracteres" required />
            </div>

            <div className="input-group">
              <label htmlFor="rol">Tipo de Perfil</label>
              <select id="rol" name="rol" required defaultValue="usuario">
                <option value="usuario">Cliente Particular / Mecánico</option>
                <option value="admin">Administrador de Tienda</option>
              </select>
            </div>

            <button type="submit" className="btn-primary">
              Registrarse ahora
            </button>
          </form>

          <div className="divider">
            <span>¿Ya tienes cuenta?</span>
          </div>
          <a href="/" className="btn-secondary">Volver al Login</a>
        </div>
      </div>
    </div>
  );
}

export default Registro;