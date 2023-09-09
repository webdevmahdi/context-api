import React from 'react';
import './Store.css'

const Store = ({product}) => {
  return (
      <div className='card'>
        <h2 title={product.title}>{product.title.length > 15 ? product.title.slice(0, 16) + '...' : product.title}</h2>
        <p>{product.description}</p>
        <div className='button'>
          <button>Add to cart</button>
          <button>Details</button>
        </div>
      </div>
  )
}

export default Store