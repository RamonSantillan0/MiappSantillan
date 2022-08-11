import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

  const { getQuantity } = useContext(CartContext)

  const quantity = getQuantity()

  return (
    <Link to='/cart'>
        <img src="images/cart.svg" alt="cart" width={20} height={20}  />
        {quantity}
    </Link>
  )
}

export default CartWidget
