import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './comonents/Header/Header';
import Home from './comonents/Home/Home';
import Details from './comonents/Details/Details'
import NotFound from './comonents/NotFound/NotFound';

function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product/:product' element={<Details></Details>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  )
}

export default App
