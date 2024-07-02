import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home';
import AboutPage from './components/About';
import Contactpage from './components/Contact';
import NavRight from './components/NavRight';
import Footer from './components/Footer';
import ShopPage from './components/Shop';
import CollectionPage from './components/Collection';
import CheckoutPage from './components/Checkout';
const NotFound = () => (
  <div>
    <h1>404 Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
  </div>
);

function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
       <div className={`App `}>
          <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
          <a href="/">
            <img
              className="logo"
              src="https://png.pngtree.com/template/20190928/ourmid/pngtree-gold-furniture-lamp-chair-interior-logo-design-template-inspirat-image_312127.jpg"
              alt="logo"
            />
          </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link " activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop" className="nav-link" activeClassName="active">
                  Shop
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/collection" className="nav-link" activeClassName="active">
                  Collections
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className="nav-link" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavRight />
          </nav>
     
        

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
