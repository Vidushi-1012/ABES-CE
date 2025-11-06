import React from 'react'
import './card.css'
function Card(props) {
  return (
    <div id="vid">
      <img src="https://img.freepik.com/free-vector/woman-with-long-brown-hair-pink-shirt_90220-2940.jpg?semt=ais_hybrid&w=740&q=80" alt=""  height={100} width={100}/>
      <h2>{props.name}</h2>
      <h5>{props.edu}</h5>
    </div>
  )
}

export default Card