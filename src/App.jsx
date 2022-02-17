import { Routes, Route } from "react-router-dom"
import Home from './page/Home'
import Product from './page/Product'
import Cart from './page/Cart'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="productos" element={ <Product/> } />
      <Route path="carrito" element={ <Cart/> } />
    </Routes>

  )
}

export default App
