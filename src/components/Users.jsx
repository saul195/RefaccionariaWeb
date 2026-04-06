import React from 'react';
import Sidebar from './Sidebar'; 
import './Styles/Admin.css';

function Users() {
  const usersData = [
    { id: 1, name: "Michael Chen", email: "michael.chen@autoparts.com", role: "Admin", status: "Active", lastLogin: "21/3/2026" },
    { id: 2, name: "Saul Lorenzo", email: "saul.lorenzo@autoparts.com", role: "User", status: "Active", lastLogin: "05/4/2026" },
  ];

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
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user) => (
                <tr key={user.id}>
                  <td style={{ fontWeight: '600' }}>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`role-badge ${user.role.toLowerCase()}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span className="badge in-stock">
                      {user.status}
                    </span>
                  </td>
                  <td>{user.lastLogin}</td>
                  <td style={{ cursor: 'pointer', fontSize: '1.2rem' }}>⚙️ 🗑️</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Users;