import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Detail from './Detail/Detail';

const Details = () => {
  let [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  
  return (
    <div>
      {
        products.map(product => <Detail 
          key={product.id}
          product={product}
        ></Detail>)
      }
    </div>
  )
}

export default Details;