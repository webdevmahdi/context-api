import React, { useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';
import useProducts from '../hooks/useProducts';
import Store from '../Store/Store';

const Home = () => {
  let [cartItems, setCartItems] = useState([]);
  let [products] = useProducts();
  let manageCart = selected => {
    let exists = cartItems.find(item => item.id === selected.id);
    if (!exists) {
      let newCart = [...cartItems, selected];
      setCartItems(newCart);
    }
    else{
      alert("Sorry you can't add it, Becuase already its abailable in the cart")
    }
  }
  let removeFromDb = product => {
    let rest = cartItems.filter(cartItem => cartItem.id !== product.id)
    setCartItems(rest);
  }
  return (
    <div className="products">
      <div className='cards'>
        {
          products.map(product => <Store
            product={product}
            key={product.id}
            manageCart={manageCart}
          ></Store>)
        }
      </div>
      <Cart
        key={cartItems.id}
        removeFromDb={removeFromDb}
        cartItems={cartItems}
      ></Cart>
    </div>
  )
}

export default Home;