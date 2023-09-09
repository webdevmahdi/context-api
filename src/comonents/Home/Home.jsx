import React, { useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';
import useProducts from '../hooks/useProducts';
import Store from '../Store/Store';

const Home = () => {
  let [cartItems, setCartItems] = useState([]);
  let [products] = useProducts();
  let manageCart = selected => {
    let newCart = [...cartItems, selected];
    setCartItems(newCart);
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
      <Cart cartItems={cartItems}></Cart>
    </div>
  )
}

export default Home;