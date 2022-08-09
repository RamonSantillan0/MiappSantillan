import { useState } from 'react'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter'

const ItemDetail = ({ products }) => {
  const [quantity, setQuantity] = useState(0)

  const [show, setShow] = useState(true)
  const handleOnAdd = (quantity) => {
    console.log('Cantidad de productos agregados', quantity)
    setQuantity(quantity)
  }

  return (
    <>
    <div className='container' >
      <div class="card stilo">
      <img src={products.img} class="card-img-top" alt="..."/>
      <div class="card-body">
    <h3 class="card-title">{products.name}</h3>
    <h6 class="card-title">{products.category}</h6>
    <p class="card-text">{products.description}</p>
    <h5 class="card-title">$ {products.price}</h5>
    <p className='card-text'>stock:{products.stock}</p>
    {quantity > 0 ? <Link to='/cart' className="btn btn-primary">Ir al carrito</Link> : <Counter show={show} stock={products.stock} initial={1} onAdd={handleOnAdd}/>}
    </div>
      </div>
      <br />
      </div>
    </>
  )
}

export default ItemDetail
