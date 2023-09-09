import React, { useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';
import useProducts from '../hooks/useProducts';
import Store from '../Store/Store';

const Home = () => {
  let [cart, setCart] = useState();
  let [products] = useProducts();
  let manageCart = selected => {
    let newCart = [...cart, selected];
    setCart(newCart);
  }
  return (
    <div className="products">
      <div className='cards'>
        {
          products.map(product => <Store product={product}></Store>)
        }
      </div>
      <Cart cart={cart}></Cart>
    </div>
  )
}

export default Home;