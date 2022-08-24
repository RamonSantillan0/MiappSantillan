import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ products, id, name, img, category, description, price, stock  }) => {
  const [quantity, setQuantity] = useState(0)

  const { addItem, getProductQuantity } = useContext(CartContext)

  const quantityAdded = getProductQuantity(id)

  const [show, setShow] = useState(true)
  const handleOnAdd = (quantity) => {
    console.log('Cantidad de productos agregados', quantity)
    setQuantity(quantity)
    addItem({id, name, price, quantity})
  }

  return (
    <>
    <div className='container mb-5' >
      <div className="card stilo">
      <img src={img} class="card-img-top" alt="..."/>
      <div className="card-body">
    <h3 className="card-title">{name}</h3>
    <h6 className="card-title">{category}</h6>
    <p className="card-text">{description}</p>
    <h5 className="card-title">$ {price}</h5>
    <p className='card-text'>stock:{stock}</p>
    {quantity > 0 ? <Link to='/cart' className="btn btn-primary">Ir al carrito</Link> : <Counter show={show} stock={stock} initial={quantityAdded} onAdd={handleOnAdd}/>}
    </div>
      </div>
      <br />
      </div>
    </>
  )
}

export default ItemDetail
