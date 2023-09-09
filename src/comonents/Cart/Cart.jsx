import React from 'react'

const Cart = ({removeFromDb, cartItems}) => {
  return (
    <div>
      <h1>Cart: {cartItems.length}</h1>
      {
        cartItems.map(item => 
      <p>
        {item.title}
        <button onClick={()=> removeFromDb(item)}>Remove</button>
      </p>)
      }
    </div>
  )
}

export default Cart;