import React from 'react';
import Sidebar from '../Sidebar'; 
//import './Styles/Admin.css';

function Orders() {
  return (
    <div className="admin-container">
      <Sidebar />

      <main className="main-wrapper">
        <h1>Ordenes</h1>
        <p className="description">Manage customer orders and shipments</p>

        <div className="data-card">
          <table>
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ORD-2026-001</td>
                <td>John Smith</td>
                <td>19/3/2026</td>
                <td>3</td>
                <td>$234.97</td>
                <td>
                  <span className="badge in-stock">Delivered</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Orders;