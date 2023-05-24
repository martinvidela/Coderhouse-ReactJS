import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import { Cart } from './components/Cart/Cart'

// import { Footer } from './components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  //  <React.StrictMode>
  <BrowserRouter>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </CartProvider>
  </BrowserRouter>

  // </React.StrictMode>,
)
