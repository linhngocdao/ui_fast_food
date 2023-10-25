import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ClientLayuot, AdminLayout } from './layout'
import Products from './components/client/products'
import Signin from './components/client/signin'
import Signup from './components/client/signup'
import Cart from './components/client/cart'
import Checkout from './components/client/cart/checkout'
import DetailProduct from './components/client/detail'
import Tes from './components/admin/sidebar/tes'



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ClientLayuot />}/>
          <Route path="/product" element={<Products />}/>
          <Route path="/login" element={<Signin />}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/detail' element={<DetailProduct/>}/>
        </Routes>
        <Routes>
          <Route path="/admin" element={<AdminLayout />}/>
          <Route path="/product" element={<Products />}/>
          <Route path='/tes' element={<Tes/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
