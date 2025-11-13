import React from 'react'
import Book from './components/Book'
import './App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'

function Home() {
  return (
    <div className="container">
      <h1 className="page-title">Featured Books</h1>
      <div id="vid">
        <Book title="English" price="450" img="https://mtgpublicwp.mtg.in/wp-content/uploads/2021/05/2023_learning_eng_cl2_9789355553492-375x425.jpg" />
        <Book title="Hindi" price="460" img="https://m.media-amazon.com/images/I/71C12bKgYJL._AC_UF1000,1000_QL80_.jpg" />
        <Book title="Maths" price="600" img="https://www.maplepress.co.in/cdn/shop/products/mentalmaths5_700x700.jpg?v=1682310455" />
        <Book title="Science" price="700" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRj_oCHYrVVnRb-9n1eOPnC8oWI4oHDCK9iQ&s" />
      </div>
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </CartProvider>
  )
}

export default App