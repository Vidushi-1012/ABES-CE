import React from 'react'
import './css3.css'
function Asgnp3(props) {
  return (
    <div id="vid">
      <h2>{props.name}</h2>
      <img src={props.img} alt=""  height={300} width={300}/>
      <h5>{props.price}</h5>
    </div>
  )
}

export default Asgnp3