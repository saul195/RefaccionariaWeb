import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar'; 
import '../Styles/Admin.css';

function Users() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- 1. Obtener Usuarios ---
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost/BackendPHP/Users/mostrarUsers.php');
      const data = await response.json();
      setUsersData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error cargando usuarios:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // --- 2. Eliminar Usuario ---
  const deleteUser = async (id, name) => {
    // Confirmación de seguridad
    const confirmDelete = window.confirm(`¿Estás seguro de eliminar a ${name}? Esta acción no se puede deshacer.`);
    
    if (confirmDelete) {
      try {
        const response = await fetch('http://localhost/BackendPHP/Users/deleteUsers.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: id })
        });

        const result = await response.json();

        if (result.success) {
          // Filtramos el estado para que el usuario desaparezca visualmente de inmediato
          setUsersData(usersData.filter(user => user.id !== id));
          alert("Usuario eliminado con éxito 🗑️");
        } else {
          alert("Error: " + result.message);
        }
      } catch (error) {
        console.error("Error al intentar eliminar:", error);
        alert("Hubo un fallo en la conexión con el servidor.");
      }
    }
  };

  return (
    <div className="admin-container">
      <Sidebar />

      <main className="main-wrapper">
        <header className="page-header">
          <div>
            <h1>Users</h1>
            <p className="description">Manage admin users and permissions</p>
          </div>
        </header>

        <div className="data-card">
          {loading ? (
            <div className="loading">Cargando usuarios...</div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {usersData.length > 0 ? (
                  usersData.map((user) => (
                    <tr key={user.id}>
                      <td style={{ fontWeight: '600' }}>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <span className={`role-badge ${user.role?.toLowerCase()}`}>
                          {user.role}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${user.status === 'activo' ? 'in-stock' : 'out-of-stock'}`}>
                          {user.status}
                        </span>
                      </td>
                      <td>{new Date(user.lastLogin).toLocaleDateString()}</td>
                      <td style={{ fontSize: '1.2rem' }}>
                        <span 
                          style={{ cursor: 'pointer', marginRight: '12px' }} 
                          title="Editar"
                          onClick={() => alert('Función de edición en desarrollo ⚙️')}
                        >
                          ⚙️
                        </span>
                        <span 
                          style={{ cursor: 'pointer', color: '#ff4d4d' }} 
                          title="Eliminar"
                          onClick={() => deleteUser(user.id, user.name)}
                        >
                          🗑️
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center' }}>No hay usuarios registrados.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}

export default Users;