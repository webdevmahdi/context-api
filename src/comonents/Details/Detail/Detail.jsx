import React from 'react'
import { useNavigate } from 'react-router-dom';

const Detail = (props) => {
    let { product, id} = props.product;
  let navigate = useNavigate();
  let productDetails = () => {
    let path = `/product/${id}`;
    navigate(path)
  }
  console.log(props)
  return (
    <div>
      <p>Detail : {product.length}</p>
      <button onClick={productDetails}>Show details</button>
</div>
  )
}

export default Detail;