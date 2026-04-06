import React from 'react';
import Sidebar from './Sidebar';
import './Styles/Admin.css';

function Inventory() {
  // Datos de ejemplo (más adelante estos vendrán de PHP/MySQL)
  const inventoryData = [
    { id: 1, name: "Brake Pads - Front", sku: "BP-F-001", vehicle: "2023 Toyota Camry", price: "$89.99", stock: 45, status: "in-stock", statusText: "In Stock" },
    { id: 2, name: "Spark Plugs Set", sku: "SP-003", vehicle: "2022 Ford F-150", price: "$34.99", stock: 8, status: "low-stock", statusText: "Low Stock" },
  ];

  return (
    <div className="admin-container">
      <Sidebar />

      <main className="main-wrapper">
        <h1>Inventory Management</h1>
        <p className="description">View and manage your automotive parts inventory</p>

        <div className="data-card">
          <table>
            <thead>
              <tr>
                <th>Part Name</th>
                <th>SKU</th>
                <th>Vehicle</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((part) => (
                <tr key={part.id}>
                  <td>{part.name}</td>
                  <td>{part.sku}</td>
                  <td>{part.vehicle}</td>
                  <td>{part.price}</td>
                  <td>{part.stock}</td>
                  <td>
                    <span className={`badge ${part.status}`}>
                      {part.statusText}
                    </span>
                  </td>
                  <td style={{ cursor: 'pointer' }}>📝 🗑️</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <h3>Total Parts</h3>
            <span>8</span>
          </div>
          <div className="stat-box" style={{ borderTopColor: '#10b981' }}>
            <h3>In Stock</h3>
            <span style={{ color: '#10b981' }}>5</span>
          </div>
          <div className="stat-box" style={{ borderTopColor: '#f59e0b' }}>
            <h3>Low Stock</h3>
            <span style={{ color: '#f59e0b' }}>2</span>
          </div>
          <div className="stat-box" style={{ borderTopColor: '#ef4444' }}>
            <h3>Out of Stock</h3>
            <span style={{ color: '#ef4444' }}>1</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Inventory;