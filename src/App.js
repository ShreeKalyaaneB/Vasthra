import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TopPicks from './components/TopPicks';
import Footer from './components/Footer';
import MarketPlace from './pages/MarketPlace';
// import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import ViewProduct from './pages/ViewProduct';
import Verify from './pages/Verify';
import Verifier from './pages/Verifier';
import ShopCart from './pages/ShopCart';
import Login from './pages/Login';
import Register from './pages/Register';
import SellerDescription from './pages/SellerDescription';
import Sidebar from './pages/Sidebar';
import Wishlist from './pages/Wishlist';
import MarketNew from './pages/MarketNew';
import Description from './components/Description';
import StepDesc from './components/StepDesc';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/toppicks" element={<TopPicks />} />
        <Route path="/footer" element={<Footer   />} />
        <Route path="/market" element={<MarketPlace  />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/sidebar" element={<Sidebar/>} />
        <Route path="/addproduct" element={<AddProduct  />} />
        <Route path="/viewproduct/:_id" element={<ViewProduct  />} />
        <Route path="/verify" element={<Verify  />} />
        <Route path="/verifier" element={<Verifier  />} />
        <Route path="/cart" element={<ShopCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={< Register/>} />
        <Route path="/wishlist" element={< Wishlist/>} />
        <Route path="/marketnew" element={<MarketNew />} />
        <Route path="/des" element={<Description />} />
        <Route path="/step" element={<StepDesc />} />
        <Route path="/description/:_id" element={< SellerDescription/>} />
      </Routes>
    </Router>
  );
}

export default App;
