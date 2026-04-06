import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Registro from './components/Registro'
import Inventory from './components/Inventory'
import AddPart from './components/AddPart'
import Orders from './components/Orders'
import Users from './components/Users'

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
  )
}

export default App