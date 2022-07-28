import React from 'react'
import './Item.css'

export const Item = ({ product }) => {
  return <>
      <div className='container' >
      <div class="card stilo">
      <img src={product.img} class="card-img-top" alt="..."/>
      <div class="card-body">
    <h3 class="card-title">{product.name}</h3>
    <h6 class="card-title">{product.category}</h6>
    <p class="card-text">{product.description}</p>
    <h5 class="card-title">$ {product.price}</h5>
    <p className='card-text'>stock:{product.stock}</p>
    <a href="#" className="btn btn-primary">Comprar Ya</a>
    </div>
      </div>
      <br />
      </div>
    </>
   
  
};
