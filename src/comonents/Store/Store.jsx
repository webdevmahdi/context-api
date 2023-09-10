import React from 'react';
import './Store.css'
import { Link } from 'react-router-dom';

const Store = ({product, manageCart}) => {
    let {description, title} = product;
  return (
      <div className='card'>
        <h2 title={title}>{title.length > 15 ? title.slice(0, 16) + '...' : title}</h2>
        <p>{description}</p>
        <div className='button'>
          <button onClick={()=> manageCart(product)}>Add to cart</button>
          <Link to='/product'>Details</Link>
        </div>
      </div>
  )
}

export default Store