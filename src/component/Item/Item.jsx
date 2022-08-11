import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

 const Item = ({ product }) => {
  return (
         <div className='container' key={product.id} >
        <div className="card stilo">
          <img src={product.img} class="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">{product.name}</h3>    
            <Link to={`/detail/${product.id}`} className="btn btn-primary">Ver Detalle</Link>
          </div>
        </div>
      <br />
      </div>
    )
   
  
};

export default Item