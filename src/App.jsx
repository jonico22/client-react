import { Routes, Route,HashRouter } from "react-router-dom"
import Home from './page/Home'
import Product from './page/Product'
import ProductEdit from './page/ProductEdit'
import ProductNew from './page/ProductNew'
import Cart from './page/Cart'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/productos" element={ <Product/> } />
      <Route path="/carrito" element={ <Cart/> } />
      <Route path="/productos/nuevo" element={ <ProductNew/> } />
      <Route path="/productos/edit/:id" element={ <ProductEdit/> } />
    </Routes>

  )
}

export default App
