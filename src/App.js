import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import AllProducts from './Pages/AllProducts/AllProducts';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Error from './Pages/Error/Error';

function App() {

  return (
    <BrowserRouter className='default-css'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home/' element={<Home />} />
        <Route path='/allproducts/' element={<AllProducts />} />
        <Route path='/login/' element={<Login />} />
        <Route path='/register/' element={<Register />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
