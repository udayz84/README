import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

import Cart from './pages/Cart'
import Products from './pages/products'
function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element= {<Products />} />
          <Route path="/cart" element= {<Cart />} />



        </Routes>
      </Router>
    </>
  )
}

export default App
