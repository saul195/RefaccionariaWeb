import React from 'react';
import Sidebar from './Sidebar'; 
import './Styles/Admin.css';
function AddPart() {
  return (
  
  <div className="admin-container">
  <Sidebar />
  <main className="main-wrapper">
    <h1>Add New Part</h1>
    <p className="description">Enter the details of the new automotive component</p>
    
    <div className="data-card" style={{ maxWidth: '800px' }}>
      <form className="admin-form">
        <div className="form-group">
          <label>Part Name</label>
          <input type="text" placeholder="Ex: Front Brake Pads" />
        </div>

        <div className="form-group">
          <label>SKU (Stock Keeping Unit)</label>
          <input type="text" placeholder="BP-2026-X" />
        </div>

        <div className="form-group">
          <label>Vehicle Compatibility</label>
          <div className="vehicle-inputs">
            <input type="text" placeholder="Year" />
            <input type="text" placeholder="Make" />
            <input type="text" placeholder="Model" />
          </div>
        </div>

        <div className="form-group">
          <label>Product Image</label>
          <div className="upload-container">
            📤 Click to upload or drag and drop
          </div>
        </div>

        <button type="submit" className="btn-add">🚀 Save Product</button>
      </form>
    </div>
  </main>
</div>
  );
}

export default AddPart;