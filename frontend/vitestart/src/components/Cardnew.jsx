import React from 'react'

function Cardnew(props) {
  return (
    <div id="vid">
      <img src="https://img.freepik.com/free-vector/stack-colorful-books_1308-171744.jpg?semt=ais_hybrid&w=740&q=80" height={100} wifth={100}/>
      <h2>Title: {props.title}</h2>
      <h3>Price: {props.price}</h3>
      <button>+</button>
      <p id="result"></p>
      <button>+</button>

    </div>
  )
}

export default Cardnew