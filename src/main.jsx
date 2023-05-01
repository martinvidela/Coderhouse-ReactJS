import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
// import { Footer } from './components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  //  <React.StrictMode>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:id' element={<ItemListContainer />} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />
    </Routes>
    
  </BrowserRouter>
  // </React.StrictMode>,
)
