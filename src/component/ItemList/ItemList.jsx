import React from 'react'
import Item  from '../Item/Item'

const ItemList = ({ products }) => {
  return (
    <ul key={products.id}>
        {products.map(product => (
            <Item product={product} />
        ))}
    </ul>
  )
}

export default ItemList