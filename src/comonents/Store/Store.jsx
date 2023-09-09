import React from 'react';
import './Store.css'

const Store = ({product, manageCart}) => {
    let {description, title} = product;
  return (
      <div className='card'>
        <h2 title={title}>{title.length > 15 ? title.slice(0, 16) + '...' : title}</h2>
        <p>{description}</p>
        <div className='button'>
          <button onClick={()=> manageCart(product)}>Add to cart</button>
          <button>Details</button>
        </div>
      </div>
  )
}

export default Store