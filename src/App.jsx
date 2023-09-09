import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './comonents/Header/Header';
import Home from './comonents/Home/Home';
import Cart from './comonents/Cart/Cart';

function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}>
          <Route path=':product'></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
