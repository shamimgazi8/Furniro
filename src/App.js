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
import ProductDetails from './components/ProductDetails';
import InteriorPage from './components/Interior';
const NotFound = () => (
  <div className="no-page-found">
  <div className="content">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="home-link">Go to Homepage</a>
  </div>
</div>
);


function App() {
  const getSlugFromUrl = () => {
    // Get the current URL
    const url = window.location.href;
    
    // Split the URL by '/' to get individual parts
    const parts = url.split('/');
    
    // The last part of the URL typically contains the slug
    const lastPart = parts[parts.length - 1];
    
    // Clean and transform the last part into a slug
    const slug = lastPart
      .toLowerCase()                      // Convert to lowercase
      .replace(/[^\w-]+/g, '-')           // Replace non-word characters with -
      .replace(/--+/g, '-')               // Replace multiple - with single -
      .replace(/^-+/, '')                 // Remove leading -
      .replace(/-+$/, '');                // Remove trailing -
      
    return slug;
  };

  // Get the slug
  const slug = getSlugFromUrl();
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1KkSJCsqCyCJL44TKna6Zf3EnqzUZskCPg&s"
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
                <NavLink to="/interior" className="nav-link" activeClassName="active">
                  Interior
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
          <Route path={`/shop/${slug}`} element={<ProductDetails />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/interior" element={<InteriorPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
