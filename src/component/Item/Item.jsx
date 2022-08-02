import React from 'react'
import './Item.css'

export const Item = ({ product }) => {
  return <>
      <div className='container' >
        <div class="card stilo">
          <img src={product.img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h3 class="card-title">{product.name}</h3>    
              <a href="#" className="btn btn-primary">Ver Detalle</a>
          </div>
        </div>
      <br />
      </div>
    </>
   
  
};
