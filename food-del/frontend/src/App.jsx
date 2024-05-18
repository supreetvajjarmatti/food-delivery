import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import ScrollTopBotton from './components/ScrollToTopButton/ScrollToTopButton'
import CookieConsentPopup from './components/CookieConsentPopup/CookieConsentPopup'

const App = () => {

  const [showlogin,setShowLogin] = useState(false)

  const [acceptedCookies, setAcceptedCookies] = useState(false);

  const handleAcceptCookies = () => {
    setAcceptedCookies(true);
  };

  const handleRejectCookies = () => {
    // Handle cookie rejection if needed
    setAcceptedCookies(false);
  };

  return (
    <>
    {showlogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <ScrollTopBotton/>
      
      <CookieConsentPopup onAccept={handleAcceptCookies} onReject={handleRejectCookies} />
      
  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
      
      
    </div>
    <Footer/>
    </>
  )
}

export default App
