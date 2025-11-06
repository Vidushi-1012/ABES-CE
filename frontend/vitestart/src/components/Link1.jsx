import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
function link1() {
    function Home(){
        return <h1>This is my Home Page</h1>
    }
    function About(){
        return <h1>This is my About Page</h1>
    }
  return (
    <div>
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About us</Link>
        </nav>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
        
    </div>
  )
}

export default link1