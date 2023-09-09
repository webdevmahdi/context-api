import React from 'react';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
  return (
    <div className="products">
      <div className='card'>
        <h1>Mahdi hasan</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa similique obcaecati incidunt ad, quam magnam in. Quam deserunt consequuntur facere possimus? Iure eum reprehenderit mollitia labore. Voluptatum voluptatem incidunt ex.</p>
        <div className='button'>
          <button>Add to cart</button>
          <button>Details</button>
        </div>
      </div>
      <Cart></Cart>
    </div>
  )
}

export default Home;