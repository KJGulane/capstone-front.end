import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const isLoggedIn = user !== null; // Check if the user is logged in

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        {/* Redirect to home if the user is logged in */}
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;
