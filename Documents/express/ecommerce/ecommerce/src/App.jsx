import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import {CartContextProvider} from './context/Cartcontext'
import Cart from './pages/Cart'
import Products from './pages/products'
function App() {
  

  return (
    <CartContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element= {<Products />} />
          <Route path="/cart" element= {<Cart />} />



        </Routes>
      </Router>
    </CartContextProvider>
  )
}

export default App
