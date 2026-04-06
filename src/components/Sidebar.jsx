import React from 'react';
import './Styles/Admin.css'; 

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">Auto Parts Admin</div>
      <ul className="nav-menu">
        <li className="nav-item"><a href="Inventory" className="active">📦 Inventario</a></li>
        <li className="nav-item"><a href="AddPart" className="active">➕ Nuevo Producto</a></li>
        <li className="nav-item"><a href="Orders" className = "active">🛒 Ordenes</a></li>
        <li className="nav-item"><a href="Users" className = "active">👥 Usuarios</a></li>
      </ul>
    </nav>
  );
}

export default Sidebar;