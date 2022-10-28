import './App.css';
import HomePage from './Pages/website/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './Pages/website/gallery';
import Test from './Pages/website/test';
import PaymentPage from './Pages/website/payment';
import AboutPage from './Pages/website/about';
import ContactPage from './Pages/website/contact';
import CartPage from './Pages/website/cart';
import AdminPage from './Pages/admin/adminPage';
import LoginPage from './Pages/admin/loginPage';
import OrdersPage from './Pages/admin/orders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage/>} path="/home"/>
          <Route element={<Gallery/>} path="/shop"/> 
          <Route element={<PaymentPage/>} path='/payment'/>
          <Route element={<AboutPage/>} path='/about'/>
          <Route element={<ContactPage/>} path='/contact'/>
          <Route element={<CartPage/>} path='/cart'/>
          <Route element={<AdminPage/>} path='/admin/home'/>
          <Route element={<LoginPage/>} path='/admin/login'/>
          <Route element={<OrdersPage/>} path='/admin/orders'/>
          <Route element={<Test/>} path="/test"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
