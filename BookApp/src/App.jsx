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
        <Book title="Maths" price="600" img="https://png.pngtree.com/png-clipart/20231015/original/pngtree-chemistry-text-book-picture-image_13167835.png" />
        <Book title="Science" price="700" img="https://www.helmandbooks.com/images/IMG_COVERPAGE_20230120_010311.jpg" />
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