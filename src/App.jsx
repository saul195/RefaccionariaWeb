import { Routes, Route } from 'react-router-dom';
// Corregimos las rutas agregando el "./" para indicar que están en la misma carpeta o subcarpetas
import Login from './components/vistas/Login';
import Registro from './components/vistas/Registro';
import Inventory from './components/vistas/Inventory';
import AddPart from './components/vistas/AddPart';
import Orders from './components/vistas/Orders';
import Users from './components/vistas/Users';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/AddPart" element={<AddPart />} />
      <Route path="/Users" element={<Users />} />
    </Routes>
  );
}

export default App;