import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [mainImage, setMainImage] = useState('screen.PNG');
  const [cartCount, setCartCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const images = ['screen.PNG', 'Capture.PNG', '2.PNG', '3.PNG'];

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleRemoveFromCart = () => {
    if (cartCount > 0) setCartCount(cartCount - 1);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="container">
      <header className={darkMode ? 'dark-mode' : ''}>
        <div className="header-left">
          <h1 className={darkMode ? 'dark-mode-text' : ''}>Sneaker Company</h1>
        </div>
        <button className="toggle-button" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="burger-icon"></div>
          <div className="burger-icon"></div>
          <div className="burger-icon"></div>
        </div>
        <div className="cart">
          <span>Cart: {cartCount}</span>
        </div>
      </header>
      {menuOpen && (
        <nav className={`navbar ${darkMode ? 'dark-mode' : ''} open`}>
          <button className="close-btn" onClick={toggleMenu}>X</button>
          <ul>
            <li><a href="#collection">Collection</a></li>
            <li><a href="#men">Men</a></li>
            <li><a href="#women">Women</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}
      <main>
        <div className="product">
          <div className="main-image" onClick={() => setModalOpen(true)}>
            <img
              src={mainImage}
              alt="Main product"
              className={darkMode ? 'dark-mode' : ''}
            />
          </div>
          <div className="thumbnail-images">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(img)}
                className={mainImage === img ? 'active' : ''}
              />
            ))}
          </div>
          <div className="details">
            <h2>Fall Limited Edition Sneakers</h2>
            <p>Price: <span className="price">$125.00</span> <span className="discount">$250.00</span></p>
            <div className="actions">
              <button onClick={handleAddToCart}>Add to Cart</button>
              <button onClick={handleRemoveFromCart}>Remove</button>
            </div>
          </div>
        </div>
      </main>
      {modalOpen && (
        <div className={`modal ${darkMode ? 'dark-mode' : ''}`}>
          <div className="modal-content">
            <button className="close" onClick={() => setModalOpen(false)}>X</button>
            <img src={mainImage} alt="Modal Main" />
            <div className="modal-thumbnails">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Modal Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img)}
                  className={mainImage === img ? 'active' : ''}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
