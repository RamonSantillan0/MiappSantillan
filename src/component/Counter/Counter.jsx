import React from 'react'
import { useState } from 'react'

const Counter = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   return(
    <div>
        <button onClick={decrement}>-</button>
        <p>{quantity}</p>
        <button onClick={increment}>+</button>
        <br />
        <button className="btn btn-primary" onClick={() => onAdd(quantity)}>Agregar al Carrito</button>
    </div>
  )
}

export default Counter