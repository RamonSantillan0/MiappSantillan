import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = ({ product }) => {
  return <>
         <div className='container' >
        <div class="card stilo">
          <img src={product.img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h3 class="card-title">{product.name}</h3>    
            <Link to={`/detail/${product.id}`} className="btn btn-primary">Ver Detalle</Link>
          </div>
        </div>
      <br />
      </div>
    </>
   
  
};
