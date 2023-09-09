import React from 'react'

const Cart = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Cart: {props.cartItems.length}</h1>
    </div>
  )
}

export default Cart;